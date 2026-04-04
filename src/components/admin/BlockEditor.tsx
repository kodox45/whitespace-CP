"use client";

import { useState } from "react";
import {
  Plus,
  GripVertical,
  ArrowUp,
  ArrowDown,
  Trash2,
  Type,
  Heading2,
  ImageIcon,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { InsightBodyBlock } from "@/services/types";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface BlockEditorProps {
  value: InsightBodyBlock[];
  onChange: (blocks: InsightBodyBlock[]) => void;
  className?: string;
}

type BlockType = InsightBodyBlock["type"];

const blockTypeConfig: {
  type: BlockType;
  label: string;
  icon: React.ElementType;
}[] = [
  { type: "paragraph", label: "Paragraph", icon: Type },
  { type: "heading", label: "Heading", icon: Heading2 },
  { type: "image", label: "Image", icon: ImageIcon },
  { type: "highlight", label: "Highlight", icon: Sparkles },
];

// ---------------------------------------------------------------------------
// BlockEditor
// ---------------------------------------------------------------------------

export function BlockEditor({ value, onChange, className }: BlockEditorProps) {
  const [showAddMenu, setShowAddMenu] = useState(false);

  const addBlock = (type: BlockType) => {
    let newBlock: InsightBodyBlock;
    switch (type) {
      case "paragraph":
        newBlock = { type: "paragraph", content: "" };
        break;
      case "heading":
        newBlock = { type: "heading", content: "" };
        break;
      case "image":
        newBlock = { type: "image", src: "", alt: "" };
        break;
      case "highlight":
        newBlock = { type: "highlight", content: "" };
        break;
    }
    onChange([...value, newBlock]);
    setShowAddMenu(false);
  };

  const updateBlock = (index: number, updated: InsightBodyBlock) => {
    const next = [...value];
    next[index] = updated;
    onChange(next);
  };

  const removeBlock = (index: number) => {
    onChange(value.filter((_, i) => i !== index));
  };

  const moveBlock = (index: number, direction: -1 | 1) => {
    const next = [...value];
    const target = index + direction;
    if (target < 0 || target >= next.length) return;
    [next[index], next[target]] = [next[target], next[index]];
    onChange(next);
  };

  return (
    <div className={cn("flex flex-col gap-[12px]", className)}>
      {/* Block list */}
      {value.map((block, i) => (
        <BlockItem
          key={i}
          block={block}
          index={i}
          total={value.length}
          onUpdate={(updated) => updateBlock(i, updated)}
          onRemove={() => removeBlock(i)}
          onMove={(dir) => moveBlock(i, dir)}
        />
      ))}

      {/* Empty state */}
      {value.length === 0 && (
        <div className="rounded-[8px] border border-dashed border-gray-dark/40 px-[24px] py-[32px] text-center text-[14px] text-placeholder">
          No content blocks yet. Add your first block below.
        </div>
      )}

      {/* Add block button */}
      <div className="relative">
        <button
          type="button"
          onClick={() => setShowAddMenu(!showAddMenu)}
          className="inline-flex items-center gap-[8px] rounded-full border border-dashed border-gray-dark px-[16px] py-[8px] text-[14px] text-placeholder transition-colors hover:border-primary-blue hover:text-primary-blue"
        >
          <Plus size={16} />
          Add Block
        </button>

        {showAddMenu && (
          <div className="absolute left-0 top-[calc(100%+4px)] z-10 rounded-[8px] border border-gray-dark/30 bg-white py-[4px] shadow-lg">
            {blockTypeConfig.map((cfg) => (
              <button
                key={cfg.type}
                type="button"
                onClick={() => addBlock(cfg.type)}
                className="flex w-full items-center gap-[10px] px-[16px] py-[8px] text-[14px] text-dark transition-colors hover:bg-gray"
              >
                <cfg.icon size={16} className="text-placeholder" />
                {cfg.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// BlockItem — single block editor row
// ---------------------------------------------------------------------------

interface BlockItemProps {
  block: InsightBodyBlock;
  index: number;
  total: number;
  onUpdate: (block: InsightBodyBlock) => void;
  onRemove: () => void;
  onMove: (direction: -1 | 1) => void;
}

function BlockItem({
  block,
  index,
  total,
  onUpdate,
  onRemove,
  onMove,
}: BlockItemProps) {
  const typeLabel = blockTypeConfig.find((c) => c.type === block.type)?.label ?? block.type;

  return (
    <div className="group flex gap-[8px] rounded-[8px] border border-gray-dark/30 bg-white p-[12px] transition-colors hover:border-gray-dark/60">
      {/* Drag handle + controls */}
      <div className="flex shrink-0 flex-col items-center gap-[2px] pt-[4px]">
        <GripVertical size={16} className="text-placeholder" />
        <button
          type="button"
          onClick={() => onMove(-1)}
          disabled={index === 0}
          className="rounded p-[2px] text-placeholder hover:text-dark disabled:opacity-20"
          title="Move up"
        >
          <ArrowUp size={14} />
        </button>
        <button
          type="button"
          onClick={() => onMove(1)}
          disabled={index === total - 1}
          className="rounded p-[2px] text-placeholder hover:text-dark disabled:opacity-20"
          title="Move down"
        >
          <ArrowDown size={14} />
        </button>
      </div>

      {/* Block content */}
      <div className="flex-1">
        <div className="mb-[8px] flex items-center justify-between">
          <span className="text-[12px] font-semibold uppercase tracking-wide text-placeholder">
            {typeLabel}
          </span>
          <button
            type="button"
            onClick={onRemove}
            className="rounded p-[4px] text-placeholder opacity-0 transition-all hover:text-red-500 group-hover:opacity-100"
            title="Remove block"
          >
            <Trash2 size={14} />
          </button>
        </div>

        {block.type === "image" ? (
          <ImageBlockEditor block={block} onUpdate={onUpdate} />
        ) : (
          <TextBlockEditor block={block} onUpdate={onUpdate} />
        )}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Text block editor (paragraph, heading, highlight)
// ---------------------------------------------------------------------------

function TextBlockEditor({
  block,
  onUpdate,
}: {
  block: Extract<InsightBodyBlock, { content: string }>;
  onUpdate: (block: InsightBodyBlock) => void;
}) {
  const isHeading = block.type === "heading";
  const isHighlight = block.type === "highlight";

  return (
    <textarea
      value={block.content}
      onChange={(e) =>
        onUpdate({ ...block, content: e.target.value } as InsightBodyBlock)
      }
      placeholder={
        isHeading
          ? "Section heading..."
          : isHighlight
            ? "Highlighted quote or statement..."
            : "Paragraph text..."
      }
      rows={isHeading ? 1 : 3}
      className={cn(
        "w-full resize-y rounded-[6px] border border-gray-dark/30 bg-transparent px-[10px] py-[8px] text-[14px] text-dark placeholder:text-placeholder focus:border-primary-blue focus:outline-none",
        isHeading && "text-[16px] font-bold",
        isHighlight && "italic border-l-[3px] border-l-primary-blue"
      )}
    />
  );
}

// ---------------------------------------------------------------------------
// Image block editor
// ---------------------------------------------------------------------------

function ImageBlockEditor({
  block,
  onUpdate,
}: {
  block: Extract<InsightBodyBlock, { type: "image" }>;
  onUpdate: (block: InsightBodyBlock) => void;
}) {
  return (
    <div className="flex flex-col gap-[8px]">
      <input
        type="text"
        value={block.src}
        onChange={(e) => onUpdate({ ...block, src: e.target.value })}
        placeholder="Image path (e.g. /images/example.png)"
        className="border-b border-gray-dark bg-transparent py-[6px] text-[14px] text-dark placeholder:text-placeholder focus:border-primary-blue focus:outline-none"
      />
      <input
        type="text"
        value={block.alt ?? ""}
        onChange={(e) => onUpdate({ ...block, alt: e.target.value })}
        placeholder="Alt text (optional)"
        className="border-b border-gray-dark bg-transparent py-[6px] text-[14px] text-dark placeholder:text-placeholder focus:border-primary-blue focus:outline-none"
      />
      {block.src && (
        <div className="mt-[4px] h-[80px] w-[140px] overflow-hidden rounded-[6px] border border-gray-dark/30 bg-gray">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={block.src}
            alt={block.alt ?? ""}
            className="h-full w-full object-cover"
          />
        </div>
      )}
    </div>
  );
}
