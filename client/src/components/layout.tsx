import { Link } from "wouter";
import { Menu, X, Phone, MapPin, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2">
              <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                D
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl leading-none text-primary">Dipsa</span>
                <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase">Enterprises</span>
              </div>
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/"><a className="text-sm font-medium hover:text-primary transition-colors">Home</a></Link>
            <a href="#brands" className="text-sm font-medium hover:text-primary transition-colors">Our Brands</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About Us</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
              Get Quote
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b shadow-lg p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
            <Link href="/"><a className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Home</a></Link>
            <a href="#brands" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Our Brands</a>
            <a href="#about" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>About Us</a>
            <a href="#contact" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <Button className="w-full bg-primary text-white">Get Quote</Button>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-200 py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 bg-primary rounded flex items-center justify-center text-white font-bold">
                D
              </div>
              <span className="font-heading font-bold text-xl text-white">Dipsa Enterprises</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-xs">
              Premium cleaning solutions for homes and industries. Manufacturing excellence since establishment.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-primary hover:text-white transition-colors"><Facebook size={18} /></a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-primary hover:text-white transition-colors"><Instagram size={18} /></a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-primary hover:text-white transition-colors"><Linkedin size={18} /></a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/"><a className="hover:text-primary transition-colors">Home</a></Link></li>
              <li><a href="#brands" className="hover:text-primary transition-colors">Octo Wash</a></li>
              <li><a href="#brands" className="hover:text-primary transition-colors">Dexta</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0 mt-1" size={18} />
                <span>Chandrapur Colony 7, Matabari, Udaipur, Gomati Tripura, 799013</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={18} />
                <a href="tel:8259076839" className="hover:text-white transition-colors">8259076839</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={18} />
                <a href="mailto:contact@dipsa.com" className="hover:text-white transition-colors">contact@dipsa.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Dipsa Enterprises Pvt. Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
