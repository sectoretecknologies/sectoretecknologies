import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Server,
  Network,
  Shield,
  Database,
  Headphones,
  Building2,
  RefreshCw,
  BarChart3,
  Monitor,
  HardDrive,
  Router,
  Wifi,
  Camera,
  KeyRound,
  Phone,
  Printer,
  Globe,
  CheckCircle,
  ArrowRight,
  Linkedin,
  Twitter,
  Youtube,
  Instagram,
  Menu,
  X,
  FileCheck,
  Users,
  Clock
} from 'lucide-react';

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
                className={`text-sm font-medium transition-colors duration-300 ${
                  link.name === 'Services' ? 'text-white' : 'text-white/70 hover:text-white'
                }`}
                data-testid={`link-nav-${link.name.toLowerCase().replace(' ', '-')}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button className="btn-primary text-sm py-3 px-6" data-testid="button-talk-expert-nav">
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
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 mesh-gradient z-0" />
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
            <span className="text-sm font-medium text-white/80">Managed IT Services</span>
          </motion.div>

          <motion.h1 
            variants={fadeInUp}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight text-balance mb-8"
          >
            Managed IT Services<br />
            <span className="gradient-text">That Keep Technology Running — Always</span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="text-lg sm:text-xl text-white/50 font-medium max-w-3xl mx-auto text-balance"
          >
            End-to-end IT operations, monitoring, support, and lifecycle management — 
            designed for enterprise reliability and global scale.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function OwnershipSection() {
  return (
    <section className="py-24 relative">
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-8 tracking-tight">
            More Than Support.<br />
            <span className="gradient-text">Complete Ownership.</span>
          </h2>
          <p className="text-xl text-white/60 leading-relaxed mb-8">
            At Sectore Tecknologies, managed services mean proactive ownership of your technology 
            environment — from daily operations to long-term optimization and risk reduction.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['No firefighting', 'No guesswork', 'Only predictable outcomes'].map((item, i) => (
              <span key={i} className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 font-medium">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CoreServicesSection() {
  const services = [
    {
      icon: Server,
      title: 'IT Infrastructure Management',
      items: ['Servers, desktops & laptops management', 'OS installation, patching & optimization', 'Performance monitoring & tuning', 'Hardware health checks'],
      dark: true
    },
    {
      icon: Network,
      title: 'Network Operations & Monitoring',
      items: ['Switches, routers & firewall monitoring', 'LAN, WAN, Wi-Fi & VPN support', 'Network performance & uptime monitoring', 'ISP & vendor coordination'],
      dark: false
    },
    {
      icon: Shield,
      title: 'Security Operations Management',
      items: ['Firewall policy management', 'Endpoint protection monitoring', 'CCTV system health monitoring', 'Access control & security device support'],
      dark: true
    },
    {
      icon: Database,
      title: 'Data Storage, Backup & Recovery',
      items: ['NAS & centralized storage management', 'Backup scheduling & verification', 'Recovery readiness checks', 'Surveillance storage optimization'],
      dark: false
    },
    {
      icon: Headphones,
      title: 'Remote & On-Site IT Support',
      items: ['User support (remote & physical)', 'Incident & request handling', 'Break-fix & troubleshooting', 'Escalation & resolution management'],
      dark: true
    },
    {
      icon: Building2,
      title: 'Facility & On-Site IT Services',
      items: ['Dedicated on-site engineers', 'Daily IT operations support', 'Multi-location coordination', 'Asset handling & documentation'],
      dark: false
    },
    {
      icon: RefreshCw,
      title: 'Preventive Maintenance & Health Audits',
      items: ['Scheduled preventive visits', 'System & network health audits', 'Risk identification', 'Performance optimization recommendations'],
      dark: true
    },
    {
      icon: BarChart3,
      title: 'IT Asset & Lifecycle Management',
      items: ['Asset inventory & tracking', 'Warranty & AMC management', 'Upgrade & replacement planning', 'End-of-life coordination'],
      dark: false
    },
  ];

  return (
    <section className="relative">
      <div className="section-container py-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">What We Deliver</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-4 tracking-tight">
            Core Managed Services
          </h2>
        </motion.div>
      </div>

      {services.map((service, index) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`py-16 ${service.dark ? 'bg-card/30' : ''}`}
          data-testid={`service-${index}`}
        >
          <div className="section-container">
            <div className={`grid lg:grid-cols-2 gap-12 items-center`}>
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="icon-wrapper mb-6 w-16 h-16">
                  <service.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-white/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-8 aspect-[4/3] flex items-center justify-center">
                  <service.icon className="w-24 h-24 text-white/10" strokeWidth={0.5} />
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="text-xs text-white/40">Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}

function ProductsWeManageSection() {
  const products = [
    { icon: Monitor, name: 'Desktops, Laptops & Workstations' },
    { icon: Server, name: 'Physical & Virtual Servers' },
    { icon: Router, name: 'Network Switches & Routers' },
    { icon: Shield, name: 'Firewalls & Security Appliances' },
    { icon: Wifi, name: 'Wi-Fi Access Points' },
    { icon: HardDrive, name: 'NAS & Storage Systems' },
    { icon: Camera, name: 'CCTV Cameras, NVRs & VMS' },
    { icon: KeyRound, name: 'Access Control & Attendance Systems' },
    { icon: Phone, name: 'IP EPABX, IP Phones & PA Systems' },
    { icon: Printer, name: 'Printers & Office IT Equipment' },
  ];

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
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Expertise</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-4 tracking-tight">
            Technology We Manage & Support
          </h2>
        </motion.div>

        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              variants={fadeInUp}
              className="group text-center p-5 rounded-xl bg-card/50 border border-white/5 hover:border-primary/30 transition-all duration-300"
              data-testid={`product-${index}`}
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                <product.icon className="w-6 h-6 text-white/60 group-hover:text-primary transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <span className="text-xs font-medium text-white/70 leading-tight block">{product.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function AMCModelsSection() {
  const models = [
    { icon: FileCheck, title: 'Annual Maintenance Contracts (AMC)', description: 'Comprehensive yearly coverage for all your IT assets' },
    { icon: Clock, title: 'Multi-Year Support Programs', description: 'Extended support agreements with predictable costs' },
    { icon: Users, title: 'Remote / Hybrid / On-Site Models', description: 'Flexible delivery based on your operational needs' },
    { icon: Server, title: 'Third-Party Hardware Support', description: 'Vendor-agnostic support for diverse equipment' },
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
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Support Options</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-4 tracking-tight">
            Flexible AMC & Support Models
          </h2>
        </motion.div>

        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {models.map((model, index) => (
            <motion.div
              key={model.title}
              variants={fadeInUp}
              className="card-tech text-center"
              data-testid={`amc-model-${index}`}
            >
              <div className="icon-wrapper mx-auto mb-5">
                <model.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{model.title}</h3>
              <p className="text-sm text-white/50">{model.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <button className="btn-primary group" data-testid="button-discuss-support">
            <span>Discuss Support Model</span>
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}

function GlobalOperationsSection() {
  const points = [
    'Multi-location IT support',
    'Remote monitoring & coordination',
    'Standardized processes',
    'Documentation & reporting',
    'Partner-friendly operations',
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-40" />
      <div className="section-container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Enterprise Ready</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-4 tracking-tight">
            Built for Continuous, Global Operations
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden bg-card/50 border border-white/10 p-10 lg:p-16"
        >
          <div className="relative h-48 lg:h-64 flex items-center justify-center mb-12">
            <Globe className="w-40 h-40 lg:w-56 lg:h-56 text-white/5" strokeWidth={0.5} />
            
            {[
              { top: '18%', left: '25%', delay: 0 },
              { top: '28%', left: '55%', delay: 0.2 },
              { top: '42%', left: '75%', delay: 0.4 },
              { top: '58%', left: '30%', delay: 0.6 },
              { top: '52%', left: '60%', delay: 0.8 },
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
                  <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                  <div className="absolute inset-0 w-3 h-3 rounded-full bg-accent/50 animate-ping" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {points.map((point, index) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10"
                data-testid={`global-ops-${index}`}
              >
                <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm text-white/80 font-medium">{point}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WhySectoreSection() {
  const reasons = [
    'Proactive, not reactive',
    'Predictable IT outcomes',
    'Clear ownership & accountability',
    'Engineering-driven approach',
    'Scalable & future-ready',
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
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Trust</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-4 tracking-tight">
            Why Organizations Trust Sectore
          </h2>
        </motion.div>

        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-2xl mx-auto space-y-4"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={reason}
              variants={fadeInUp}
              className="flex items-center gap-4 p-5 rounded-xl bg-card/50 border border-white/5"
              data-testid={`trust-reason-${index}`}
            >
              <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
              <span className="text-lg font-semibold text-white">{reason}</span>
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
            Let Us Manage Your Technology,<br />
            <span className="gradient-text">So You Can Focus on Growth</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-primary group" data-testid="button-talk-expert-cta">
              <span>Talk to an Expert</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-secondary" data-testid="button-contact-cta">
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  const pages = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Services', href: '/services' },
    { name: 'Tech Guide', href: '#tech-guide' },
    { name: 'Contact', href: '#contact' }
  ];
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
                <li key={page.name}>
                  <a 
                    href={page.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                    data-testid={`footer-link-${page.name.toLowerCase().replace(' ', '-')}`}
                  >
                    {page.name}
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

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <OwnershipSection />
        <CoreServicesSection />
        <ProductsWeManageSection />
        <AMCModelsSection />
        <GlobalOperationsSection />
        <WhySectoreSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}