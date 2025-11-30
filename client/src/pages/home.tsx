import Layout from "@/components/layout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Check, Sparkles, ShieldCheck, Droplets, Phone, MapPin, Mail } from "lucide-react";

// Import assets
import heroImage from "@assets/generated_images/bright_modern_laundry_room_with_sunlight.png";
import octoImage from "@assets/generated_images/blue_detergent_powder_packaging_for_octo_wash.png";
import dextaImage from "@assets/generated_images/yellow_cleaner_spray_bottle_for_dexta.png";
import factoryImage from "@assets/generated_images/modern_manufacturing_plant_for_cleaning_products.png";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/20" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
              Purity in <span className="text-primary">Every Drop</span>
            </h1>
            <p className="text-xl text-slate-200 mb-8 leading-relaxed">
              Dipsa Enterprises brings you world-class cleaning solutions. 
              From fabric care to surface disinfection, we engineer cleanliness.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 text-lg">
                Explore Products
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 rounded-full px-8 h-14 text-lg">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brands Section */}
      <section id="brands" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">Our Products</h2>
            <h3 className="text-4xl font-heading font-bold text-slate-900">Trusted Brands for a Cleaner World</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* OCTO WASH */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                <Link href="/brand/octo-wash">
                  <div>
                    <div className="bg-blue-50 p-8 flex justify-center items-center relative overflow-hidden h-80">
                      <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors" />
                      <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl" />
                      <img 
                        src={octoImage} 
                        alt="Octo Wash Detergent" 
                        className="w-64 h-64 object-contain relative z-10 drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-8 bg-white">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-3xl font-heading font-bold text-blue-600">OCTO WASH</h4>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">Premium Detergent</span>
                      </div>
                      <p className="text-slate-600 mb-6">
                        Advanced fabric care technology that removes tough stains while keeping clothes soft and vibrant. Experience the power of deep cleaning.
                      </p>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-center gap-2 text-sm text-slate-700"><Check className="text-blue-500 w-4 h-4" /> Tough on stains, gentle on fabric</li>
                        <li className="flex items-center gap-2 text-sm text-slate-700"><Check className="text-blue-500 w-4 h-4" /> Long-lasting fresh fragrance</li>
                        <li className="flex items-center gap-2 text-sm text-slate-700"><Check className="text-blue-500 w-4 h-4" /> Color-protection formula</li>
                      </ul>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white pointer-events-none">View Products</Button>
                    </CardContent>
                  </div>
                </Link>
              </Card>
            </motion.div>

            {/* DEXTA */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                <Link href="/brand/dexta">
                  <div>
                    <div className="bg-yellow-50 p-8 flex justify-center items-center relative overflow-hidden h-80">
                      <div className="absolute inset-0 bg-yellow-500/5 group-hover:bg-yellow-500/10 transition-colors" />
                      <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-yellow-200/30 rounded-full blur-3xl" />
                      <img 
                        src={dextaImage} 
                        alt="Dexta Cleaner" 
                        className="w-64 h-64 object-contain relative z-10 drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-8 bg-white">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-3xl font-heading font-bold text-yellow-600">DEXTA</h4>
                        <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-bold">Home Cleaning</span>
                      </div>
                      <p className="text-slate-600 mb-6">
                        Versatile cleaning solutions for every corner of your home. From floors to glass, Dexta ensures a sparkling clean finish every time.
                      </p>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-center gap-2 text-sm text-slate-700"><Check className="text-yellow-500 w-4 h-4" /> Multi-surface cleaning power</li>
                        <li className="flex items-center gap-2 text-sm text-slate-700"><Check className="text-yellow-500 w-4 h-4" /> Antibacterial protection</li>
                        <li className="flex items-center gap-2 text-sm text-slate-700"><Check className="text-yellow-500 w-4 h-4" /> Streak-free shine</li>
                      </ul>
                      <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white pointer-events-none">View Products</Button>
                    </CardContent>
                  </div>
                </Link>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/30 rounded-2xl transform -translate-x-2 -translate-y-2" />
              <img 
                src={factoryImage} 
                alt="Dipsa Manufacturing Facility" 
                className="rounded-2xl shadow-2xl relative z-10 w-full h-[500px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">About Dipsa Enterprises</h2>
              <h3 className="text-4xl font-heading font-bold text-slate-900 mb-6">Excellence in Manufacturing</h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Founded in Udaipur, Tripura, Dipsa Enterprises Pvt. Ltd. has grown to become a leading name in the household cleaning industry. We are committed to innovation, quality, and sustainability.
              </p>
              <p className="text-slate-600 mb-8">
                Our state-of-the-art manufacturing facility ensures that every product meets the highest standards of efficacy and safety. We believe a clean home is a happy home, and we strive to make cleaning easier for everyone.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                    <ShieldCheck size={24} />
                  </div>
                  <h4 className="font-bold text-slate-900">Quality Assured</h4>
                  <p className="text-sm text-slate-500">Rigorous testing for superior performance.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-600">
                    <Sparkles size={24} />
                  </div>
                  <h4 className="font-bold text-slate-900">Eco-Friendly</h4>
                  <p className="text-sm text-slate-500">Sustainable practices in manufacturing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">Get In Touch</h2>
            <h3 className="text-4xl font-heading font-bold text-white">We'd Love to Hear From You</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-slate-800 border-slate-700 text-center p-6 hover:border-primary transition-colors">
              <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                <Phone size={32} />
              </div>
              <h4 className="font-bold text-xl mb-2 text-white">Call Us</h4>
              <p className="text-slate-400 mb-4">Mon-Sat, 9am - 6pm</p>
              <a href="tel:8259076839" className="text-primary font-bold hover:underline text-lg">8259076839</a>
            </Card>

            <Card className="bg-slate-800 border-slate-700 text-center p-6 hover:border-primary transition-colors">
              <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                <MapPin size={32} />
              </div>
              <h4 className="font-bold text-xl mb-2 text-white">Visit Us</h4>
              <p className="text-slate-400">
                Chandrapur Colony 7, Matabari,<br />
                Udaipur, Gomati Tripura, 799013
              </p>
            </Card>

            <Card className="bg-slate-800 border-slate-700 text-center p-6 hover:border-primary transition-colors">
              <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                <Mail size={32} />
              </div>
              <h4 className="font-bold text-xl mb-2 text-white">Email Us</h4>
              <p className="text-slate-400 mb-4">For general inquiries</p>
              <a href="mailto:contact@dipsa.com" className="text-primary font-bold hover:underline text-lg">contact@dipsa.com</a>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
