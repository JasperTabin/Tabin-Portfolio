import { useState } from "react";
import { motion } from "framer-motion";
import { Facebook, Github, Instagram, Linkedin, Send, User, Mail, MessageSquare } from "lucide-react";
import * as emailjs from "@emailjs/browser";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      // Check if EmailJS is available
      const isEmailJSAvailable = true; // You can add a health check here later
      
      if (!isEmailJSAvailable) {
        throw new Error("Email service temporarily unavailable");
      }

      // Initialize EmailJS (you can also do this in your main.jsx/App.jsx)
      emailjs.init(import.meta.env.VITE_PUBLIC_KEY);

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Your Name", // Replace with your name
      };

      const result = await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams
      );

      console.log("Email sent successfully:", result);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(null), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      
      // Check if it's a service disruption
      if (error.message?.includes('service') || error.status === 0 || error.text?.includes('Failed')) {
        setStatus("service_down");
      } else {
        setStatus("error");
      }
      setTimeout(() => setStatus(null), 7000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { Icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
    { Icon: Linkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
    { Icon: Facebook, href: "https://facebook.com/yourusername", label: "Facebook" },
    { Icon: Instagram, href: "https://instagram.com/yourusername", label: "Instagram" }
  ];

  const formFields = [
    { Icon: User, name: "name", placeholder: "Your name", type: "text" },
    { Icon: Mail, name: "email", placeholder: "Your email", type: "email" },
    { Icon: MessageSquare, name: "message", placeholder: "Your message", type: "textarea" }
  ];

  const buttonClass = "px-6 py-3 bg-[var(--primary)] hover:bg-[rgba(255,255,255,0.2)] border rounded-lg text-[var(--secondary)] font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2 justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100";
  const buttonStyle = { borderColor: "var(--button-border)" };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="w-full max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="backdrop-blur-md rounded-2xl border bg-[rgba(255,255,255,0.02)] border-[rgba(255,255,255,0.2)] p-6 md:p-10 shadow-2xl light-border"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--secondary)] mb-4">Let's Connect</h2>
            <p className="text-[var(--tertiary)] text-lg max-w-2xl mx-auto">
              Have a project, idea, or just want to say hi? Fill out the form below and I'll get back to you soon.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1 space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {formFields.map((field, index) => {
                  const { Icon, name, placeholder, type } = field;
                  return (
                    <motion.div
                      key={name}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="relative"
                    >
                      <Icon size={18} className="absolute left-4 top-4 text-[var(--tertiary)]" />
                      {type === "textarea" ? (
                        <motion.textarea
                          name={name}
                          rows={5}
                          required
                          placeholder={placeholder}
                          value={formData[name]}
                          onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
                          whileFocus={{ scale: 1.02 }}
                          className="w-full pl-12 pr-4 py-4 rounded-xl bg-[rgba(255,255,255,0.05)] border-2 border-[var(--tertiary)] text-[var(--secondary)] placeholder-[var(--tertiary)] focus:outline-none focus:border-[var(--highlight)] focus:bg-[rgba(255,255,255,0.08)] transition-all duration-300 resize-none"
                        />
                      ) : (
                        <motion.input
                          type={type}
                          name={name}
                          required
                          placeholder={placeholder}
                          value={formData[name]}
                          onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
                          whileFocus={{ scale: 1.02 }}
                          className="w-full pl-12 pr-4 py-4 rounded-xl bg-[rgba(255,255,255,0.05)] border-2 border-[var(--tertiary)] text-[var(--secondary)] placeholder-[var(--tertiary)] focus:outline-none focus:border-[var(--highlight)] focus:bg-[rgba(255,255,255,0.08)] transition-all duration-300"
                        />
                      )}
                    </motion.div>
                  );
                })}
                
                <div className="flex justify-center">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ scale: isSubmitting ? 1 : 1.05, y: isSubmitting ? 0 : -2 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.97 }}
                    className={buttonClass}
                    style={buttonStyle}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </div>

                {status && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`p-4 rounded-lg border ${
                      status === "success" 
                        ? "bg-green-500/10 border-green-500" 
                        : status === "service_down"
                        ? "bg-yellow-500/10 border-yellow-500"
                        : "bg-red-500/10 border-red-500"
                    }`}
                  >
                    <p className={`font-medium flex items-center gap-2 ${
                      status === "success" ? "text-green-400" : 
                      status === "service_down" ? "text-yellow-400" : "text-red-400"
                    }`}>
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-white text-xs ${
                        status === "success" ? "bg-green-400" : 
                        status === "service_down" ? "bg-yellow-400" : "bg-red-400"
                      }`}>
                        {status === "success" ? "✓" : status === "service_down" ? "⚠" : "✗"}
                      </span>
                      {status === "success" 
                        ? "Message sent successfully! I'll get back to you soon." 
                        : status === "service_down"
                        ? "Email service is temporarily down. Please try again later or contact me directly on social media."
                        : "Failed to send message. Please try again or contact me directly."
                      }
                    </p>
                  </motion.div>
                )}
              </form>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex-1 flex flex-col justify-start pt-8 lg:pt-0 border-t lg:border-t-0 lg:border-l border-[var(--button-border)] lg:pl-8 space-y-8"
            >
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-[var(--secondary)] mb-3">Connect with me</h3>
                <p className="text-[var(--tertiary)] mb-6">
                  Let's stay connected! Follow me on social media for updates.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => {
                  const { Icon, href, label } = link;
                  return (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex flex-col items-center gap-3 p-6 rounded-xl bg-[rgba(255,255,255,0.05)] border border-[var(--button-border)] text-[var(--secondary)] hover:text-[var(--tertiary)] transition-all duration-300 group"
                      aria-label={label}
                    >
                      <Icon size={28} className="transition-transform duration-300 group-hover:scale-110" />
                      <span className="text-sm font-medium">{label}</span>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};