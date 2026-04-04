"use client";

import { useState, useEffect, useCallback } from "react";
import { faqService } from "@/services";
import type {
  FAQItem,
  CreateFAQInput,
  UpdateFAQInput,
} from "@/services/types";

export function useFAQ() {
  const [data, setData] = useState<FAQItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const items = await faqService.getAll();
      setData(items);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load FAQs");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const create = useCallback(
    async (input: CreateFAQInput) => {
      const item = await faqService.create(input);
      await refresh();
      return item;
    },
    [refresh]
  );

  const update = useCallback(
    async (id: string, input: UpdateFAQInput) => {
      const item = await faqService.update(id, input);
      await refresh();
      return item;
    },
    [refresh]
  );

  const remove = useCallback(
    async (id: string) => {
      await faqService.delete(id);
      await refresh();
    },
    [refresh]
  );

  const reorder = useCallback(
    async (ids: string[]) => {
      await faqService.reorder(ids);
      await refresh();
    },
    [refresh]
  );

  return { data, loading, error, refresh, create, update, remove, reorder };
}

export function useFAQItem(id: string | null) {
  const [data, setData] = useState<FAQItem | null>(null);
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

    faqService
      .getById(id)
      .then((item) => {
        if (!cancelled) setData(item);
      })
      .catch((e) => {
        if (!cancelled)
          setError(e instanceof Error ? e.message : "Failed to load FAQ");
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
