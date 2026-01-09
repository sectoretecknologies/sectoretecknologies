import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Server,
  Network,
  Database,
  Shield,
  Phone,
  Cloud,
  Building2,
  Factory,
  GraduationCap,
  Heart,
  ShoppingCart,
  Cpu,
  Globe,
  CheckCircle,
  ArrowRight,
  Linkedin,
  Twitter,
  Youtube,
  Instagram,
  Menu,
  X,
  Wrench,
  Clock,
  HeadphonesIcon,
  BarChart3
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
                  link.name === 'Solutions' ? 'text-white' : 'text-white/70 hover:text-white'
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
            <span className="text-sm font-medium text-white/80">Enterprise Solutions</span>
          </motion.div>

          <motion.h1 
            variants={fadeInUp}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight text-balance mb-8"
          >
            Technology Solutions<br />
            <span className="gradient-text">Built for Scale, Security & Performance</span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="text-lg sm:text-xl text-white/50 font-medium max-w-3xl mx-auto text-balance"
          >
            We design and manage enterprise-grade technology ecosystems that power modern 
            organizations across locations, industries, and regions.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function PhilosophySection() {
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
            Solutions Designed as <span className="gradient-text">Systems</span>
          </h2>
          <p className="text-xl text-white/60 leading-relaxed">
            Our solutions are not isolated components. They are <span className="text-white font-semibold">integrated systems</span>, 
            engineered to work together — securely, reliably, and at scale.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function SolutionDomainsSection() {
  const solutions = [
    {
      icon: Server,
      title: 'IT Infrastructure & Computing',
      description: 'Enterprise endpoints, servers, virtualization, and system optimization — designed for reliability and lifecycle governance.',
      dark: true
    },
    {
      icon: Network,
      title: 'Network & Connectivity Solutions',
      description: 'LAN, WAN, Wi-Fi, structured cabling, secure routing, firewalls, and multi-location connectivity.',
      dark: false
    },
    {
      icon: Database,
      title: 'Data Storage, Backup & Continuity',
      description: 'Centralized storage, NAS, backup, recovery, and business continuity planning.',
      dark: true
    },
    {
      icon: Shield,
      title: 'Security & Surveillance Systems',
      description: 'CCTV, access control, intrusion detection, fire systems, and compliance-ready monitoring.',
      dark: false
    },
    {
      icon: Phone,
      title: 'IP Communication & Collaboration',
      description: 'IP telephony, EPABX, PA systems, and enterprise communication platforms.',
      dark: true
    },
    {
      icon: Cloud,
      title: 'Hybrid & Remote Enablement',
      description: 'Secure remote access, hybrid infrastructure, and distributed workforce enablement.',
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
            Core Solution Domains
          </h2>
        </motion.div>
      </div>

      {solutions.map((solution, index) => (
        <motion.div
          key={solution.title}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`py-20 ${solution.dark ? 'bg-card/30' : ''}`}
          data-testid={`solution-domain-${index}`}
        >
          <div className="section-container">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="icon-wrapper mb-6 w-16 h-16">
                  <solution.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{solution.title}</h3>
                <p className="text-lg text-white/60 leading-relaxed">{solution.description}</p>
              </div>
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-8 aspect-video flex items-center justify-center">
                  <solution.icon className="w-24 h-24 text-white/10" strokeWidth={0.5} />
                  <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-accent animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}

function ManagedServicesSection() {
  const features = [
    { icon: Wrench, text: 'Preventive maintenance' },
    { icon: HeadphonesIcon, text: 'Remote & on-site support' },
    { icon: Clock, text: 'AMC programs' },
    { icon: BarChart3, text: 'Asset lifecycle management' },
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
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Integrated Support</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mt-4 mb-6 tracking-tight">
              Managed Services Built Into<br />
              <span className="gradient-text">Every Solution</span>
            </h2>
            <p className="text-lg text-white/50 mb-8 leading-relaxed">
              Every solution we deliver is supported by structured managed services — ensuring 
              performance, security, and continuity long after deployment.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div key={feature.text} className="flex items-center gap-3" data-testid={`managed-feature-${index}`}>
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                  </div>
                  <span className="text-white/80 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            <button className="btn-primary group" data-testid="button-explore-managed">
              <span>Explore Managed Services</span>
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
              <div className="space-y-4">
                {[
                  { label: 'System Health', value: 98, color: 'bg-accent' },
                  { label: 'Security Score', value: 95, color: 'bg-primary' },
                  { label: 'Uptime', value: 99.9, color: 'bg-accent' },
                ].map((metric) => (
                  <div key={metric.label} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">{metric.label}</span>
                      <span className="text-white font-semibold">{metric.value}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${metric.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className={`h-full ${metric.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/5 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                <span className="text-sm text-white/60">All systems monitored in real-time</span>
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

function IndustriesSection() {
  const industries = [
    { icon: Building2, name: 'Enterprises & Corporate Groups' },
    { icon: Factory, name: 'Manufacturing & Industrial' },
    { icon: GraduationCap, name: 'Education & Research' },
    { icon: Heart, name: 'Healthcare' },
    { icon: ShoppingCart, name: 'Retail & Commercial' },
    { icon: Cpu, name: 'Smart Infrastructure' },
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
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Versatility</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-4 tracking-tight">
            Solutions Across Industries
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
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                <industry.icon className="w-7 h-7 text-white/60 group-hover:text-primary transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <span className="text-sm font-semibold text-white/80">{industry.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function GlobalDeliverySection() {
  const points = [
    'Multi-location rollouts',
    'Standardized architecture',
    'Remote monitoring',
    'Partner-ready delivery',
    'Vendor-agnostic ecosystems',
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
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Global Scale</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-4 tracking-tight">
            Designed for Global Deployment
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
              { top: '20%', left: '22%', delay: 0 },
              { top: '25%', left: '52%', delay: 0.2 },
              { top: '35%', left: '78%', delay: 0.4 },
              { top: '60%', left: '28%', delay: 0.6 },
              { top: '55%', left: '62%', delay: 0.8 },
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
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                  <div className="absolute inset-0 w-3 h-3 rounded-full bg-primary/50 animate-ping" />
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
                data-testid={`global-delivery-${index}`}
              >
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-white/80 font-medium">{point}</span>
              </motion.div>
            ))}
          </div>
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
            Let's Architect the Right{' '}
            <span className="gradient-text">Technology Foundation</span>
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
    { name: 'Services', href: '#services' },
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

export default function Solutions() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <PhilosophySection />
        <SolutionDomainsSection />
        <ManagedServicesSection />
        <IndustriesSection />
        <GlobalDeliverySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}