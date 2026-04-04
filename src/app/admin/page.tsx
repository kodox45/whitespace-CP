"use client";

import Link from "next/link";
import {
  Briefcase,
  FileText,
  BookOpen,
  HelpCircle,
  Mail,
  Plus,
  ArrowRight,
} from "lucide-react";
import { AdminShell } from "@/components/admin/AdminShell";
import { StatsCard } from "@/components/admin/StatsCard";
import { useWorks } from "@/hooks/useWorks";
import { useInsights } from "@/hooks/useInsights";
import { useCaseStudies } from "@/hooks/useCaseStudies";
import { useFAQ } from "@/hooks/useFAQ";
import { useEnquiries } from "@/hooks/useEnquiries";

const quickActions = [
  { label: "New Work", href: "/admin/works/create", icon: Briefcase },
  { label: "New Insight", href: "/admin/insights/create", icon: FileText },
  { label: "New Case Study", href: "/admin/case-studies/create", icon: BookOpen },
  { label: "New FAQ", href: "/admin/faq", icon: HelpCircle },
];

export default function AdminDashboard() {
  const works = useWorks();
  const insights = useInsights();
  const caseStudies = useCaseStudies();
  const faq = useFAQ();
  const enquiries = useEnquiries();

  const loading =
    works.loading || insights.loading || caseStudies.loading || faq.loading || enquiries.loading;

  // Build recent activity from all entities
  const recentItems = buildRecentActivity(
    works.data,
    insights.data,
    caseStudies.data,
    enquiries.data
  );

  return (
    <AdminShell>
      {/* Header */}
      <div className="mb-[32px]">
        <h1 className="text-[32px] font-bold text-dark">Dashboard</h1>
        <p className="mt-[4px] text-[14px] text-placeholder">
          Welcome to Whitespace CMS. Manage your content from here.
        </p>
      </div>

      {/* Stats Row */}
      <div className="mb-[32px] grid grid-cols-5 gap-[16px]">
        <StatsCard
          label="Works"
          value={loading ? "..." : works.data.length}
          icon={Briefcase}
        />
        <StatsCard
          label="Insights"
          value={loading ? "..." : insights.data.length}
          icon={FileText}
        />
        <StatsCard
          label="Case Studies"
          value={loading ? "..." : caseStudies.data.length}
          icon={BookOpen}
        />
        <StatsCard
          label="FAQ"
          value={loading ? "..." : faq.data.length}
          icon={HelpCircle}
        />
        <StatsCard
          label="Unread Enquiries"
          value={loading ? "..." : enquiries.unreadCount}
          icon={Mail}
        />
      </div>

      <div className="grid grid-cols-3 gap-[24px]">
        {/* Recent Activity */}
        <div className="col-span-2 rounded-[16px] border border-gray-dark/30 bg-white p-[24px]">
          <div className="mb-[16px] flex items-center justify-between">
            <h2 className="text-[18px] font-bold text-dark">
              Recent Content
            </h2>
          </div>

          {loading ? (
            <p className="py-[24px] text-center text-[14px] text-placeholder">
              Loading...
            </p>
          ) : recentItems.length === 0 ? (
            <p className="py-[24px] text-center text-[14px] text-placeholder">
              No content yet.
            </p>
          ) : (
            <div className="flex flex-col">
              {recentItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="flex items-center justify-between border-b border-gray py-[14px] last:border-b-0 transition-colors hover:bg-gray/30"
                >
                  <div className="flex items-center gap-[12px]">
                    <div className="flex h-[32px] w-[32px] items-center justify-center rounded-[8px] bg-gray">
                      <item.icon size={16} className="text-placeholder" />
                    </div>
                    <div>
                      <p className="text-[14px] font-medium text-dark">
                        {item.title}
                      </p>
                      <p className="text-[12px] text-placeholder">
                        {item.type}
                      </p>
                    </div>
                  </div>
                  <ArrowRight size={16} className="text-placeholder" />
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="rounded-[16px] border border-gray-dark/30 bg-white p-[24px]">
          <h2 className="mb-[16px] text-[18px] font-bold text-dark">
            Quick Actions
          </h2>
          <div className="flex flex-col gap-[10px]">
            {quickActions.map((action) => (
              <Link
                key={action.href}
                href={action.href}
                className="flex items-center gap-[10px] rounded-[10px] border border-gray-dark/30 px-[16px] py-[12px] text-[14px] text-dark transition-colors hover:border-primary-blue hover:text-primary-blue"
              >
                <Plus size={16} />
                {action.label}
              </Link>
            ))}
          </div>

          {/* Enquiries shortcut */}
          <div className="mt-[16px] border-t border-gray pt-[16px]">
            <Link
              href="/admin/enquiries"
              className="flex items-center justify-between rounded-[10px] bg-primary-blue/5 px-[16px] py-[12px] text-[14px] font-medium text-primary-blue transition-colors hover:bg-primary-blue/10"
            >
              <span className="flex items-center gap-[10px]">
                <Mail size={16} />
                View Enquiries
              </span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}

// ---------------------------------------------------------------------------
// Build recent activity list from all entities
// ---------------------------------------------------------------------------

interface RecentItem {
  id: string;
  title: string;
  type: string;
  href: string;
  icon: React.ElementType;
}

function buildRecentActivity(
  works: { id: string; title: string }[],
  insights: { id: string; title: string; publishedAt: string }[],
  caseStudies: { id: string; title: string; client: string }[],
  enquiries: { id: string; data: { firstName: string; lastName: string; company: string }; submittedAt: string }[]
): RecentItem[] {
  const items: (RecentItem & { sortKey: string })[] = [];

  // Take latest 2 from each entity type
  works.slice(0, 2).forEach((w) =>
    items.push({
      id: `w-${w.id}`,
      title: w.title,
      type: "Work",
      href: `/admin/works/${w.id}/edit`,
      icon: Briefcase,
      sortKey: "2026-01-01", // works don't have dates, show at bottom
    })
  );

  insights.slice(0, 2).forEach((i) =>
    items.push({
      id: `i-${i.id}`,
      title: i.title,
      type: "Insight",
      href: `/admin/insights/${i.id}/edit`,
      icon: FileText,
      sortKey: i.publishedAt,
    })
  );

  caseStudies.slice(0, 2).forEach((cs) =>
    items.push({
      id: `cs-${cs.id}`,
      title: `${cs.client} — ${cs.title}`,
      type: "Case Study",
      href: `/admin/case-studies/${cs.id}/edit`,
      icon: BookOpen,
      sortKey: "2026-01-01",
    })
  );

  enquiries.slice(0, 2).forEach((e) =>
    items.push({
      id: `e-${e.id}`,
      title: `${e.data.firstName} ${e.data.lastName} (${e.data.company})`,
      type: "Enquiry",
      href: `/admin/enquiries/${e.id}`,
      icon: Mail,
      sortKey: e.submittedAt,
    })
  );

  // Sort by date descending, take top 8
  return items
    .sort((a, b) => b.sortKey.localeCompare(a.sortKey))
    .slice(0, 8);
}
