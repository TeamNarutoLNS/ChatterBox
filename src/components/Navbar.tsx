import { User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-background border-b border-border shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo section */}
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-primary-foreground rounded-full"></div>
            </div>
            <h1 className="text-2xl font-bold text-primary">InTune</h1>
          </div>

          {/* Navigation menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#" 
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Home
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Features
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              How It Works
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Contact
            </a>
          </div>

          {/* User profile button */}
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              className="w-10 h-10 rounded-full border border-border hover:bg-muted"
            >
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden ml-2">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;