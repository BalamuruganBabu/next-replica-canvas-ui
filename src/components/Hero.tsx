
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main heading */}
        <h1 className="text-6xl md:text-8xl font-bold mb-8">
          <span className="block text-white mb-4">The React</span>
          <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Framework
          </span>
          <span className="block text-white mt-4">for the Web</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Used by some of the world's largest companies, Next.js enables you to create{" "}
          <span className="text-white font-semibold">full-stack web applications</span> by extending the latest React features,
          and integrating powerful Rust-based JavaScript tooling for the fastest builds.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button size="lg" className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-6 rounded-lg font-semibold">
            Get Started
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button variant="ghost" size="lg" className="text-white border border-white/20 hover:bg-white/10 text-lg px-8 py-6 rounded-lg">
            <Play className="w-5 h-5 mr-2" />
            Learn Next.js
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-white mb-2">4M+</div>
            <div className="text-gray-400">Weekly Downloads</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">100k+</div>
            <div className="text-gray-400">GitHub Stars</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">500k+</div>
            <div className="text-gray-400">Developers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
