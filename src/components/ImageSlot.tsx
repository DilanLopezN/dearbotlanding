"use client";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  label?: string;
  className?: string;
  priority?: boolean;
}

export default function ImageSlot({
  src,
  alt,
  width,
  height,
  label,
  className = "",
  priority = false,
}: Props) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
      />
    );
  }

  return (
    <div
      className={`img-placeholder ${className}`}
      style={{ width: "100%", aspectRatio: `${width}/${height}` }}
    >
      <span className="relative z-10 text-center px-4">
        {label || `Imagem: ${alt}`}
        <br />
        <span className="text-xs opacity-50">{width}×{height}px</span>
      </span>
    </div>
  );
}
