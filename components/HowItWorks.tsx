import { Plug, Brain,MessageCircle, LayoutDashboard, Bell } from 'lucide-react';
import { DraggableCardBody, DraggableCardContainer } from './ui/draggable-card';

const steps = [
  {
    number: '01',
    icon: Plug,
    title: 'Connect Your Data Sources',
    description:
      'Integrate data connectors — from databases and CRMs to APIs and spreadsheets — in minutes. No engineering needed.',
    highlight: 'Multiple data sources',
    className: "absolute top-10 left-1/2 -translate-x-[-40%] rotate-[-4deg] z-40",
  },
  {
    number: '02',
    icon: MessageCircle,
    title: 'Ask Anything',
    description:
      'Use natural language to query your data. Just ask questions like you would to a colleague.',
    highlight: 'Natural language queries',
    className:"absolute top-10 left-1/2 -translate-x-[20%] rotate-[-3deg] z-30",
  },
  {
    number: '03',
    icon: LayoutDashboard,
    title: 'Get Instant Insights & Pivots',
    description:
      'Receive charts, pivots, and actionable summaries immediately. No waiting for reports..',
    highlight: 'Instant insights & pivots',
    className: "absolute top-10 left-1/2 -translate-x-[80%] rotate-[-2deg] z-20"
  },
  {
    number: '04',
    icon: Bell,
    title: 'Build Live Dashboards',
    description:
      'Create stunning dashboards with live updates. Share insights with your team or embed them in any product.',
    highlight: 'Live dashboards',
     className: "absolute top-10 left-1/2 -translate-x-[140%] rotate-[-1deg] z-10"
  },
];

export default function HowItWorks() {
  return (
  
    <section id="solutions" className="bg-gray-50 ">
      <div className="pt-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">How It Works</span>
          <h2 className="text-5xl font-bold text-gray-900 mt-3 mb-4">
            From raw data to actionable intelligence
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Four steps to transform your organization into a data-driven powerhouse.
          </p>
        </div>
        <DraggableCardContainer className="relative flex  w-full items-center justify-center overflow-clip">
  
  <div className="relative w-full h-[600px]">
    {steps.map((step, index) => (
      <DraggableCardBody key={step.number} className={step.className}>
        
        <div className="bg-white border border-gray-200 rounded-2xl p-6 w-[300px] hover:border-blue-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-600/10">
          
          <div className="flex items-center justify-between mb-5"><span className="text-6xl font-black text-blue-200 font-mono">
              {step.number}
            </span>
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center border border-blue-300">
              <step.icon className="w-5 h-5 text-blue-600" />
            </div>
            
          </div>

          <h3 className="text-gray-900 font-bold text-lg mb-3">
            {step.title}
          </h3>

          <p className="text-gray-800 text-md leading-relaxed mb-4">
            {step.description}
          </p>

          <span className="inline-block text-xs font-semibold text-cyan-600 bg-cyan-100 border border-cyan-300 px-3 py-1 rounded-full">
            {step.highlight}
          </span>

        </div>
      </DraggableCardBody>
    ))}
  </div>

</DraggableCardContainer>
    </div>
    </section>
  );
}
