import { Bot, Code, Database, Wrench } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Automation & AI',
      icon: <Bot className="w-8 h-8" />,
      skills: [
        'n8n, Make.com, Zapier',
        'OpenAI API, LangChain, AI Assistants',
        'Zoho CRM & Campaigns',
        'REST APIs, Webhooks',
        'Jotform, Fillout, Tally',
        'GHL, Hubspot'
      ]
    },
    {
      title: 'Web & App Development',
      icon: <Code className="w-8 h-8" />,
      skills: [
        'Python, JavaScript',
        'React, Next.js',
        'Flutter, React Native',
        'HTML, CSS, Tailwind CSS',
        'Firebase, Supabase'
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: <Wrench className="w-8 h-8" />,
      skills: [
        'Git, VS Code, Postman',
        'Airtable, Notion, Google Sheets',
        'WhatsApp Business API',
        'Twilio API'
      ]
    },
    {
      title: 'Other Skills',
      icon: <Database className="w-8 h-8" />,
      skills: [
        'Prompt Engineering',
        'API Integrations',
        'CRM Workflows',
        'Automation Design',
        'Digital Marketing'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4 text-blue-600">
                {category.icon}
                <h3 className="text-xl font-bold text-slate-900">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="text-slate-700 text-sm">
                    • {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
