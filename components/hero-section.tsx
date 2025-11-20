"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Camera } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/hero/professional-photography-exhibition-hall-with-eleg.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <div className="flex justify-center mb-6">
          <Camera className="h-16 w-16 text-white/90" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          东城区
          <br />
          <span className="text-white/90">摄影家协会</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-white/80 max-w-2xl mx-auto text-pretty">
          传承摄影艺术，记录美好时光
          <br />
          汇聚摄影精英，展现东城风采
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            了解协会
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
          >
            在线影展
          </Button>
        </div>
      </div>
    </section>
  );
}
