import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  Shield, 
  Database, 
  Headphones, 
  Phone, 
  Laptop,
  Building2,
  Factory,
  GraduationCap,
  Heart,
  ShoppingCart,
  Cpu,
  ArrowRight,
  Search,
  Rocket,
  Settings,
  TrendingUp,
  Globe,
  CheckCircle,
  Linkedin,
  Twitter,
  Youtube,
  Instagram,
  Menu,
  X
} from 'lucide-react';
import heroBackground from '@assets/generated_images/abstract_tech_network_background.png';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Services', href: '/services' },
    { name: 'Tech Guide', href: '#tech-guide' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-xl border-b border-white/5' 
          : 'bg-transparent'
      }`}
    >
      <nav className="section-container">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center gap-3" data-testid="link-home">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-white font-black text-lg">S</span>
            </div>
            <span className="text-xl font-bold text-white tracking-tight">Sectore</span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-300"
                data-testid={`link-nav-${link.name.toLowerCase().replace(' ', '-')}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button 
              className="btn-primary text-sm py-3 px-6"
              data-testid="button-talk-expert-nav"
            >
              Talk to an Expert
            </button>
          </div>

          <button 
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden py-6 border-t border-white/10"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-white/70 hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="btn-primary text-sm py-3 px-6 mt-4 w-full">
                Talk to an Expert
              </button>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.6
        }}
      />
      <div className="absolute inset-0 hero-gradient z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background z-10" />
      
      <div className="relative z-20 section-container text-center pt-32 pb-20">
        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          className="max-w-5xl mx-auto"
        >
          <motion.div 
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-white/80">Enterprise-Grade Technology Solutions</span>
          </motion.div>

          <motion.h1 
            variants={fadeInUp}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.05] tracking-tight text-balance mb-8"
          >
            Global Technology{' '}
            <span className="gradient-text">Solutions</span>{' '}
            Partner
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="text-lg sm:text-xl lg:text-2xl text-white/60 font-medium max-w-3xl mx-auto mb-12 text-balance"
          >
            Designing, Securing & Managing<br className="hidden sm:block" />
            Scalable Enterprise Technology Ecosystems
          </motion.p>

          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="btn-primary group" data-testid="button-talk-expert">
              <span>Talk to an Expert</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-secondary" data-testid="button-explore-solutions">
              Explore Solutions
            </button>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-white/60"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="py-32 relative">
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-8">
            Technology That Works.<br />
            <span className="gradient-text">Technology That Scales.</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            We deliver enterprise-ready infrastructure solutions built for reliability, 
            performance, and global scale. Trusted by organizations worldwide.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function CapabilitiesSection() {
  const capabilities = [
    { icon: Server, title: 'IT Infrastructure & Networking', description: 'End-to-end network design, deployment, and optimization for modern enterprises.' },
    { icon: Database, title: 'Data Storage & Backup', description: 'Resilient storage solutions with automated backup and disaster recovery.' },
    { icon: Shield, title: 'Cybersecurity & Surveillance', description: 'Multi-layered security architecture protecting your digital assets.' },
    { icon: Headphones, title: 'Managed IT Services', description: 'Proactive monitoring, maintenance, and 24/7 support for your infrastructure.' },
    { icon: Phone, title: 'IP Communication & Collaboration', description: 'Unified communications platforms enabling seamless team collaboration.' },
    { icon: Laptop, title: 'Hybrid & Remote Enablement', description: 'Secure remote access solutions for the modern distributed workforce.' },
  ];

  return (
    <section className="py-32 relative" id="solutions">
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Core Capabilities</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-4 tracking-tight">
            Comprehensive Technology Solutions
          </h2>
        </motion.div>

        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              variants={fadeInUp}
              className="card-tech group cursor-pointer"
              data-testid={`card-capability-${index}`}
            >
              <div className="icon-wrapper mb-6 group-hover:scale-110 transition-transform duration-300">
                <capability.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{capability.title}</h3>
              <p className="text-white/50 leading-relaxed">{capability.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    { icon: Search, title: 'Discover', description: 'Deep analysis of your requirements' },
    { icon: Cpu, title: 'Design', description: 'Architecture tailored to your needs' },
    { icon: Rocket, title: 'Deploy', description: 'Seamless implementation' },
    { icon: Settings, title: 'Operate', description: 'Continuous management' },
    { icon: TrendingUp, title: 'Scale', description: 'Growth-ready expansion' },
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      <div className="section-container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Process</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-4 tracking-tight">
            How We Work
          </h2>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2" />
          
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 lg:grid-cols-5 gap-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={fadeInUp}
                className="relative text-center group"
                data-testid={`step-process-${index}`}
              >
                <div className="relative z-10 w-20 h-20 mx-auto mb-6 rounded-2xl bg-card border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors duration-300">
                  <step.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-white/50">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ManagedServicesSection() {
  const features = [
    'Annual Maintenance Contracts (AMC)',
    'Remote + On-site Support',
    'Preventive Maintenance',
    'Lifecycle Management',
  ];

  return (
    <section className="py-32 relative" id="services">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Managed Services</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mt-4 mb-6 tracking-tight leading-tight">
              Predictable IT.<br />
              <span className="gradient-text">Proactive Support.</span><br />
              Global Standards.
            </h2>
            <p className="text-lg text-white/50 mb-8">
              Our managed services ensure your technology infrastructure operates at peak performance, 
              with predictable costs and world-class support.
            </p>

            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <li key={feature} className="flex items-center gap-3" data-testid={`feature-managed-${index}`}>
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-white/80 font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="btn-primary group" data-testid="button-view-managed">
              <span>View Managed Services</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-card to-background border border-white/10 p-8">
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { label: 'Uptime', value: '99.99%' },
                  { label: 'Response Time', value: '<15min' },
                  { label: 'Tickets Resolved', value: '24K+' },
                  { label: 'Client Satisfaction', value: '98%' },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-2xl font-black gradient-text">{stat.value}</div>
                    <div className="text-sm text-white/50">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="h-32 rounded-xl bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 flex items-center justify-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                  <span className="text-white/60 font-medium">All Systems Operational</span>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/15 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function GlobalSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="section-container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Global Reach</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-4 mb-6 tracking-tight">
            Built for Multi-Location &<br />
            <span className="gradient-text">Global Operations</span>
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden bg-card/50 border border-white/10 p-8 lg:p-12"
        >
          <div className="relative h-64 lg:h-96 flex items-center justify-center">
            <Globe className="w-48 h-48 lg:w-64 lg:h-64 text-white/5" strokeWidth={0.5} />
            
            {[
              { top: '20%', left: '25%', delay: 0 },
              { top: '35%', left: '48%', delay: 0.3 },
              { top: '45%', left: '72%', delay: 0.6 },
              { top: '60%', left: '30%', delay: 0.9 },
              { top: '55%', left: '60%', delay: 1.2 },
            ].map((node, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: node.delay, duration: 0.5 }}
                className="absolute"
                style={{ top: node.top, left: node.left }}
              >
                <div className="relative">
                  <div className="w-4 h-4 rounded-full bg-primary animate-pulse" />
                  <div className="absolute inset-0 w-4 h-4 rounded-full bg-primary/50 animate-ping" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {[
              { title: 'Standardized Deployments', desc: 'Consistent infrastructure across all locations' },
              { title: 'Remote Monitoring', desc: '24/7 visibility into your global operations' },
              { title: 'Partner-Ready Architecture', desc: 'Built for collaboration and integration' },
            ].map((item, index) => (
              <div key={item.title} className="text-center" data-testid={`global-feature-${index}`}>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/50">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  const industries = [
    { icon: Building2, name: 'Enterprise' },
    { icon: Factory, name: 'Manufacturing' },
    { icon: GraduationCap, name: 'Education' },
    { icon: Heart, name: 'Healthcare' },
    { icon: ShoppingCart, name: 'Retail' },
    { icon: Cpu, name: 'Smart Infrastructure' },
  ];

  return (
    <section className="py-32 relative">
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Industries</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-4 tracking-tight">
            Industries We Serve
          </h2>
        </motion.div>

        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              variants={fadeInUp}
              className="group text-center p-6 rounded-2xl bg-card/50 border border-white/5 hover:border-primary/30 transition-all duration-300 cursor-pointer"
              data-testid={`industry-${index}`}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                <industry.icon className="w-8 h-8 text-white/60 group-hover:text-primary transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <span className="text-sm font-semibold text-white/80">{industry.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="section-container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-8 text-balance">
            Let's Build the Future of Your{' '}
            <span className="gradient-text">Technology Infrastructure</span>
          </h2>
          <p className="text-lg text-white/50 mb-12 max-w-2xl mx-auto">
            Partner with Sectore Tecknologies for enterprise-grade solutions 
            that scale with your business ambitions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-primary group" data-testid="button-contact-cta">
              <span>Contact Us</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-secondary" data-testid="button-schedule-cta">
              Schedule a Call
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  const pages = ['Home', 'About Us', 'Solutions', 'Services', 'Tech Guide', 'Contact'];
  const socials = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="py-20 border-t border-white/5" id="contact">
      <div className="section-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-black text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Sectore</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              Global technology solutions partner delivering enterprise-grade infrastructure, 
              security, and managed services worldwide.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Pages</h4>
            <ul className="space-y-3">
              {pages.map((page) => (
                <li key={page}>
                  <a 
                    href={`#${page.toLowerCase().replace(' ', '-')}`}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                    data-testid={`footer-link-${page.toLowerCase().replace(' ', '-')}`}
                  >
                    {page}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li>+1 (800) 123-4567</li>
              <li>contact@sectore.tech</li>
              <li>India | Global</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Social</h4>
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-primary/20 transition-all duration-300"
                  aria-label={social.label}
                  data-testid={`social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-5 h-5" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © 2026 Sectore Tecknologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-white/40 hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-white/40 hover:text-white/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <TrustSection />
        <CapabilitiesSection />
        <ProcessSection />
        <ManagedServicesSection />
        <GlobalSection />
        <IndustriesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}