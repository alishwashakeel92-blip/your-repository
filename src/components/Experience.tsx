import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'AI Specialist',
      company: 'Bitszol',
      period: 'Sep 2025 – Present',
      description:
        'Build automation workflows using n8n and OpenAI API to streamline CRM processes, improve lead management, and integrate AI chatbots that enhance efficiency and client communication.',
      current: true
    },
    {
      title: 'AI Specialist / Freelancer Automation Consultant',
      company: 'Freelance',
      period: 'Jan 2023 – Present',
      description:
        'Collaborating with a senior freelancer to deliver automation solutions for international clients. Designed and deployed automation workflows using n8n, Make.com, and Zapier for CRM integrations, lead generation, and business operations. Built AI-powered email assistants, client intake flows, and invoice automation systems, reducing manual workload by 60%+.',
      current: true
    },
    {
      title: 'Web Development Intern',
      company: 'Digital Empowerment Network',
      period: 'Jul 2025 – Sep 2025',
      description:
        'Assisted in building responsive web applications using React, Firebase, and Next.js. Worked on front-end features, bug fixes, and deployment of small client-facing modules. Improved UI/UX consistency and learned project collaboration in a professional environment.',
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-wrap items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <Briefcase className="text-blue-600" size={24} />
                    {exp.title}
                  </h3>
                  <p className="text-lg text-slate-700 font-semibold">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Calendar size={18} />
                  <span>{exp.period}</span>
                  {exp.current && (
                    <span className="ml-2 px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                      Current
                    </span>
                  )}
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
