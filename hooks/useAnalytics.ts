import { useEffect, useCallback, useRef } from 'react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const EVENT_PREFIX = 'escapadas__';

function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', `${EVENT_PREFIX}${eventName}`, params);
  }
}

export const useAnalytics = (enableScrollTracking = false) => {
  const scrollMilestonesReached = useRef(new Set<number>());

  const trackWhatsAppClick = useCallback((location: string) => {
    trackEvent('whatsapp_click', { location });
  }, []);

  const trackEmailClick = useCallback((location: string) => {
    trackEvent('email_click', { location });
  }, []);

  const trackAvailabilityClick = useCallback((location: string) => {
    trackEvent('availability_click', { location });
  }, []);

  const trackScrollDepth = useCallback((depth: number) => {
    trackEvent('scroll_depth', { depth_percent: depth });
  }, []);

  const initScrollTracking = useCallback(() => {
    if (typeof window === 'undefined') return undefined;

    const milestones = [25, 50, 75, 90, 100];

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      milestones.forEach((milestone) => {
        if (scrollPercent >= milestone && !scrollMilestonesReached.current.has(milestone)) {
          scrollMilestonesReached.current.add(milestone);
          trackScrollDepth(milestone);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [trackScrollDepth]);

  useEffect(() => {
    if (!enableScrollTracking) return;
    const cleanup = initScrollTracking();
    return cleanup;
  }, [enableScrollTracking, initScrollTracking]);

  return {
    trackWhatsAppClick,
    trackEmailClick,
    trackAvailabilityClick,
    trackScrollDepth,
    initScrollTracking,
  };
};
