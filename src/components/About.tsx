import { GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">Profile</h3>
            <p className="text-slate-700 leading-relaxed">
              As an innovative and results-driven professional with 3 years of experience in AI-driven
              chatbot development, app and web development, and prompt engineering, I specialize in
              creating intelligent, user-centric solutions that enhance business operations and
              customer interactions. Leveraging expertise in tools like Make.com, Zapier, and n8n, I deliver
              scalable, automated workflows and dynamic applications tailored to client needs.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900 flex items-center gap-2">
              <GraduationCap className="text-blue-600" />
              Education
            </h3>
            <div className="bg-slate-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-slate-900 mb-2">
                Bachelor of Software Engineering
              </h4>
              <p className="text-slate-700 mb-1">University of Agriculture, Faisalabad</p>
              <p className="text-slate-600">2023 - 2027 (Expected)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
