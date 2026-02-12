import type { Metric } from "web-vitals";

const reportWebVitals = (onPerfEntry?: (metric: Metric) => void) => {
  if (onPerfEntry && typeof onPerfEntry === "function") {
    import("web-vitals").then(({ onCLS, onFCP, onINP, onLCP, onTTFB }) => {
      // Replaced onFID with onINP
      onCLS(onPerfEntry);
      onFCP(onPerfEntry);
      onINP(onPerfEntry); // Modern replacement for FID
      onLCP(onPerfEntry);
      onTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
