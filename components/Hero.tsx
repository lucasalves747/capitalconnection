import React from 'react';
import { Button } from './Button';
import { Coffee, Clock, CheckCircle , MapPin,Calendar} from 'lucide-react';
const CHECKOUT_URLS: Record<string, string> = {
  '1': 'https://plataformamiami.com/capitalconnection-checkout',
  '2': 'https://plataformamiami.com/capitalconnection-checkout-20',
  
};


export const Hero: React.FC = () => {
  
  const params = new URLSearchParams(window.location.search);

  const local = params.get('local') || 'Ambientes selecionados';
  const data = params.get('data') || 'Vagas mensais limitadas';

  const checkoutParam = params.get('checkout');

  // 🎯 Checkout final (com fallback)
  const checkoutUrl =
    (checkoutParam && CHECKOUT_URLS[checkoutParam]) ||
    'https://plataformamiami.com/capitalconnection-checkout';

  return (
    <>
    <section className="relative pt-16 pb-10 sm:pt-20 sm:pb-14 lg:pt-36 lg:pb-20 overflow-hidden bg-slate-50">
      
      {/* Background Gradients (menores no mobile) */}
      <div className="absolute top-0 right-0 -translate-y-24 translate-x-1/3 w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] bg-blue-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-24 -translate-x-1/3 w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] bg-indigo-400/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* CONTENT */}
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            
            <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-100 text-blue-700 font-semibold text-[11px] tracking-wide uppercase">
              Evento Exclusivo
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-5 leading-tight">
              Destrave Seu <br />
              <span className="text-blue-600">Próximo Nível</span> Empresarial
            </h1>

            <p className="text-base sm:text-lg text-slate-700 mb-6 leading-relaxed">
              Conecte-se com empresários de alto nível, amplie sua visão estratégica e participe de um ambiente onde conexões e oportunidades reais acontecem.
            </p>

            {/* FEATURES – melhor quebra no mobile */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8 text-sm font-medium text-slate-700">
              <div className="flex items-center bg-white px-3 py-2 rounded-full shadow-sm border">
                <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                Ambiente Selecionado
              </div>
              <div className="flex items-center bg-white px-3 py-2 rounded-full shadow-sm border">
                <Coffee className="w-4 h-4 text-blue-600 mr-2" />
                Coquetel
              </div>
              <div className="flex items-center bg-white px-3 py-2 rounded-full shadow-sm border">
                <Clock className="w-4 h-4 text-blue-600 mr-2" />
                Imersão 3h
              </div>
            </div>

            {/* CTA */}
            <div className="flex justify-center lg:justify-start">
              <Button
                withIcon
                className="w-full sm:w-auto"
                onClick={() => (window.location.href = '#contato')}
              >
                Quero Acelerar Meu Negócio
              </Button>
            </div>
          </div>

          {/* VISUAL – apenas desktop */}
          <div className="relative hidden lg:block h-[480px] w-full">
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl animate-float">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.8" />
                </linearGradient>
              </defs>

              <path d="M100 20 L180 60 L180 140 L100 180 L20 140 L20 60 Z" fill="none" stroke="url(#grad1)" strokeWidth="0.6" opacity="0.3" />

              <g transform="translate(100, 100) rotate(15)">
                <circle cx="0" cy="0" r="40" fill="url(#grad1)" opacity="0.2" />
                <rect x="-25" y="-25" width="50" height="50" rx="10" fill="none" stroke="url(#grad1)" strokeWidth="2" />
              </g>
            </svg>
          </div>

        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>

    <section
  id="horario"
  className="relative py-16 sm:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 overflow-hidden"
>
  {/* Glow decorativo */}
  <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl" />
  <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-indigo-400/20 rounded-full blur-3xl" />

  <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <div className="text-center max-w-2xl mx-auto mb-14">
      <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/10 text-white text-xs tracking-widest uppercase">
        Detalhes do Evento
      </span>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
        Informações
      </h2>

      <p className="text-slate-200 text-sm sm:text-base">
        Uma experiência estratégica desenhada para gerar clareza,
        conexões e decisões reais.
      </p>
    </div>

    {/* Conteúdo */}
    <div className="grid gap-10 lg:grid-cols-2 items-center">
      {/* Cards */}
      <div className="grid gap-5">
        {[
          { icon: Clock, title: 'Duração', desc: '3h de imersão estratégica' },
          { icon: Coffee, title: 'Início', desc: 'Coquetel & networking qualificado' },
          { icon: MapPin, title: 'Local', desc: local },
          { icon: Calendar, title: 'Data', desc: data },
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-4 p-5 rounded-2xl bg-white/90 backdrop-blur shadow-lg"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-md">
              <item.icon className="w-5 h-5" />
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-0.5">
                {item.title}
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bloco de impacto */}
      <div className="text-center lg:text-left space-y-6">
        <h3 className="text-2xl sm:text-3xl font-bold text-white">
          Um ambiente feito para
          <span className="block text-indigo-200">
            quem decide crescer de verdade
          </span>
        </h3>

        <p className="text-slate-200 text-sm sm:text-base max-w-md mx-auto lg:mx-0">
          Aqui você não vem apenas aprender — você vem se conectar com
          pessoas que jogam o jogo em alto nível.
        </p>

        <button
          onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
          className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-blue-700 font-semibold shadow-xl hover:scale-[1.02] transition"
        >
          Garantir Minha Presença
        </button>
      </div>
    </div>
  </div>
</section>

      </>
  );
};
