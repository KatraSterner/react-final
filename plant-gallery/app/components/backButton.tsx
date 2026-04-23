"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex flex-start hover:bg-green-400 text-green-900"
    >
      &lt;
    </button>
  );
}