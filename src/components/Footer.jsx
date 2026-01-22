import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaHeart, FaCode } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/danielAd0", label: "GitHub", color: "hover:text-gray-300" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/daniel-adoration", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: FaTwitter, href: "https://twitter.com/daniel_ad0", label: "Twitter", color: "hover:text-sky-400" },
    { icon: FaInstagram, href: "https://instagram.com/daniel.ad0", label: "Instagram", color: "hover:text-pink-400" },
  ];

  const footerLinks = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Resume", href: "/Daniel_Resume.pdf" },
  ];

  return (
    <footer className="relative w-full mt-20">
      {/* Decorative top border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
      <div className="bg-black/40 backdrop-blur-xl border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/20">
                  <FaCode className="text-xl text-blue-400" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Daniel.dev
                </span>
              </div>
              
              <p className="text-slate-300 text-sm leading-relaxed">
                Full-stack developer specializing in Java applications and modern web development. 
                Creating elegant solutions to complex problems.
              </p>
              
              {/* Social Media Links */}
              <div className="flex gap-4 pt-2">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2 rounded-lg bg-white/5 border border-white/10 ${social.color} transition-all duration-300`}
                  >
                    <social.icon className="text-lg" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="space-y-2">
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-white">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-red-500/20 to-red-600/20 mt-1">
                    <FaHeart className="text-sm text-red-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Email</p>
                    <a 
                      href="mailto:adorenti12@gmail.com" 
                      className="text-slate-300 hover:text-blue-400 transition-colors"
                    >
                      adorenti12@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/20 to-green-600/20 mt-1">
                    <FaHeart className="text-sm text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Based In</p>
                    <p className="text-slate-300">Diepkloof, Soweto</p>
                  </div>
                </li>
              </ul>
              
              {/* Newsletter Signup (Optional) */}
              <div className="pt-4">
                <p className="text-sm text-slate-400 mb-2">Want updates on new projects?</p>
                <a
                  href="https://github.com/danielAd0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1"
                >
                  Follow on GitHub <span>→</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-8" />

          {/* Copyright & Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <p className="text-slate-400 text-sm">
                © {currentYear} Daniel Adoration. All rights reserved.
              </p>
              <p className="text-slate-500 text-xs mt-1">
                Built with <FaHeart className="inline text-red-400 mx-1" /> using React & Tailwind CSS
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-6 text-sm"
            >
              <a 
                href="/privacy" 
                className="text-slate-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="/terms" 
                className="text-slate-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
                aria-label="Scroll to top"
              >
                Back to Top ↑
              </button>
            </motion.div>
          </div>

          {/* Inspirational Quote */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-8 pt-6 border-t border-white/5"
          >
            <p className="text-slate-500 text-sm italic">
              "The best way to predict the future is to create it." – Peter Drucker
            </p>
            <p className="text-slate-600 text-xs mt-2">
              Thanks for visiting! Let's build something amazing together.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Floating back to top button for mobile */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 md:hidden p-3 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg z-50"
        aria-label="Scroll to top"
      >
        ↑
      </motion.button>
    </footer>
  );
}