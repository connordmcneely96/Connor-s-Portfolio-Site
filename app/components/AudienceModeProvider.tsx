'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type AudienceMode = 'all' | 'ai-developer' | 'mechanical-engineer';

interface AudienceModeContextType {
  mode: AudienceMode;
  setMode: (mode: AudienceMode) => void;
}

const AudienceModeContext = createContext<AudienceModeContextType | undefined>(undefined);

export function AudienceModeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<AudienceMode>('all');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Load preference from localStorage
    const savedMode = localStorage.getItem('audienceMode') as AudienceMode;
    if (savedMode && ['all', 'ai-developer', 'mechanical-engineer'].includes(savedMode)) {
      setModeState(savedMode);
    }
  }, []);

  const setMode = (newMode: AudienceMode) => {
    setModeState(newMode);
    if (isClient) {
      localStorage.setItem('audienceMode', newMode);
    }
  };

  return (
    <AudienceModeContext.Provider value={{ mode, setMode }}>
      {children}
    </AudienceModeContext.Provider>
  );
}

export function useAudienceMode() {
  const context = useContext(AudienceModeContext);
  if (context === undefined) {
    throw new Error('useAudienceMode must be used within AudienceModeProvider');
  }
  return context;
}
