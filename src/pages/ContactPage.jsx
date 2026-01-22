import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaPhone, FaMapMarkerAlt, FaInstagram, FaDiscord, FaPaperPlane } from "react-icons/fa";
import useFadeIn from "../hooks/useFadeIn";
import { useState } from "react";

export default function ContactPage() {
  const ref = useFadeIn();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setSubmitted(true);
      setIsSubmitting(false);
      setTimeout(() => setSubmitted(false), 3000);
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contacts = [
    { 
      icon: FaEnvelope, 
      text: "adorenti12@gmail.com", 
      link: "mailto:adorenti12@gmail.com", 
      label: "Email",
      color: "from-red-500/20 to-red-600/20",
      iconColor: "text-red-400"
    },
    { 
      icon: FaPhone, 
      text: "+27 (68) 065-7006", 
      link: "tel:+27680657006", 
      label: "Phone",
      color: "from-green-500/20 to-green-600/20",
      iconColor: "text-green-400"
    },
    { 
      icon: FaMapMarkerAlt, 
      text: "Diepkloof, Soweto", 
      link: "#", 
      label: "Location",
      color: "from-purple-500/20 to-purple-600/20",
      iconColor: "text-purple-400"
    },
  ];

  const socials = [
    { 
      icon: FaGithub, 
      link: "https://github.com/danielAd0", 
      label: "GitHub",
      color: "hover:bg-gray-800",
      iconColor: "text-gray-300"
    },
    { 
      icon: FaLinkedin, 
      link: "https://linkedin.com/", 
      label: "LinkedIn",
      color: "hover:bg-blue-700",
      iconColor: "text-blue-400"
    },
    { 
      icon: FaTwitter, 
      link: "https://twitter.com/", 
      label: "Twitter",
      color: "hover:bg-sky-500",
      iconColor: "text-sky-400"
    },
    { 
      icon: FaInstagram, 
      link: "https://instagram.com/broztitute.1", 
      label: "Instagram",
      color: "hover:bg-pink-600",
      iconColor: "text-pink-400"
    },
    { 
      icon: FaDiscord, 
      link: "https://discord.com/users/daniel_ad0", 
      label: "Discord",
      color: "hover:bg-indigo-600",
      iconColor: "text-indigo-400"
    },
  ];

  return (
    <section className="relative w-full min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 py-20">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-transparent pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="heading-1 mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="body-large max-w-2xl mx-auto">
            Have a project in mind? Want to collaborate? Or just want to say hello?
            I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl">
              <h2 className="heading-2 mb-6">Contact Information</h2>
              <p className="body-base mb-8">
                I'm currently open to internship opportunities, freelance projects, 
                and collaborations. Feel free to reach out through any of the channels below.
              </p>
              
              <div className="space-y-6">
                {contacts.map((contact, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${contact.color} transition-transform duration-300 group-hover:scale-110`}>
                      <contact.icon className={`text-2xl ${contact.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-slate-400">{contact.label}</p>
                      <a 
                        href={contact.link} 
                        className="text-lg font-medium text-white hover:text-blue-400 transition-colors"
                      >
                        {contact.text}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media Links */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="heading-3 mb-6">Connect With Me</h3>
              <p className="body-base mb-6">
                Follow me on social media for updates, insights, and more about my work.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                {socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      flex flex-col items-center justify-center p-4 rounded-xl
                      bg-white/5 border border-white/10
                      transition-all duration-300 transform hover:scale-105
                      ${social.color}
                      group
                    `}
                    aria-label={social.label}
                  >
                    <social.icon className={`text-2xl mb-2 ${social.iconColor} group-hover:text-white transition-colors`} />
                    <span className="text-xs text-slate-400 group-hover:text-white transition-colors">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-blue-500/20">
                <FaPaperPlane className="text-2xl text-blue-400" />
              </div>
              <h2 className="heading-2">Send a Message</h2>
            </div>

            {submitted ? (
              <div className="bg-green-500/20 border border-green-500/30 text-green-400 p-6 rounded-xl text-center">
                <div className="text-4xl mb-3">🎉</div>
                <p className="text-xl font-semibold mb-2">Message Sent Successfully!</p>
                <p className="text-slate-300">Thank you for reaching out. I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400 transition-all duration-200"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400 transition-all duration-200"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400 resize-none transition-all duration-200"
                    placeholder="Hi Daniel, I'd like to discuss a project with you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`
                    w-full py-3 btn-primary flex items-center justify-center gap-2
                    ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}
                  `}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane /> Send Message
                    </>
                  )}
                </button>

                <p className="text-sm text-slate-400 text-center">
                  I typically respond within 24 hours. For urgent matters, please call.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Additional Contact Methods */}
        <div className="mt-12 glass-card p-8 rounded-2xl">
          <h3 className="heading-3 mb-6 text-center">Other Ways to Reach Me</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
              <div className="text-3xl mb-4">📱</div>
              <h4 className="text-lg font-semibold text-white mb-2">Direct Messaging</h4>
              <p className="text-slate-300 text-sm">
                Feel free to DM me on any social platform for quick questions or chats.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
              <div className="text-3xl mb-4">💼</div>
              <h4 className="text-lg font-semibold text-white mb-2">Professional</h4>
              <p className="text-slate-300 text-sm">
                Connect with me on LinkedIn for professional inquiries and networking.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
              <div className="text-3xl mb-4">👨‍💻</div>
              <h4 className="text-lg font-semibold text-white mb-2">Code Collaboration</h4>
              <p className="text-slate-300 text-sm">
                Check out my GitHub for open-source projects and collaboration opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="body-large text-slate-300">
            Don't be shy! I'm always excited to connect with fellow developers, 
            designers, and tech enthusiasts.
          </p>
        </div>
      </div>
    </section>
  );
}