"use client";

import { forwardRef, useRef } from "react";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import Image from "next/image";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; size?: "sm" | "md" | "lg" }
>(({ className, children, size = "md" }, ref) => {
  const sizeClasses = {
    sm: "size-12",
    md: "size-14", 
    lg: "size-16"
  };

  return (
    <div
      ref={ref}
      className={`z-10 flex ${sizeClasses[size]} items-center justify-center rounded-full bg-white border-2 border-gray-200 shadow-lg ${className}`}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function WhatsAppOpenAIBeam() {
  const containerRef = useRef<HTMLDivElement>(null);
  const whatsappRef = useRef<HTMLDivElement>(null);
  const notionRef = useRef<HTMLDivElement>(null);
  const googleSheetsRef = useRef<HTMLDivElement>(null);
  const googleDriveRef = useRef<HTMLDivElement>(null);
  const googleDocsRef = useRef<HTMLDivElement>(null);
  const zapierRef = useRef<HTMLDivElement>(null);
  const openaiRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex h-[400px] w-full items-center justify-center overflow-hidden p-10"
      ref={containerRef}
    >
      {/* Left side icons */}
      <div className="absolute left-10 flex flex-col space-y-8">
        <Circle ref={whatsappRef} size="sm">
          <Image 
            src="/icons/whatsapp.svg" 
            alt="WhatsApp" 
            width={32} 
            height={32} 
            className="h-8 w-8"
          />
        </Circle>
        <Circle ref={notionRef} size="sm">
          <Image 
            src="/icons/notion.svg" 
            alt="Notion" 
            width={32} 
            height={32} 
            className="h-8 w-8"
          />
        </Circle>
        <Circle ref={googleSheetsRef} size="sm">
          <Image 
            src="/icons/google-sheets.svg" 
            alt="Google Sheets" 
            width={32} 
            height={32} 
            className="h-8 w-8"
          />
        </Circle>
      </div>

      {/* Right side icons */}
      <div className="absolute right-10 flex flex-col space-y-8">
        <Circle ref={googleDriveRef} size="sm">
          <Image 
            src="/icons/google-drive.svg" 
            alt="Google Drive" 
            width={32} 
            height={32} 
            className="h-8 w-8"
          />
        </Circle>
        <Circle ref={googleDocsRef} size="sm">
          <Image 
            src="/icons/google-docs.svg" 
            alt="Google Docs" 
            width={32} 
            height={32} 
            className="h-8 w-8"
          />
        </Circle>
        <Circle ref={zapierRef} size="sm">
          <Image 
            src="/icons/zapier.svg" 
            alt="Zapier" 
            width={32} 
            height={32} 
            className="h-8 w-8"
          />
        </Circle>
      </div>

      {/* Center OpenAI - larger */}
      <Circle ref={openaiRef} size="lg" className="absolute">
        <Image 
          src="/icons/openai.svg" 
          alt="OpenAI" 
          width={48} 
          height={48} 
          className="h-12 w-12"
        />
      </Circle>

      {/* Animated Beams connecting to OpenAI */}
      {/* Left side beams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={whatsappRef}
        toRef={openaiRef}
        curvature={15}
        gradientStartColor="#25D366"
        gradientStopColor="#0066CC"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={notionRef}
        toRef={openaiRef}
        curvature={0}
        gradientStartColor="#000000"
        gradientStopColor="#0066CC"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={googleSheetsRef}
        toRef={openaiRef}
        curvature={-15}
        gradientStartColor="#0F9D58"
        gradientStopColor="#0066CC"
      />
      {/* Right side beams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={googleDriveRef}
        toRef={openaiRef}
        curvature={15}
        gradientStartColor="#4285F4"
        gradientStopColor="#0066CC"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={googleDocsRef}
        toRef={openaiRef}
        curvature={0}
        gradientStartColor="#4285F4"
        gradientStopColor="#0066CC"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={zapierRef}
        toRef={openaiRef}
        curvature={-15}
        gradientStartColor="#FF4A00"
        gradientStopColor="#0066CC"
      />
    </div>
  );
}