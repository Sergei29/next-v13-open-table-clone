import { isServer } from "./common";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const event = ({ action, params }: { action: any; params: any }) => {
  if (isServer()) return;

  window.gtag("event", action, params);
};
