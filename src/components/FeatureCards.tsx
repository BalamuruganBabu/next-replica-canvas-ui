
import { Card } from "@/components/ui/card";
import { Code, Zap, Globe, Shield, Layers, Rocket } from "lucide-react";

const FeatureCards = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Built on React",
      description: "Automatic code splitting, filesystem based routing, hot code reloading and universal rendering."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Refresh",
      description: "Fast Refresh is a Next.js feature that gives you instantaneous feedback on edits made to your React components."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Hybrid Rendering",
      description: "Render pages at build time (SSG) or request time (SSR) in a single project. Perfect for any use case."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Incremental Static Regeneration",
      description: "Update static content instantly without needing a full rebuild. ISR supports both per-page and per-second revalidation."
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Built-in CSS Support",
      description: "Create component-level styles with CSS Modules. Built-in Sass support and CSS-in-JS library compatibility."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "API Routes",
      description: "Build your API endpoints as part of your Next.js app. Run serverless functions with zero configuration."
    }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Why choose{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Next.js?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Next.js provides everything you need to build fast, modern web applications
            with the best developer experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 group hover:bg-gray-900/70">
              <div className="p-8">
                <div className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
