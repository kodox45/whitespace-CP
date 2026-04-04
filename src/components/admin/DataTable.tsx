"use client";

import { useState, useMemo } from "react";
import {
  ChevronUp,
  ChevronDown,
  ChevronsUpDown,
  Pencil,
  Trash2,
  Search,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { EmptyState } from "./EmptyState";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface Column<T> {
  /** Unique key — used for sorting. Can be keyof T or a custom string. */
  key: string;
  /** Column header label */
  label: string;
  /** Custom render function. Receives the full row item. */
  render?: (item: T) => React.ReactNode;
  /** Enable sorting on this column. Default: false */
  sortable?: boolean;
  /** Column width class (e.g. "w-[200px]"). Optional. */
  width?: string;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  /** Unique key extractor. Default: (item) => item.id */
  rowKey?: (item: T) => string;
  /** Click anywhere on the row to trigger this action */
  onRowClick?: (item: T) => void;
  /** Show edit button per row */
  onEdit?: (item: T) => void;
  /** Show delete button per row */
  onDelete?: (item: T) => void;
  /** Custom actions rendered in the actions column */
  renderActions?: (item: T) => React.ReactNode;
  /** Enable search bar. Requires searchKeys. */
  searchable?: boolean;
  /** Keys to search against (cast to string for matching) */
  searchKeys?: (keyof T)[];
  /** Search placeholder text */
  searchPlaceholder?: string;
  /** Items per page. Default: 10. Set 0 for no pagination. */
  pageSize?: number;
  /** Message when no data. Default: "No items found" */
  emptyMessage?: string;
  /** Loading state */
  loading?: boolean;
  /** Additional className on wrapper */
  className?: string;
}

type SortDir = "asc" | "desc";

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function DataTable<T extends Record<string, any>>({
  data,
  columns,
  rowKey,
  onRowClick,
  onEdit,
  onDelete,
  renderActions,
  searchable = false,
  searchKeys = [],
  searchPlaceholder = "Search...",
  pageSize = 10,
  emptyMessage = "No items found",
  loading = false,
  className,
}: DataTableProps<T>) {
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<SortDir>("asc");
  const [page, setPage] = useState(1);

  // --- Filter ---
  const filtered = useMemo(() => {
    if (!search || searchKeys.length === 0) return data;
    const q = search.toLowerCase();
    return data.filter((item) =>
      searchKeys.some((key) => {
        const val = item[key];
        return val != null && String(val).toLowerCase().includes(q);
      })
    );
  }, [data, search, searchKeys]);

  // --- Sort ---
  const sorted = useMemo(() => {
    if (!sortKey) return filtered;
    return [...filtered].sort((a, b) => {
      const aVal = a[sortKey] ?? "";
      const bVal = b[sortKey] ?? "";
      const cmp = String(aVal).localeCompare(String(bVal), undefined, {
        numeric: true,
      });
      return sortDir === "asc" ? cmp : -cmp;
    });
  }, [filtered, sortKey, sortDir]);

  // --- Paginate ---
  const totalPages = pageSize > 0 ? Math.max(1, Math.ceil(sorted.length / pageSize)) : 1;
  const safePage = Math.min(page, totalPages);
  const paged =
    pageSize > 0
      ? sorted.slice((safePage - 1) * pageSize, safePage * pageSize)
      : sorted;

  // Reset page when filter changes
  const handleSearch = (val: string) => {
    setSearch(val);
    setPage(1);
  };

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
    setPage(1);
  };

  const hasActions = !!onEdit || !!onDelete || !!renderActions;

  return (
    <div className={cn("rounded-[16px] border border-gray-dark/30 bg-white", className)}>
      {/* Search bar */}
      {searchable && (
        <div className="border-b border-gray px-[24px] py-[16px]">
          <div className="relative max-w-[360px]">
            <Search
              size={16}
              className="absolute left-[12px] top-1/2 -translate-y-1/2 text-placeholder"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder={searchPlaceholder}
              className="w-full rounded-[8px] border border-gray-dark/40 bg-transparent py-[8px] pl-[36px] pr-[12px] text-[14px] text-dark placeholder:text-placeholder focus:border-primary-blue focus:outline-none"
            />
          </div>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={cn(
                    "px-[24px] py-[14px] text-left text-[13px] font-semibold uppercase tracking-wide text-placeholder",
                    col.width,
                    col.sortable && "cursor-pointer select-none hover:text-dark"
                  )}
                  onClick={col.sortable ? () => handleSort(col.key) : undefined}
                >
                  <span className="inline-flex items-center gap-[4px]">
                    {col.label}
                    {col.sortable && (
                      <span className="text-placeholder">
                        {sortKey === col.key ? (
                          sortDir === "asc" ? (
                            <ChevronUp size={14} />
                          ) : (
                            <ChevronDown size={14} />
                          )
                        ) : (
                          <ChevronsUpDown size={14} />
                        )}
                      </span>
                    )}
                  </span>
                </th>
              ))}
              {hasActions && (
                <th className="px-[24px] py-[14px] text-right text-[13px] font-semibold uppercase tracking-wide text-placeholder">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td
                  colSpan={columns.length + (hasActions ? 1 : 0)}
                  className="px-[24px] py-[48px] text-center text-[14px] text-placeholder"
                >
                  Loading...
                </td>
              </tr>
            ) : paged.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length + (hasActions ? 1 : 0)}
                  className="px-[24px] py-[48px]"
                >
                  <EmptyState message={emptyMessage} />
                </td>
              </tr>
            ) : (
              paged.map((item, i) => {
                const key = rowKey ? rowKey(item) : String(item.id ?? i);
                return (
                  <tr
                    key={key}
                    onClick={onRowClick ? () => onRowClick(item) : undefined}
                    className={cn(
                      "border-b border-gray last:border-b-0 transition-colors hover:bg-gray/40",
                      onRowClick && "cursor-pointer"
                    )}
                  >
                    {columns.map((col) => (
                      <td
                        key={col.key}
                        className={cn(
                          "px-[24px] py-[16px] text-[14px] text-dark",
                          col.width
                        )}
                      >
                        {col.render
                          ? col.render(item)
                          : String(item[col.key] ?? "—")}
                      </td>
                    ))}
                    {hasActions && (
                      <td className="px-[24px] py-[16px] text-right" onClick={(e) => e.stopPropagation()}>
                        <div className="inline-flex items-center gap-[8px]">
                          {renderActions && renderActions(item)}
                          {onEdit && (
                            <button
                              onClick={() => onEdit(item)}
                              className="rounded-[6px] p-[6px] text-placeholder transition-colors hover:bg-gray hover:text-primary-blue"
                              title="Edit"
                            >
                              <Pencil size={16} />
                            </button>
                          )}
                          {onDelete && (
                            <button
                              onClick={() => onDelete(item)}
                              className="rounded-[6px] p-[6px] text-placeholder transition-colors hover:bg-red-50 hover:text-red-500"
                              title="Delete"
                            >
                              <Trash2 size={16} />
                            </button>
                          )}
                        </div>
                      </td>
                    )}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {pageSize > 0 && sorted.length > pageSize && (
        <div className="flex items-center justify-between border-t border-gray px-[24px] py-[12px]">
          <p className="text-[13px] text-placeholder">
            {sorted.length} items · Page {safePage} of {totalPages}
          </p>
          <div className="flex items-center gap-[4px]">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={safePage <= 1}
              className="rounded-[6px] p-[6px] text-placeholder transition-colors hover:bg-gray hover:text-dark disabled:opacity-30"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={safePage >= totalPages}
              className="rounded-[6px] p-[6px] text-placeholder transition-colors hover:bg-gray hover:text-dark disabled:opacity-30"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
