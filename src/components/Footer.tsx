import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Alishwa Shakeel</h3>
            <p className="text-slate-400 mb-4">
              Software Engineer specializing in AI automation and web development
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <a
                href="mailto:alishwashakeel7@gmail.com"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <Mail size={18} />
                <span>alishwashakeel7@gmail.com</span>
              </a>
              <a
                href="tel:+923187542870"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <Phone size={18} />
                <span>+923187542870</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} Alishwa Shakeel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
