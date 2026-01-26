'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Maximize2, RotateCcw, ZoomIn, ZoomOut, Loader2 } from 'lucide-react';

interface ModelViewerProps {
  src: string;
  alt: string;
  poster?: string;
  autoRotate?: boolean;
  cameraControls?: boolean;
  shadowIntensity?: number;
  className?: string;
}

export default function ModelViewer({
  src,
  alt,
  poster,
  autoRotate = true,
  cameraControls = true,
  shadowIntensity = 1,
  className = '',
}: ModelViewerProps) {
  const modelRef = useRef<HTMLElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    // Dynamically import model-viewer (it's a custom element)
    import('@google/model-viewer').catch((err) => {
      console.error('Failed to load model-viewer:', err);
      setError('Failed to load 3D viewer');
    });
  }, []);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setError('Failed to load 3D model');
  };

  const resetCamera = () => {
    if (modelRef.current) {
      (modelRef.current as any).cameraOrbit = 'auto auto auto';
      (modelRef.current as any).fieldOfView = 'auto';
    }
  };

  const toggleFullscreen = async () => {
    if (!modelRef.current?.parentElement) return;

    if (!document.fullscreenElement) {
      await modelRef.current.parentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      await document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  if (error) {
    return (
      <div className={`relative bg-primary-800/50 rounded-2xl border border-steel-700/30 ${className}`}>
        <div className="aspect-square flex items-center justify-center">
          <div className="text-center px-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-error/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-error" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <p className="text-steel-400">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative bg-primary-800/50 rounded-2xl border border-steel-700/30 overflow-hidden group ${className}`}>
      {/* Loading Overlay */}
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 z-10 flex items-center justify-center bg-primary-800"
        >
          <div className="text-center">
            <Loader2 className="w-10 h-10 text-accent-500 animate-spin mx-auto mb-3" />
            <p className="text-steel-400 text-sm">Loading 3D Model...</p>
          </div>
        </motion.div>
      )}

      {/* Model Viewer */}
      {/* @ts-expect-error - model-viewer is a custom element */}
      <model-viewer
        ref={modelRef as any}
        src={src}
        alt={alt}
        poster={poster}
        camera-controls={cameraControls}
        auto-rotate={autoRotate}
        shadow-intensity={shadowIntensity}
        exposure="1"
        environment-image="neutral"
        style={{
          width: '100%',
          height: '100%',
          minHeight: '400px',
          backgroundColor: 'transparent',
        }}
        onLoad={handleLoad}
        onError={handleError}
      />

      {/* Controls Overlay */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="flex gap-2">
          <button
            onClick={resetCamera}
            className="p-2 rounded-lg bg-primary-900/80 backdrop-blur-sm text-steel-300 hover:text-white hover:bg-primary-800 transition-all"
            title="Reset Camera"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
        <button
          onClick={toggleFullscreen}
          className="p-2 rounded-lg bg-primary-900/80 backdrop-blur-sm text-steel-300 hover:text-white hover:bg-primary-800 transition-all"
          title="Toggle Fullscreen"
        >
          <Maximize2 className="w-4 h-4" />
        </button>
      </div>

      {/* 3D Badge */}
      <div className="absolute top-4 left-4">
        <span className="px-3 py-1.5 rounded-lg bg-accent-500/20 text-accent-400 text-xs font-bold border border-accent-500/30">
          3D MODEL
        </span>
      </div>
    </div>
  );
}
