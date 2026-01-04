import React, { useState } from 'react';
import { Mail, ArrowUpRight, Send, Loader2 } from 'lucide-react';

const ContactView = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' or 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // REPLACE THIS URL WITH YOUR GOOGLE SHEET SCRIPT URL (See instructions below)
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby0wOFbr9taIFdVgihYZ2J4C0CQlefhvxetH3aX6POpxdOM38Qp3XrZqF-YlSdxem7akQ/exec"; 

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Important for Google Sheets
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      setStatus('success');
      e.target.reset();
    } catch (error) {
      setStatus('error');
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(null), 5000); // Reset status after 5s
    }
  };

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16 py-20">
      
      {/* LEFT: Contact Info */}
      <div className="flex flex-col justify-center space-y-8">
        <div>
          <p className="text-sm font-sans text-emerald-400 tracking-[0.2em] uppercase mb-4">
            Contact
          </p>
          <h2 className="text-5xl font-serif text-white leading-tight">
            Let's start a <br /> <span className="italic text-gray-500">Conversation.</span>
          </h2>
        </div>
        
        <p className="text-gray-400 max-w-sm leading-relaxed">
          Interested in AI architecture or predictive modeling? Fill out the form, and your details will be sent directly to my database.
        </p>

        <div className="flex gap-6 pt-8">
          <a href="#" className="flex items-center gap-2 text-white hover:text-emerald-400 transition-colors border-b border-white/20 pb-1">
            LinkedIn <ArrowUpRight size={14} />
          </a>
          <a href="#" className="flex items-center gap-2 text-white hover:text-emerald-400 transition-colors border-b border-white/20 pb-1">
            GitHub <ArrowUpRight size={14} />
          </a>
          <a href="mailto:your@email.com" className="flex items-center gap-2 text-white hover:text-emerald-400 transition-colors border-b border-white/20 pb-1">
            Email <Mail size={14} />
          </a>
        </div>
      </div>

      {/* RIGHT: The Excel Form */}
      <div className="bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-sm">
        <form onSubmit={handleSubmit} className="space-y-8">
          
          <div className="space-y-2">
            <label className="text-xs font-mono text-gray-400 uppercase tracking-widest">Name</label>
            <input 
              name="name" 
              required 
              type="text" 
              placeholder="John Doe"
              className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors placeholder-gray-600"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-mono text-gray-400 uppercase tracking-widest">Email</label>
            <input 
              name="email" 
              required 
              type="email" 
              placeholder="john@example.com"
              className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors placeholder-gray-600"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-mono text-gray-400 uppercase tracking-widest">Message</label>
            <textarea 
              name="message" 
              required 
              rows="4" 
              placeholder="Infomation fills here!"
              className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors placeholder-gray-600 resize-none"
            ></textarea>
          </div>

          <button 
            disabled={loading}
            className={`w-full py-4 rounded-full flex items-center justify-center gap-2 transition-all duration-300 ${status === 'success' ? 'bg-emerald-500 text-black' : 'bg-white text-black hover:bg-gray-200'}`}
          >
            {loading ? <Loader2 className="animate-spin" /> : status === 'success' ? 'Sent Successfully!' : 'Send Message'}
            {!loading && status !== 'success' && <Send size={16} />}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactView;