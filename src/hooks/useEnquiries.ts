"use client";

import { useState, useEffect, useCallback } from "react";
import { enquiryService } from "@/services";
import type { EnquiryItem, EnquiryFilter } from "@/services/types";

export function useEnquiries(filter?: EnquiryFilter) {
  const [data, setData] = useState<EnquiryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const items = await enquiryService.getAll(filter);
      setData(items);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load enquiries");
    } finally {
      setLoading(false);
    }
  }, [filter?.read, filter?.enquiryType]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const markRead = useCallback(
    async (id: string) => {
      await enquiryService.markRead(id);
      await refresh();
    },
    [refresh]
  );

  const markUnread = useCallback(
    async (id: string) => {
      await enquiryService.markUnread(id);
      await refresh();
    },
    [refresh]
  );

  const remove = useCallback(
    async (id: string) => {
      await enquiryService.delete(id);
      await refresh();
    },
    [refresh]
  );

  const unreadCount = data.filter((e) => !e.read).length;

  return { data, loading, error, refresh, markRead, markUnread, remove, unreadCount };
}

export function useEnquiry(id: string | null) {
  const [data, setData] = useState<EnquiryItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setData(null);
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(null);

    enquiryService
      .getById(id)
      .then((item) => {
        if (!cancelled) setData(item);
      })
      .catch((e) => {
        if (!cancelled)
          setError(
            e instanceof Error ? e.message : "Failed to load enquiry"
          );
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [id]);

  return { data, loading, error };
}
