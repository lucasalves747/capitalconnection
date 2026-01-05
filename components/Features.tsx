import React, { useState } from 'react';
import {
  Coffee,
  Users,
  Brain,
  TrendingUp,
  Search,
  Key,
  Shield
} from 'lucide-react';
import bgExperiencia from '@/assets/fundo_1.png';



const ExperienceItem = ({
  icon: Icon,
  title,
  description
}: {
  icon: any;
  title: string;
  description: string;
}) => (
  <div className="flex gap-4 p-4 sm:p-5 bg-white/95 backdrop-blur-sm rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition">
    <div className="flex-shrink-0">
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
      </div>
    </div>
    <div>
      <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-1">
        {title}
      </h3>
      <p className="text-slate-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const PillarCard = ({
  icon: Icon,
  title,
  description,
  subText
}: {
  icon: any;
  title: string;
  description: string;
  subText: string;
}) => (
  <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100 hover:bg-white hover:border-blue-100 hover:shadow-lg transition">
    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 mb-4 sm:mb-6" />
    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
      {title}
    </h3>
    <p className="text-slate-700 font-medium mb-1">
      {description}
    </p>
    <p className="text-slate-500 text-sm">{subText}</p>
  </div>
);

export const Features: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

    const items = [
    {
      icon: Coffee,
      title: 'Coquetel & Conexão',
      description:
        'Coquetel e recepção, criando conexões iniciais em um ambiente leve e profissional.',
    },
    {
      icon: Users,
      title: 'Networking Qualificado',
      description:
        'Acesso a empresários de alto nível que buscam crescimento real.',
    },
    {
      icon: Brain,
      title: 'Conteúdo Estratégico',
      description:
        'Conteúdos objetivos sobre mentalidade, posicionamento e gestão.',
    },
    {
      icon: TrendingUp,
      title: 'Códigos Empresariais',
      description:
        'Orientações aplicáveis à realidade do empresário moderno.',
    },
    {
      icon: Search,
      title: 'Clareza de Fase',
      description:
        'Entendimento sobre sua fase atual e próximos passos nos negócios.',
    },
    {
      icon: Shield,
      title: 'Ambiente Seguro',
      description:
        'Um espaço onde decisões e oportunidades reais acontecem.',
    },
  ];

  // 📱 Mobile: 3 itens | Desktop: todos
  const visibleItems =
    showAll ? items : items.slice(0, 3);

  return (
    <>
       <section
      id="experiencia"
      className="relative py-6 sm:py-20"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat sm:bg-fixed"
        style={{ backgroundImage: `url(${bgExperiencia})` }}
      />
      <div className="absolute inset-0 bg-slate-900/50 sm:bg-slate-900/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
            A Experiência
          </h2>
          <p className="text-slate-200 max-w-2xl mx-auto text-sm sm:text-base">
            O Capital Connection foi desenhado para ser direto, elegante e estratégico.
            Tudo acontece de forma fluida, sem excessos e sem distrações.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((item, index) => (
            <ExperienceItem
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        {/* Mobile Button */}
        <div className="mt-8 text-center sm:hidden">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center justify-center px-6 py-3 rounded-full
              bg-white text-slate-900 font-medium
              hover:bg-slate-100 transition"
          >
            {showAll ? 'Ver menos' : 'Ver tudo'}
          </button>
        </div>
      </div>
    </section>

      {/* PILLARS */}
      <section id="pilares" className="py-6 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
              Os Pilares do Capital Connection
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A base sólida para o seu próximo nível.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            <PillarCard icon={Brain} title="Mentalidade do Empresário" description="Empresas fortes são construídas por empresários fortes." subText="Aqui, você amplia sua consciência, postura e visão estratégica." />
            <PillarCard icon={Users} title="Conexão de Alto Nível" description="Networking com empresários que jogam em outro nível." subText="Conexões que fazem sentido hoje e no futuro." />
            <PillarCard icon={TrendingUp} title="Códigos de Negócio" description="Orientações práticas sobre gestão, decisão e posicionamento." subText="Trabalhar mais não é estratégia. Pensar melhor é." />
            <PillarCard icon={Key} title="Ambiente e Acesso" description="Um ecossistema empresarial conectado a uma plataforma global." subText="Empresários que atuam em diferentes níveis de mercado." />
          </div>
        </div>
      </section>
    </>
  );
};
