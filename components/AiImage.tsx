
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";

interface AiImageProps {
  prompt: string;
  className?: string;
  aspectRatio?: "1:1" | "3:4" | "4:3" | "9:16" | "16:9";
  alt?: string;
}

const AiImage: React.FC<AiImageProps> = ({ prompt, className = "", aspectRatio = "1:1", alt = "Illustration" }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const generatedRef = useRef(false);

  // Helper for delays
  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  /**
   * 改善版スタイル指示書
   */
  const styleInstructions = "Professional Flat Vector Illustration style. Distinct medium-weight black outlines. Sophisticated pastel palette (soft green, coral, light blue). High-quality solid flat coloring, no textures, no shading. Minimalist design. VERY IMPORTANT: Subject must be small and perfectly centered, occupying less than 50% of the canvas. The remaining 50% must be pure white space (#FFFFFF) to avoid overlapping with text. Isolated on pure white background.";
  
  const negativePrompt = "thin lines, hairline strokes, complex details, blurry lines, low quality, crowded composition, zoomed-in, cropped, text, overlapping with edges, gradients, shadows, realistic, 3D render, messy, textures.";

  const generateImage = async (retryCount = 0) => {
    const maxRetries = 4; // Increased retries
    
    // Initial staggered delay to prevent burst on load
    if (retryCount === 0) {
      await sleep(Math.random() * 1500); 
    }

    setLoading(true);
    setError(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const fullPrompt = `${prompt}. Style: ${styleInstructions}. Negative prompt: ${negativePrompt}`;
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [{ text: fullPrompt }],
        },
        config: {
          imageConfig: {
            aspectRatio: aspectRatio,
          },
        },
      });

      let foundImage = false;
      if (response.candidates?.[0]?.content?.parts) {
        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            const base64Data = part.inlineData.data;
            setImageUrl(`data:image/png;base64,${base64Data}`);
            foundImage = true;
            break;
          }
        }
      }

      if (!foundImage) {
        throw new Error("No image data found in response");
      }
    } catch (err: any) {
      // Handle Rate Limit (429) specifically
      const isRateLimit = err?.message?.includes('429') || err?.status === 429 || err?.message?.toLowerCase().includes('quota');
      
      if (isRateLimit && retryCount < maxRetries) {
        // Exponential backoff: 3s, 7s, 15s, 31s...
        const waitTime = (Math.pow(2, retryCount + 1) * 2000) + (Math.random() * 2000);
        console.warn(`Rate limit hit for prompt: "${prompt.substring(0, 20)}...". Retrying in ${Math.round(waitTime)}ms (Attempt ${retryCount + 1}/${maxRetries})`);
        await sleep(waitTime);
        return generateImage(retryCount + 1);
      }
      
      console.error("Image generation failed:", err);
      setError("画像の読み込みに失敗しました");
    } finally {
      setLoading(false);
    }
  };

  // Intersection Observer to trigger generation only when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' } // Start loading 200px before it enters view
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Trigger generation when in view
  useEffect(() => {
    if (inView && !generatedRef.current && !imageUrl && !loading) {
      generatedRef.current = true;
      generateImage();
    }
  }, [inView]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden flex items-center justify-center min-h-[100px] ${className}`}>
      {(loading || (!imageUrl && !error)) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50/50 backdrop-blur-[1px] z-10 rounded-full">
          <div className="w-8 h-8 border-3 border-yorisoi-green/30 border-t-yorisoi-green rounded-full animate-spin"></div>
          {loading && <span className="mt-2 text-[10px] text-gray-400 font-medium">AI作成中...</span>}
        </div>
      )}
      
      {error ? (
        <div className="p-4 text-center z-20">
          <p className="text-[10px] text-gray-400 mb-2">{error}</p>
          <button 
            onClick={() => {
              generatedRef.current = false;
              setInView(true);
              generateImage(0);
            }}
            className="px-4 py-1.5 bg-white border border-yorisoi-green text-yorisoi-green rounded-full text-[10px] font-bold hover:bg-yorisoi-green hover:text-white transition-colors"
          >
            再試行する
          </button>
        </div>
      ) : imageUrl ? (
        <img 
          src={imageUrl} 
          alt={alt} 
          className="w-full h-full object-contain animate-fade-in mix-blend-multiply"
          style={{ animationDuration: '0.8s' }}
        />
      ) : (
        // Initial placeholder state before observer triggers
        <div className="w-full h-full bg-transparent" />
      )}
    </div>
  );
};

export default AiImage;
