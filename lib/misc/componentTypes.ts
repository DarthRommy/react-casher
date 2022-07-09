import type { FC, ReactNode } from "react";

export type FCWithChildren<P = Record<string, unknown>> = FC<
  P & {
    children: ReactNode;
  }
>;
