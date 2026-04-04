"use client";

import { useState, useEffect, useCallback } from "react";
import { insightService } from "@/services";
import type {
  InsightItem,
  InsightFilter,
  CreateInsightInput,
  UpdateInsightInput,
} from "@/services/types";

export function useInsights(filter?: InsightFilter) {
  const [data, setData] = useState<InsightItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const items = await insightService.getAll(filter);
      setData(items);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load insights");
    } finally {
      setLoading(false);
    }
  }, [filter?.category, filter?.search]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const create = useCallback(
    async (input: CreateInsightInput) => {
      const item = await insightService.create(input);
      await refresh();
      return item;
    },
    [refresh]
  );

  const update = useCallback(
    async (id: string, input: UpdateInsightInput) => {
      const item = await insightService.update(id, input);
      await refresh();
      return item;
    },
    [refresh]
  );

  const remove = useCallback(
    async (id: string) => {
      await insightService.delete(id);
      await refresh();
    },
    [refresh]
  );

  return { data, loading, error, refresh, create, update, remove };
}

export function useInsight(id: string | null) {
  const [data, setData] = useState<InsightItem | null>(null);
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

    insightService
      .getById(id)
      .then((item) => {
        if (!cancelled) setData(item);
      })
      .catch((e) => {
        if (!cancelled)
          setError(e instanceof Error ? e.message : "Failed to load insight");
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
