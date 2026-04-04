"use client";

import { useState, useCallback, Fragment, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { searchContent, type SearchEntry } from "@/data/search-data";

/**
 * Highlight occurrences of `term` inside `text` by wrapping them in <strong>.
 * Case-insensitive.
 */
function highlightTerm(text: string, term: string) {
  if (!term.trim()) return text;
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${escaped})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, i) =>
    regex.test(part) ? (
      <strong key={i} className="font-bold">
        {part}
      </strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
}

/**
 * Truncate content around the first match of `term`, showing an excerpt
 * with "..." on each side.
 */
function getExcerpt(content: string, term: string): string {
  const idx = content.toLowerCase().indexOf(term.toLowerCase());
  if (idx === -1) return content.slice(0, 280) + "...";

  const start = Math.max(0, idx - 80);
  const end = Math.min(content.length, idx + term.length + 200);
  let excerpt = content.slice(start, end);

  if (start > 0) excerpt = "..." + excerpt;
  if (end < content.length) excerpt = excerpt + "...";

  return excerpt;
}

function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const q = searchParams.get("q") || "";

  const [query, setQuery] = useState(q);

  const results: SearchEntry[] | null = q ? searchContent(q) : null;

  const handleSearch = useCallback(() => {
    if (!query.trim()) return;
    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
  }, [query, router]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="min-h-screen bg-white pt-[112px]">
      {/* ─── Search Input Section ─── */}
      {/* Figma: Component 27 at x=243, y=266 → 154px below navbar top */}
      {/* Input: fontSize=40, placeholder #b3b3b3, "Search" button #3754ed */}
      {/* Bottom line: stroke #141414 */}
      {!results && (
        <div className="mx-auto max-w-[1920px] px-[20px] pt-[154px] md:px-[40px] lg:px-[60px] xl:px-[120px] wide:px-[243px]">
          <div className="flex items-end justify-between">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type frase or question"
              autoFocus
              className="w-full bg-transparent text-[24px] text-dark outline-none placeholder:text-placeholder md:text-[32px] xl:text-[40px]"
            />
            <button
              onClick={handleSearch}
              className="shrink-0 text-[24px] text-primary-blue transition-opacity hover:opacity-70 md:text-[32px] xl:text-[40px]"
            >
              Search
            </button>
          </div>
          {/* Bottom line — Figma: Line 3, y=76, stroke #141414 */}
          <div className="mt-[20px] h-px bg-dark" />
        </div>
      )}

      {/* ─── Results Section ─── */}
      {/* Figma: summary at y=173 (61px below navbar), results start at y=270 */}
      {results && (
        <div className="mx-auto max-w-[1920px] px-[20px] pt-[61px] pb-[120px] md:px-[40px] lg:px-[60px] xl:px-[120px] wide:px-[243px]">
          {/* Summary — Figma: fontSize=24, color #000, mixed weight */}
          <p className="text-[18px] leading-[1.5] text-black md:text-[20px] xl:text-[24px]">
            We found <strong className="font-bold">{results.length}</strong>{" "}
            results in your search for{" "}
            <strong className="font-bold">&ldquo;{q}&rdquo;</strong>
          </p>

          {/* Result items — Figma: 76px gap between items */}
          {/* Title: fontSize=36, color=#b3b3b3 | Desc: fontSize=20, color=#000 */}
          <div className="mt-[48px] flex flex-col gap-[76px]">
            {results.length === 0 ? (
              <p className="text-[20px] text-dark/60">
                No results found. Try a different search term.
              </p>
            ) : (
              results.map((entry) => (
                <Link
                  key={entry.href}
                  href={entry.href}
                  className="group block"
                >
                  {/* Title — Figma: fontSize=36, color=#b3b3b3 */}
                  <h2 className="text-[24px] leading-[1.4] text-placeholder transition-colors group-hover:text-primary-blue md:text-[30px] xl:text-[36px]">
                    {entry.title}
                  </h2>

                  {/* Description — Figma: fontSize=20, color=#000, mt=18px */}
                  <p className="mt-[18px] text-[16px] leading-[1.5] text-black xl:text-[20px]">
                    {highlightTerm(getExcerpt(entry.content, q), q)}
                  </p>
                </Link>
              ))
            )}
          </div>

          {/* Search again — navigates back to empty search */}
          <Link
            href="/search"
            className="mt-[60px] inline-block text-[20px] text-primary-blue transition-opacity hover:opacity-70"
          >
            Search again
          </Link>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense>
      <SearchContent />
    </Suspense>
  );
}
