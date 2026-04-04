"use client";

import { useState, useEffect, useCallback } from "react";
import { workService } from "@/services";
import type {
  WorkItem,
  WorkFilter,
  CreateWorkInput,
  UpdateWorkInput,
} from "@/services/types";

export function useWorks(filter?: WorkFilter) {
  const [data, setData] = useState<WorkItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const items = await workService.getAll(filter);
      setData(items);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load works");
    } finally {
      setLoading(false);
    }
  }, [filter?.category, filter?.featured, filter?.search]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const create = useCallback(
    async (input: CreateWorkInput) => {
      const item = await workService.create(input);
      await refresh();
      return item;
    },
    [refresh]
  );

  const update = useCallback(
    async (id: string, input: UpdateWorkInput) => {
      const item = await workService.update(id, input);
      await refresh();
      return item;
    },
    [refresh]
  );

  const remove = useCallback(
    async (id: string) => {
      await workService.delete(id);
      await refresh();
    },
    [refresh]
  );

  return { data, loading, error, refresh, create, update, remove };
}

export function useWork(id: string | null) {
  const [data, setData] = useState<WorkItem | null>(null);
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

    workService
      .getById(id)
      .then((item) => {
        if (!cancelled) setData(item);
      })
      .catch((e) => {
        if (!cancelled)
          setError(e instanceof Error ? e.message : "Failed to load work");
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
