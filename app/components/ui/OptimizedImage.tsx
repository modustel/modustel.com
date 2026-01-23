import type { ImgHTMLAttributes } from "react";

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  lazy?: boolean;
}

/**
 * OptimizedImage component with built-in performance optimizations:
 * - Native lazy loading by default
 * - Explicit dimensions to prevent Cumulative Layout Shift (CLS)
 * - Async decoding for non-blocking rendering
 *
 * Usage:
 * <OptimizedImage
 *   src="/images/hero.webp"
 *   alt="Hero image"
 *   width={800}
 *   height={450}
 * />
 */
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  lazy = true,
  className,
  ...props
}: OptimizedImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={lazy ? "lazy" : "eager"}
      decoding="async"
      className={className}
      {...props}
    />
  );
}
