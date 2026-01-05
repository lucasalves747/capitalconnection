import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-10 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Sobre o Capital Connection
          </h2>

          <div className="w-16 sm:w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6 sm:mb-8" />

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-5">
            O Capital Connection é uma experiência empresarial que reúne empresários,
            empreendedores e profissionais estratégicos em um ambiente cuidadosamente
            selecionado para gerar{' '}
            <span className="text-blue-600 font-semibold">
              conexões de alto nível
            </span>
            , clareza empresarial e direcionamento prático.
          </p>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Aqui, o foco não é volume de pessoas.
            <br className="hidden sm:block" />
            <strong className="block mt-1 text-slate-900">
              É nível de conversa, visão e acesso.
            </strong>
          </p>

          <div className="mt-8 sm:mt-10 inline-block p-5 sm:p-6 bg-slate-200 rounded-2xl border border-slate-100">
            <p className="text-sm sm:text-base text-slate-900 italic leading-relaxed">
              "O evento nasce da evolução do Jantar de Negócios, mantendo o mesmo espírito
              de conexão e transformação, agora com mais foco, intensidade e objetividade."
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
