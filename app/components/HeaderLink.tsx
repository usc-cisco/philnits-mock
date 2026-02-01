"use client";

import Link from "next/link";

export default function HeaderLink() {
  return (
    <Link
      href="/"
      className="text-lg font-bold hover:opacity-90 block"
      onClick={(e) => {
        e.preventDefault();
        const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
        window.location.href = base ? `${base}/` : "/";
      }}
    >
      PhilNITS FE AM Mock Exam
    </Link>
  );
}
