import React from 'react';
import {
  Check,
  Globe,
  MapPin,
  Calendar,
  Clock,
  User,
  Coffee
} from 'lucide-react';
import { Button } from './Button';
import bgQuem from '@/assets/fundo_2.png';

export const Logistics: React.FC = () => {
  return (
    <>
      {/* QUEM */}
      <section
        id="quem"
        className="relative py-6 sm:py-20 overflow-hidden"
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat lg:bg-fixed"
          style={{ backgroundImage: `url(${bgQuem})` }}
        />
        <div className="absolute inset-0 bg-slate-900/55 sm:bg-slate-900/45" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">

            {/* LEFT */}
            <div className="text-white">
              <span className="inline-block px-3 py-1 mb-4 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold uppercase">
                Perfil do Participante
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
                Para Quem é o <br /> Capital Connection?
              </h2>

              <div className="space-y-4">
                {[
                  'Já está no jogo dos negócios',
                  'Busca crescimento com estratégia',
                  'Valoriza ambientes de alto nível',
                  'Quer ampliar visão e decisões',
                  'Empresas crescem quando empresários crescem'
                ].map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                      <Check className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                    <p className="text-sm sm:text-base">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-5 bg-white rounded-xl border-l-4 border-blue-600 shadow">
                <p className="text-slate-800 italic font-medium text-base">
                  "Não é um evento para curiosos. É um ambiente para quem decide."
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-56 h-56 bg-blue-100 rounded-full blur-3xl opacity-60" />

              <div className="relative bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl border">
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Quem Conduz
                  </h3>
                  <div className="h-1 w-10 bg-blue-600 rounded-full mt-2" />
                </div>

                <div className="flex items-end gap-2 mb-6">
                  <span className="text-5xl font-extrabold text-blue-600">25+</span>
                  <span className="text-base text-slate-700 leading-tight">
                    anos de <br /> experiência
                  </span>
                </div>

                <p className="text-slate-700 text-sm sm:text-base mb-6">
                  Empresários com vivência real em consultoria, gestão e
                  desenvolvimento de negócios.
                </p>

                <div className="flex gap-4 items-center bg-slate-50 p-4 rounded-xl border mb-6">
                  <div className="p-3 bg-white rounded-lg shadow text-blue-600">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-sm">Ecossistema Global</p>
                    <p className="text-sm text-slate-600">
                      Conexões empresariais internacionais.
                    </p>
                  </div>
                </div>

                <p className="text-center font-medium text-slate-800">
                  "Aqui não se compartilha teoria. <br />
                  <span className="text-blue-600 font-bold">
                    Se compartilha vivência real."
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORMATO */}
      <section id="contato" className="py-6 sm:py-20 bg-blue-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
              Formato & Informações
            </h2>
            <p className="text-slate-200 max-w-xl mx-auto text-sm sm:text-base">
              Uma experiência desenhada para gerar decisões reais.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              {[
                { icon: Clock, title: 'Duração', desc: '3,5h de imersão' },
                { icon: Coffee, title: 'Início', desc: 'Coffee break & networking' },
                { icon: MapPin, title: 'Local', desc: 'Ambientes selecionados' },
                { icon: Calendar, title: 'Datas', desc: 'Vagas mensais limitadas' }
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 bg-white rounded-2xl"
                >
                  <div className="w-11 h-11 bg-blue-600 text-white rounded-xl flex items-center justify-center">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm text-slate-700">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl">
              <div className="flex items-center gap-2 text-blue-600 font-bold mb-4">
                <User className="w-5 h-5" />
                VAGAS LIMITADAS
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Pronto para o próximo nível?
              </h3>

              <p className="text-slate-700 mb-6 text-sm sm:text-base">
                Crescimento vem das decisões e das conexões certas.
              </p>
              <a href="https://plataformamiami.com/capitalconnection-checkout">
              <Button fullWidth withIcon className="py-1 md:py-4 text-lg">
                QUERO ACELERAR MEU NEGÓCIO
              </Button>
</a>
              <p className="text-xs text-center text-slate-700 mt-4">
                Networking • Conteúdo • Estratégia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-8 border-t">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xl font-bold">
            CAPITAL<span className="text-blue-600">CONNECTION</span>
          </p>
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Capital Connection
          </p>
        </div>
      </footer>
    </>
  );
};
