import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./admin.css";

export const metadata: Metadata = {
  title: "管理后台｜与君游",
  robots: { index: false, follow: false, nocache: true },
};

export default function AdminLayout({ children }: Readonly<{ children: ReactNode }>) {
  return children;
}
