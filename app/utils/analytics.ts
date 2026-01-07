// Analytics utility for tracking user interactions
// This can be integrated with Google Analytics, Plausible, or other analytics services

export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics]', eventName, properties);
  }

  // TODO: Integrate with your analytics service
  // Example for Google Analytics:
  // if (typeof window !== 'undefined' && window.gtag) {
  //   window.gtag('event', eventName, properties);
  // }

  // Example for Plausible:
  // if (typeof window !== 'undefined' && window.plausible) {
  //   window.plausible(eventName, { props: properties });
  // }
};

// Specific tracking functions
export const trackResumeDownload = (resumeType: 'mechanical' | 'ai-dev') => {
  trackEvent('resume_download', {
    resume_type: resumeType,
    timestamp: new Date().toISOString(),
  });
};

export const trackProjectClick = (projectTitle: string, projectCategory: string, linkType: 'github' | 'live') => {
  trackEvent('project_click', {
    project_title: projectTitle,
    project_category: projectCategory,
    link_type: linkType,
    timestamp: new Date().toISOString(),
  });
};

export const trackAudienceModeChange = (mode: string) => {
  trackEvent('audience_mode_change', {
    mode,
    timestamp: new Date().toISOString(),
  });
};
