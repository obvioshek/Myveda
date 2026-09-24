"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "@/components/app/AppProvider";

export default function WelcomeToast() {
  const { toast } = useApp();
  const router = useRouter();
  useEffect(() => {
    toast("Your first Edition is ready.");
    router.replace("/home");
  }, [toast, router]);
  return null;
}
