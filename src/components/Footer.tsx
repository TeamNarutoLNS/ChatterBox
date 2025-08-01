import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4">InTune</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              Your vibe is the key to your perfect co-living match. In sync, In vibe, In tune.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center hover:bg-primary-foreground/30 transition-colors cursor-pointer">
                <Github className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center hover:bg-primary-foreground/30 transition-colors cursor-pointer">
                <Linkedin className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center hover:bg-primary-foreground/30 transition-colors cursor-pointer">
                <Mail className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Product section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">Features</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">How It Works</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">Pricing</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">FAQs</a></li>
            </ul>
          </div>

          {/* Legal section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">Terms & Conditions</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">Cookie Policy</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">GDPR</a></li>
            </ul>
          </div>

          {/* Support section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">Contact Us</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">Help Center</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">Safety Guidelines</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">Community</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/80 text-sm">
            © 2024 InTune. All rights reserved.
          </p>
          <p className="text-primary-foreground/80 text-sm mt-2 md:mt-0">
            Built for SheBuilds Hackathon by Team Naruto 💙 🥷
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;