"use client";

import { useEffect } from "react";

type CalQueue = {
  (...args: unknown[]): void;
  loaded?: boolean;
  ns?: Record<string, CalQueue>;
  q?: unknown[][];
  config?: {
    forwardQueryParams?: boolean;
  };
};

declare global {
  interface Window {
    Cal?: CalQueue;
  }
}

const calOrigin = "https://app.cal.com";
const calScriptUrl = `${calOrigin}/embed/embed.js`;
const namespace = "private-swim-lesson";
const elementId = "my-cal-inline-private-swim-lesson";
const calLink = "sierra-thomas-4x42a0/private-swim-lesson";

function loadCalEmbed() {
  const queueCall = (api: CalQueue, args: unknown[]) => {
    api.q = api.q || [];
    api.q.push(args);
  };

  window.Cal =
    window.Cal ||
    function calApi(...args: unknown[]) {
      const cal = window.Cal as CalQueue;

      if (!cal.loaded) {
        cal.ns = {};
        cal.q = cal.q || [];
        const script = document.createElement("script");
        script.src = calScriptUrl;
        document.head.appendChild(script);
        cal.loaded = true;
      }

      if (args[0] === "init") {
        const scopedApi: CalQueue = (...scopedArgs: unknown[]) => {
          queueCall(scopedApi, scopedArgs);
        };
        const requestedNamespace = args[1];

        if (typeof requestedNamespace === "string") {
          cal.ns = cal.ns || {};
          cal.ns[requestedNamespace] = cal.ns[requestedNamespace] || scopedApi;
          queueCall(cal.ns[requestedNamespace], args);
          queueCall(cal, ["initNamespace", requestedNamespace]);
        } else {
          queueCall(cal, args);
        }

        return;
      }

      queueCall(cal, args);
    };

  window.Cal("init", namespace, { origin: calOrigin });
  window.Cal.config = window.Cal.config || {};
  window.Cal.config.forwardQueryParams = true;

  window.Cal.ns?.[namespace]?.("inline", {
    elementOrSelector: `#${elementId}`,
    config: {
      layout: "month_view",
      theme: "light",
      useSlotsViewOnSmallScreen: "true",
    },
    calLink,
  });

  window.Cal.ns?.[namespace]?.("ui", {
    hideEventTypeDetails: false,
    layout: "month_view",
    styles: {
      branding: {
        brandColor: "#0891b2",
      },
    },
    theme: "light",
  });
}

export function CalEmbed() {
  useEffect(() => {
    loadCalEmbed();
  }, []);

  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-sky-100">
      <div className="px-5 pt-5 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
          Online scheduling
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
          View available times and book lesson.
        </h2>
      </div>
      <div
        id={elementId}
        className="-mt-20 h-[820px] w-full overflow-scroll sm:-mt-24 sm:h-[880px]"
      />
    </div>
  );
}
