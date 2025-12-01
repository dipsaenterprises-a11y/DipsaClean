import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useRoute } from "wouter";
import { brands } from "@/lib/products";
import NotFound from "@/pages/not-found";
import { ArrowLeft, Check, Package } from "lucide-react";
import { Link } from "wouter";

export default function BrandPage() {
  const [match, params] = useRoute("/brand/:id");
  
  if (!match || !params || !brands[params.id]) {
    return <NotFound />;
  }

  const brand = brands[params.id];
  const isOcto = brand.id === "octo-wash";
  
  // Dynamic theme colors based on brand
  const themeColor = isOcto ? "text-blue-600" : "text-yellow-600";
  const themeBg = isOcto ? "bg-blue-600" : "bg-yellow-500";
  const themeBgLight = isOcto ? "bg-blue-50" : "bg-yellow-50";
  const themeBorder = isOcto ? "border-blue-200" : "border-yellow-200";
  const themeButton = isOcto ? "bg-blue-600 hover:bg-blue-700" : "bg-yellow-500 hover:bg-yellow-600";

  return (
    <Layout>
      {/* Brand Hero */}
      <section className={`relative py-20 overflow-hidden ${themeBgLight}`}>
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/">
            <a className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
              <ArrowLeft size={16} /> Back to Home
            </a>
          </Link>
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex-1"
            >
              <h1 className={`text-5xl md:text-7xl font-heading font-bold mb-4 ${themeColor}`}>
                {brand.name}
              </h1>
              <p className="text-2xl font-medium text-slate-700 mb-6">
                {brand.tagline}
              </p>
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                {brand.description}
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex-1 flex justify-center"
            >
              <div className={`relative w-80 h-80 md:w-96 md:h-96 rounded-full ${isOcto ? 'bg-blue-100' : 'bg-yellow-100'} flex items-center justify-center`}>
                <div className={`absolute inset-0 rounded-full ${isOcto ? 'bg-blue-200' : 'bg-yellow-200'} animate-pulse opacity-20`} />
                <img 
                  src={brand.products[0].image} 
                  alt={brand.name} 
                  className="w-full h-full object-contain p-8 relative z-10 drop-shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative background elements */}
        <div className={`absolute -right-20 -top-20 w-96 h-96 rounded-full blur-3xl opacity-30 ${themeBg}`} />
        <div className={`absolute -left-20 -bottom-20 w-64 h-64 rounded-full blur-3xl opacity-20 ${themeBg}`} />
      </section>

      {/* Products Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-sm font-bold tracking-widest uppercase mb-2 ${themeColor}`}>Product Range</h2>
            <h3 className="text-4xl font-heading font-bold text-slate-900">Discover Our Solutions</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brand.products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300 border-slate-100">
                  <div className="p-8 bg-slate-50 h-64 flex items-center justify-center relative group overflow-hidden">
                    <div className={`absolute inset-0 ${themeBg} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="h-full w-auto object-contain drop-shadow-lg transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="flex-1 p-6 flex flex-col">
                    <h4 className="text-xl font-heading font-bold text-slate-900 mb-2">{product.name}</h4>
                    <p className="text-slate-600 mb-6 text-sm flex-grow">{product.description}</p>
                    
                    <div className="mb-6">
                      <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Key Benefits</h5>
                      <ul className="space-y-2">
                        {product.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                            <div className={`w-1.5 h-1.5 rounded-full ${themeBg}`} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.sizes.map((size) => (
                          <Badge key={size} variant="secondary" className="bg-slate-100 text-slate-600 hover:bg-slate-200">
                            {size}
                          </Badge>
                        ))}
                      </div>
                      <a href="https://wa.me/8259076839" target="_blank" rel="noopener noreferrer" className="w-full">
                        <Button className={`w-full ${themeButton} text-white`}>
                          Inquire Now
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Order Call to Action */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <Package className={`w-16 h-16 mx-auto mb-6 ${themeColor}`} />
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Need Bulk Supplies?</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            We offer competitive rates for bulk orders and distributors. Contact us today to discuss your requirements.
          </p>
          <a href="https://wa.me/8259076839" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className={`rounded-full px-8 h-14 text-lg font-bold ${themeButton}`}>
              Contact Sales Team
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
}
