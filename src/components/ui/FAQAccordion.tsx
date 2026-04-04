"use client";

import { useState } from "react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export default function FAQAccordion({ items, className = "" }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={className}>
      {items.map((item, index) => (
        <div
          key={item.id}
          className={index < items.length - 1 ? "border-b border-dark" : ""}
        >
          <button
            onClick={() => toggle(item.id)}
            className="flex w-full items-center justify-between py-[24px] text-left cursor-pointer"
            aria-expanded={openId === item.id}
          >
            <span className="text-[24px] font-bold leading-[1.4] text-black pr-[40px]">
              {item.question}
            </span>
            {/* Toggle indicator — "+" crosshair style consistent with LoadMore */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0 transition-transform duration-200"
              style={{
                transform: openId === item.id ? "rotate(45deg)" : "rotate(0deg)",
              }}
            >
              <line
                x1="10"
                y1="0"
                x2="10"
                y2="20"
                stroke="#141414"
                strokeWidth="1.5"
              />
              <line
                x1="0"
                y1="10"
                x2="20"
                y2="10"
                stroke="#141414"
                strokeWidth="1.5"
              />
            </svg>
          </button>

          {/* Answer — collapsible with animation */}
          <div
            className="grid transition-[grid-template-rows] duration-300 ease-in-out"
            style={{
              gridTemplateRows: openId === item.id ? "1fr" : "0fr",
            }}
          >
            <div className="overflow-hidden">
              <p className="pb-[24px] text-[24px] font-normal leading-[1.4] text-black">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
