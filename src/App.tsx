import React from 'react';
import { MessageCircle, Check, Scale, Users, FileText, Calendar, Heart, Shield, Briefcase, Clock, Calculator, UserCheck } from 'lucide-react';

function App() {
  const whatsappLink = 'https://wa.me/5534988141573';

  const services = [
    {
      title: 'Planejamento Previdenciário',
      icon: Calculator,
      description: 'Estratégias personalizadas para maximizar seus benefícios'
    },
    {
      title: 'Acerto de Vínculos no CNIS',
      icon: FileText,
      description: 'Correção e inclusão de períodos trabalhados'
    },
    {
      title: 'Aposentadorias (Regras atuais e de transição)',
      icon: Clock,
      description: 'Análise das melhores regras para sua situação'
    },
    {
      title: 'Aposentadoria por Idade (Urbana e Rural)',
      icon: Users,
      description: 'Benefício por idade para trabalhadores urbanos e rurais'
    },
    {
      title: 'Aposentadoria por Tempo de Contribuição',
      icon: Calendar,
      description: 'Aposentadoria baseada no tempo de contribuição'
    },
    {
      title: 'Aposentadoria Especial e por Invalidez',
      icon: Shield,
      description: 'Benefícios para atividades especiais e incapacidade'
    },
    {
      title: 'Pensão por Morte',
      icon: Heart,
      description: 'Assistência aos dependentes em momentos difíceis'
    },
    {
      title: 'Auxílio-Doença',
      icon: UserCheck,
      description: 'Benefício temporário por incapacidade para o trabalho'
    },
    {
      title: 'Benefícios por Incapacidade (Acidentário)',
      icon: Briefcase,
      description: 'Benefícios decorrentes de acidentes de trabalho'
    }
  ];

  return (
    <div className="min-h-screen bg-[#171e2e] font-['Montserrat',sans-serif]">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-12">
            <div className="mb-8">
              <img 
                src="https://postimg.cc/N5pgbsVH" 
                alt="Edvaldo Roberto Onofre - Advocacia" 
                className="w-64 h-auto mx-auto"
              />
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            ADVOGADO ESPECIALISTA EM<br />
            <span className="text-[#f6c77b]">DIREITO PREVIDENCIÁRIO</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Assessoria completa para garantir o seu melhor benefício.<br />
            Planeje seu futuro com segurança.
          </h2>
          
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Atendimento especializado e humanizado para todo o Brasil. 
            Resolva sua situação com o INSS de forma online e sem burocracia.
          </p>
          
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#f6c77b] hover:bg-[#e6b56a] text-[#171e2e] font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="w-6 h-6" />
            FALE COM UM ESPECIALISTA AGORA
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#171e2e] mb-16">
            COMO PODEMOS AJUDAR
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#f6c77b] to-[#e6b56a] rounded-full flex items-center justify-center mb-6 shadow-lg">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#171e2e] mb-4 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* CTA Button in Services Section */}
          <div className="text-center mt-16">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#f6c77b] hover:bg-[#e6b56a] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-6 h-6" />
              CONVERSE COMIGO NO WHATSAPP
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[#171e2e] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Column */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                SOBRE O ADVOGADO
              </h2>
              <div className="bg-gray-800 p-8 rounded-lg">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Sou graduado em Direito pela Universidade Presidente Antônio Carlos (UNIPAC) e pós-graduado em Advocacia Trabalhista e Previdenciária pela UNISC, com parceria da OAB e da Escola Nacional de Advocacia. Além disso, tenho formação técnica em Contabilidade e mais de 30 anos de experiência no setor empresarial, atuando como Gerente de Recursos Humanos e no Departamento de Pessoal, com foco em questões preventivas e contenciosas.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mt-4">
                  Desde 2015, me especializei na advocacia trabalhista e previdenciária, dedicando-me a oferecer soluções jurídicas estratégicas e personalizadas para meus clientes. Minha experiência empresarial me permite entender de forma prática as necessidades do cliente, sempre com um olhar atento às mudanças na legislação e ao contexto de cada caso.
                </p>
              </div>
            </div>
            
            {/* Image Column */}
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src="/image.png" 
                  alt="Dr. Edvaldo Roberto Onofre - Advogado Especialista em Direito Previdenciário" 
                  className="w-80 h-auto rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="text-center mt-16">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#f6c77b] hover:bg-[#e6b56a] text-[#171e2e] font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-6 h-6" />
              CONVERSE COMIGO NO WHATSAPP
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#171e2e] py-12 px-4 border-t border-gray-700">
        <div className="max-w-4xl mx-auto text-center text-white space-y-2">
          <p className="text-xl font-semibold">Edvaldo Roberto Onofre - Advocacia Previdenciária</p>
          <p className="text-lg text-gray-300">OAB/MG 163.258</p>
          <p className="text-gray-300">
            WhatsApp: (34) 98814-1573 | E-mail: roberto.edvaldo@hotmail.com
          </p>
          <p className="text-gray-400 text-sm pt-4">
            © 2025 | Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-[#f6c77b] hover:bg-[#e6b56a] rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 z-50"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <MessageCircle className="w-8 h-8 text-[#171e2e]" />
      </a>
    </div>
  );
}

export default App;