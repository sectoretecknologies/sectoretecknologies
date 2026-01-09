import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Lightbulb,
  ShieldCheck,
  Expand,
  Users,
  Handshake,
  Search,
  Cpu,
  Rocket,
  Settings,
  TrendingUp,
  Globe,
  CheckCircle,
  ArrowRight,
  Linkedin,
  Twitter,
  Youtube,
  Instagram,
  Menu,
  X,
  Target,
  Layers,
  Lock,
  CircleDot
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
                  link.name === 'About Us' ? 'text-white' : 'text-white/70 hover:text-white'
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
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
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
            <span className="text-sm font-medium text-white/80">About Sectore Tecknologies</span>
          </motion.div>

          <motion.h1 
            variants={fadeInUp}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight text-balance mb-8"
          >
            We Design Technology<br />
            <span className="gradient-text">That Scales With Ambition</span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="text-lg sm:text-xl text-white/50 font-medium max-w-3xl mx-auto text-balance"
          >
            Sectore Tecknologies is a global-ready technology solutions partner focused on building 
            secure, scalable, and future-proof digital infrastructure.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function WhoWeAreSection() {
  return (
    <section className="py-32 relative">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Identity</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mt-4 mb-8 tracking-tight">
              Who We Are
            </h2>
            <div className="space-y-6 text-lg text-white/60 leading-relaxed">
              <p>
                We are technology architects and system integrators who design, deploy, 
                and manage enterprise-grade IT ecosystems.
              </p>
              <p>
                We work as an <span className="text-white font-semibold">extension of our clients' technology leadership</span>, 
                taking responsibility for performance, security, and scalability across 
                infrastructure, networks, data, and operations.
              </p>
              <p className="text-white/40 text-base italic">
                No marketing fluff. Just engineering excellence.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-card to-background border border-white/10 p-10">
              <div className="grid grid-cols-3 gap-4">
                {[...Array(9)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    className={`aspect-square rounded-xl ${
                      i === 4 
                        ? 'bg-gradient-to-br from-primary/30 to-accent/20 border border-primary/30' 
                        : 'bg-white/5 border border-white/5'
                    } flex items-center justify-center`}
                  >
                    {i === 4 && <Layers className="w-8 h-8 text-primary" strokeWidth={1.5} />}
                    {i === 1 && <Lock className="w-6 h-6 text-white/20" strokeWidth={1.5} />}
                    {i === 3 && <CircleDot className="w-6 h-6 text-white/20" strokeWidth={1.5} />}
                    {i === 5 && <Target className="w-6 h-6 text-white/20" strokeWidth={1.5} />}
                    {i === 7 && <Globe className="w-6 h-6 text-white/20" strokeWidth={1.5} />}
                  </motion.div>
                ))}
              </div>
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/15 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PhilosophySection() {
  const principles = [
    { icon: Lightbulb, title: 'Solution-First Thinking', description: 'Technology must solve real business problems.' },
    { icon: ShieldCheck, title: 'Security by Design', description: 'Protection is built into architecture, not added later.' },
    { icon: Expand, title: 'Scalability at Core', description: 'Systems must grow without rework.' },
    { icon: Users, title: 'Single-Point Accountability', description: 'One partner. Clear responsibility.' },
    { icon: Handshake, title: 'Long-Term Partnership', description: 'We build relationships, not transactions.' },
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
          className="text-center mb-20"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Design Principles</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-4 tracking-tight">
            Our Philosophy
          </h2>
        </motion.div>

        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              variants={fadeInUp}
              className="group text-center p-6 rounded-2xl bg-card/50 border border-white/5 hover:border-primary/30 transition-all duration-300"
              data-testid={`principle-${index}`}
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                <principle.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-bold text-white mb-2">{principle.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{principle.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function HowWeThinkSection() {
  const focuses = [
    'System integrity',
    'Operational continuity',
    'Risk reduction',
    'Lifecycle governance',
  ];

  return (
    <section className="py-32 relative bg-gradient-to-b from-card/30 to-transparent">
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Engineering Mindset</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-4 mb-8 tracking-tight">
            How We Think About Technology
          </h2>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            We believe technology should be <span className="text-white font-semibold">predictable, resilient, 
            and invisible</span> to business operations.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {focuses.map((focus, index) => (
              <motion.div
                key={focus}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/80 font-medium"
                data-testid={`focus-${index}`}
              >
                {focus}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function DeliveryModelSection() {
  const steps = [
    { icon: Search, title: 'Discover', description: 'Understand requirements' },
    { icon: Cpu, title: 'Design', description: 'Architect solutions' },
    { icon: Rocket, title: 'Deploy', description: 'Implement seamlessly' },
    { icon: Settings, title: 'Operate', description: 'Manage continuously' },
    { icon: TrendingUp, title: 'Scale', description: 'Expand confidently' },
  ];

  return (
    <section className="py-32 relative">
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Global Process</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-4 tracking-tight">
            Our Delivery Model
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
                data-testid={`delivery-step-${index}`}
              >
                <div className="relative z-10 w-20 h-20 mx-auto mb-6 rounded-2xl bg-card border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors duration-300">
                  <step.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
                <p className="text-sm text-white/50">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function GlobalReadinessSection() {
  const points = [
    'Multi-location deployments',
    'Standardized documentation',
    'Remote monitoring & collaboration',
    'Partner-friendly delivery model',
    'Vendor-agnostic architecture',
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
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Trust Builder</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-4 tracking-tight">
            Built for Global Operations
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
              { top: '15%', left: '20%', delay: 0 },
              { top: '30%', left: '50%', delay: 0.2 },
              { top: '40%', left: '75%', delay: 0.4 },
              { top: '65%', left: '25%', delay: 0.6 },
              { top: '60%', left: '65%', delay: 0.8 },
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
                data-testid={`global-point-${index}`}
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
    'Engineering-driven approach',
    'Enterprise-grade execution',
    'Predictable outcomes',
    'Clear ownership',
    'Scalable foundations',
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
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-4 tracking-tight">
            Why Organizations Choose Sectore
          </h2>
        </motion.div>

        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={reason}
              variants={fadeInUp}
              className="text-center p-6 rounded-2xl bg-card/50 border border-white/5 hover:border-accent/30 transition-all duration-300"
              data-testid={`reason-${index}`}
            >
              <div className="w-3 h-3 rounded-full bg-accent mx-auto mb-4" />
              <span className="text-sm font-semibold text-white">{reason}</span>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <button className="btn-secondary group" data-testid="button-explore-why">
            <span>Explore Why Sectore</span>
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}

function ClosingSection() {
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
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6 text-balance">
            Technology Should Empower Growth,<br />
            <span className="gradient-text">Not Complicate It.</span>
          </h2>
          <p className="text-lg text-white/50">
            That's the principle behind everything we build.
          </p>
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
                    href={page === 'Home' ? '/' : page === 'About Us' ? '/about' : `#${page.toLowerCase().replace(' ', '-')}`}
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

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <WhoWeAreSection />
        <PhilosophySection />
        <HowWeThinkSection />
        <DeliveryModelSection />
        <GlobalReadinessSection />
        <WhySectoreSection />
        <ClosingSection />
      </main>
      <Footer />
    </div>
  );
}