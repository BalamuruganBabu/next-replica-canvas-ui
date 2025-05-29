
import { Button } from "@/components/ui/button";
import { Github, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                <span className="text-black font-bold text-lg">▲</span>
              </div>
              <span className="text-white font-semibold text-xl">Next.js</span>
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Showcase</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Docs</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Analytics</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Commerce</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Templates</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Enterprise</a>
            </nav>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                Deploy
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                Learn
              </Button>
            </div>
            <Button variant="ghost" size="sm" className="md:hidden text-gray-300 hover:text-white">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
