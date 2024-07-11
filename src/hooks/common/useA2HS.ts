import { useEffect, useState } from "react";

import { a2hs } from "@/utils/a2hs";

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export default function useA2HS() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);

  const install = () => {
    if (deferredPrompt === null) return;

    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(() => setDeferredPrompt(null));
  };

  const clearPrompt = () => {
    setDeferredPrompt(null);
    a2hs.setHideInstallA2HS();
  };

  useEffect(() => {
    if (a2hs.isValidateHideInstallA2HS) return;

    a2hs.clear();
  }, []);

  useEffect(() => {
    if (a2hs.hideInstallA2HS) return;

    const handler = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handler as EventListener);
    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handler as EventListener,
      );
    };
  }, []);

  return { deferredPrompt, install, clearPrompt };
}
