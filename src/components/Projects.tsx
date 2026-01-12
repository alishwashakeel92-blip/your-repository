import { Folder } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      name: 'Gmail Smart Reply Bot',
      tech: 'n8n, OpenAI, Gmail API',
      description: 'Automated email response system using AI'
    },
    {
      name: 'Hail Damage Appointment System',
      tech: 'n8n, WhatsApp API, Google Sheets',
      description: 'Appointment booking automation via WhatsApp'
    },
    {
      name: 'Sous Chef Booking Automation',
      tech: 'Make.com, Shopify, WhatsApp, Notion',
      description: 'E-commerce booking system with automated notifications'
    },
    {
      name: 'Client Intake & Email Campaign Flow',
      tech: 'Jotform, OpenAI, Zoho CRM, Zoho Campaigns',
      description: 'Automated client onboarding and email marketing'
    },
    {
      name: 'AI Chatbot Integration',
      tech: 'OpenAI API, Webchat, Google Sheets',
      description: 'Customer support chatbot with data logging'
    },
    {
      name: 'Lead Generation System',
      tech: 'n8n, OpenAI, Twilio, Hubspot',
      description: 'Automated lead capture and CRM integration'
    },
    {
      name: 'Wise Invoices',
      tech: 'n8n',
      description: 'Invoice automation and management system'
    },
    {
      name: 'Social Listener & DM Responder',
      tech: 'n8n, Instagram, Facebook, Slack, Meta Accounts',
      description: 'Social media monitoring and automated responses'
    },
    {
      name: 'Flashcard Quiz App',
      tech: 'React, Firebase',
      description: 'Interactive learning application'
    },
    {
      name: 'Kisan Connect',
      tech: 'React Native, Firebase',
      description: 'Mobile app connecting farmers with resources'
    },
    {
      name: 'Quote Generator',
      tech: 'JavaScript, HTML/CSS',
      description: 'Random quote generation web application'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="flex items-start gap-3 mb-3">
                <Folder className="text-blue-600 flex-shrink-0" size={24} />
                <h3 className="text-lg font-bold text-slate-900">{project.name}</h3>
              </div>
              <p className="text-sm text-blue-600 mb-2 font-semibold">{project.tech}</p>
              <p className="text-slate-700 text-sm">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
