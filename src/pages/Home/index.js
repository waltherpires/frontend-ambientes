import React from "react";

import ImagemFerrari from "../../assets/images/ferrari.jpg";

export default function Home() {
  return (
    <main className="bg-gray-900 text-white p-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          {/* Coluna Esquerda */}
          <div className="w-full md:w-1/2 bg-gray-800 p-4">
            <h2 className="text-2xl font-bold">
              Bem-vindo à WBM Locadora - sua escolha inteligente para aluguel de
              veículos!
            </h2>
            <p className="mt-3">
              Na WBM Locadora, estamos comprometidos em proporcionar a você a
              melhor experiência de aluguel de veículos. Seja para viagens de
              negócios, passeios em família ou aventuras individuais, estamos
              aqui para atender a todas as suas necessidades de mobilidade.
            </p>
            <h3 className="text-xl mt-4">Por que escolher a WBM Locadora?</h3>
            <ul className="list-disc list-inside mt-2">
              <li className="mt-2">
                <strong>Variedade de Veículos:</strong> Oferecemos uma ampla
                gama de veículos, desde carros econômicos até SUVs espaçosos e
                vans para grupos maiores. Escolha o veículo que se adapte ao seu
                estilo e às suas necessidades de viagem.
              </li>
              <li className="mt-2">
                <strong>Qualidade Garantida:</strong> Todos os nossos veículos
                são regularmente mantidos e inspecionados para garantir a sua
                segurança e conforto durante toda a viagem. Priorizamos a
                qualidade em tudo o que fazemos.
              </li>
              <li className="mt-1">
                <strong>Facilidade de Reserva:</strong> Com nosso sistema de
                reserva online simplificado, você pode reservar seu veículo em
                poucos cliques, tornando o processo rápido e conveniente. Também
                oferecemos opções de pagamento flexíveis para atender às suas
                preferências.
              </li>
              <li className="mt-1">
                <strong>Atendimento ao Cliente de Excelência:</strong> Nossa
                equipe dedicada está sempre pronta para ajudá-lo com qualquer
                dúvida ou solicitação. Nosso objetivo é tornar sua experiência
                conosco impecável, desde o momento da reserva até a devolução do
                veículo.
              </li>
            </ul>
          </div>
          {/* Coluna Direita */}
          <div className="w-full md:w-1/2 pt-0 pl-2">
            <img src={ImagemFerrari} alt="Ferrari" className="mx-auto" />
          </div>
        </div>
      </div>
    </main>
  );
}
