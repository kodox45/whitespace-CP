"use client";

import { useState, useEffect, useCallback } from "react";
import { caseStudyService } from "@/services";
import type {
  CaseStudyItem,
  CaseStudyFilter,
  CreateCaseStudyInput,
  UpdateCaseStudyInput,
} from "@/services/types";

export function useCaseStudies(filter?: CaseStudyFilter) {
  const [data, setData] = useState<CaseStudyItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const items = await caseStudyService.getAll(filter);
      setData(items);
    } catch (e) {
      setError(
        e instanceof Error ? e.message : "Failed to load case studies"
      );
    } finally {
      setLoading(false);
    }
  }, [filter?.search]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const create = useCallback(
    async (input: CreateCaseStudyInput) => {
      const item = await caseStudyService.create(input);
      await refresh();
      return item;
    },
    [refresh]
  );

  const update = useCallback(
    async (id: string, input: UpdateCaseStudyInput) => {
      const item = await caseStudyService.update(id, input);
      await refresh();
      return item;
    },
    [refresh]
  );

  const remove = useCallback(
    async (id: string) => {
      await caseStudyService.delete(id);
      await refresh();
    },
    [refresh]
  );

  return { data, loading, error, refresh, create, update, remove };
}

export function useCaseStudy(id: string | null) {
  const [data, setData] = useState<CaseStudyItem | null>(null);
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

    caseStudyService
      .getById(id)
      .then((item) => {
        if (!cancelled) setData(item);
      })
      .catch((e) => {
        if (!cancelled)
          setError(
            e instanceof Error ? e.message : "Failed to load case study"
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
