import React from "react";
import Quadro from "../../components/Quadro";
import Titulo from "../../components/Titulo";

export default function QuemSomos() {
  return (
    <main className="bg-neutral-900">
      <div className="container pt-1 flex flex-row justify-between items-stretch mx-auto">
        {/* Seção de Vantagens */}
        <div className="flex flex-col justify-between break-after-column mx-auto text-center pt-1 bg-neutral-700 min-w-[550px] min-h-full rounded">
          <Titulo className="w-full mx-auto">Vantagens</Titulo>

          <Quadro className="my-1 mx-auto">
            <p>
              Frota Variada e Atualizada: A WBM Locadora possui uma ampla
              variedade de veículos novos e bem cuidados, garantindo que os
              clientes encontrem o carro ideal para suas necessidades.
            </p>
          </Quadro>

          <Quadro className="my-1 mx-auto">
            <p>
              Atendimento Personalizado: A empresa se destaca pelo atendimento
              atencioso e personalizado, buscando sempre superar as expectativas
              dos clientes e garantir uma experiência positiva.
            </p>
          </Quadro>

          <Quadro className="my-1 mx-auto">
            <p>
              Transparência e Sem Taxas Ocultas: A WBM Locadora oferece
              condições claras e justas, sem taxas surpresa, proporcionando aos
              clientes tranquilidade na hora de alugar um veículo.
            </p>
          </Quadro>

          <Quadro className="my-1 mx-auto">
            <p>
              Conveniência na Localização: Com diversas opções de locais para
              retirada e devolução dos veículos, incluindo aeroportos e pontos
              estratégicos nas cidades, a WBM Locadora facilita a vida dos
              clientes, tornando o processo de locação rápido e eficiente.
            </p>
          </Quadro>

          <Quadro className="my-1 mx-auto">
            <p>
              Tecnologia e Facilidade de Reserva: A empresa investe em
              tecnologia para oferecer um serviço mais ágil e prático,
              permitindo reservas online e facilitando a comunicação com os
              clientes, garantindo uma experiência de locação mais moderna e
              eficiente
            </p>
          </Quadro>
        </div>

        {/* Seção de Quem Somos */}
        <div className="flex flex-col justify-between mx-auto text-center pt-1 min-w-[550px] bg-neutral-700 min-h-full rounded">
          <Titulo className="w-full mx-auto">Quem Somos</Titulo>
          <Quadro className="my-1 mx-auto">
            <p>
              A WBM Locadora se destaca como a locadora número um do estado,
              oferecendo serviços de locação de veículos com excelência e
              qualidade incomparáveis. Nossa ampla frota de veículos novos e bem
              cuidados garante a experiência ideal para cada cliente.
            </p>
          </Quadro>
          <Quadro className="my-1 mx-auto">
            <p>
              Nossa empresa se destaca pelo atendimento personalizado, buscando
              sempre entender e atender às necessidades específicas de cada
              cliente. Contamos com uma equipe dedicada e altamente capacitada,
              pronta para oferecer o melhor suporte e assistência em todas as
              etapas da locação.
            </p>
          </Quadro>
          <Quadro className="my-1 mx-auto">
            <p>
              Na WBM Locadora, valorizamos a transparência e a honestidade.
              Nossas condições são claras e justas, sem taxas ocultas, para
              garantir a total satisfação e confiança de nossos clientes.
            </p>
          </Quadro>
          <Quadro className="my-1 mx-auto">
            <p>
              Com localizações estratégicas em todo o estado e um processo de
              reserva simples e eficiente, estamos sempre prontos para atender
              às suas demandas, proporcionando conveniência e praticidade em
              cada locação.
            </p>
          </Quadro>
          <Quadro className="my-1 mx-auto">
            <p>
              Na WBM Locadora, estamos comprometidos em ser a melhor escolha
              para quem busca uma locação de veículos de qualidade, tornando
              cada viagem uma experiência inesquecível.
            </p>
          </Quadro>
          <Quadro className="my-1 mx-auto">
            <p>
              Escolha a WBM Locadora e tenha a tranquilidade de dirigir com
              segurança e conforto!
            </p>
          </Quadro>
        </div>
      </div>
    </main>
  );
}
