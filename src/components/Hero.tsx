import { Mail, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
          ALISHWA SHAKEEL
        </h1>
        <p className="text-2xl md:text-3xl text-slate-300 mb-8">
          SOFTWARE ENGINEER
        </p>
        <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Innovative and results-driven professional with 3 years of experience in AI-driven
          chatbot development, app and web development, and prompt engineering
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:alishwashakeel7@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
          >
            <Mail size={20} />
            <span>alishwashakeel7@gmail.com</span>
          </a>
          <a
            href="tel:+923187542870"
            className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
          >
            <Phone size={20} />
            <span>+923187542870</span>
          </a>
        </div>
        <div className="mt-12">
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
