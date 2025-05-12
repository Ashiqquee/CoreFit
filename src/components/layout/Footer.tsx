import Link from "next/link";
import Image from "next/image";
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold">CORE<span className="text-primary">FIT</span></span>
            </Link>
            <p className="text-muted-foreground mb-6">
              Transform your body and mind with personalized training programs designed for real results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-muted p-2 rounded-full text-muted-foreground hover:text-primary transition-colors">
                <FiInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-muted p-2 rounded-full text-muted-foreground hover:text-primary transition-colors">
                <FiFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-muted p-2 rounded-full text-muted-foreground hover:text-primary transition-colors">
                <FiTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-muted p-2 rounded-full text-muted-foreground hover:text-primary transition-colors">
                <FiYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "Services", "Results", "Testimonials", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase()}`} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                "Personal Training",
                "Group Fitness",
                "Nutrition Coaching",
                "Online Programs",
                "Corporate Wellness"
              ].map((item) => (
                <li key={item}>
                  <Link 
                    href="#services" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg mb-6">Hours</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>6:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>8:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>8:00 AM - 5:00 PM</span>
              </li>
            </ul>
            
            <div className="mt-8">
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=800&auto=format&fit=crop"
                  alt="Gym location"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-2">
                  <p className="text-sm font-bold">Find Us</p>
                  <p className="text-xs text-muted-foreground">123 Fitness Street, SF</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ashiqquee. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 