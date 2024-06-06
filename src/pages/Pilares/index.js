import React from "react";
import Quadro from "../../components/Quadro";
import Titulo from "../../components/Titulo";

export default function Pilares() {
  return (
    <main className="bg-neutral-900">
      <div className="container pt-1 flex flex-row justify-center mx-auto">
        <div className="flex flex-col  justify-between break-after-column mx-auto text-center pt-1 bg-neutral-700 min-w-[800px] min-h-full rounded">
          <Titulo className="mx-auto min-w-full">Pilares</Titulo>
          <Quadro className="my-1 mx-auto">
            <p className="text-2xl">
              <strong>Qualidade:</strong>{" "}
            </p>
            <p className="text-xl">
              Comprometimento com a excelência em todos os serviços prestados,
              garantindo a satisfação e a segurança dos clientes.
            </p>
          </Quadro>

          <Quadro className="my-1 mx-auto">
            <p className="text-2xl">
              <strong>Confiança:</strong>{" "}
            </p>
            <p className="text-xl">
              Construção de relações de confiança com os clientes, baseadas na
              transparência, honestidade e integridade.
            </p>
          </Quadro>

          <Quadro className="my-1 mx-auto">
            <p className="text-2xl">
              <strong>Atendimento Personalizado:</strong>
            </p>
            <p className="text-xl">
              Oferecimento de um atendimento atencioso e personalizado, buscando
              sempre entender e atender às necessidades específicas de cada
              cliente.
            </p>
          </Quadro>

          <Quadro className="my-1 mx-auto">
            <p className="text-2xl">
              <strong>Inovação:</strong>{" "}
            </p>
            <p className="text-xl">
              Busca constante por melhorias e inovações nos serviços oferecidos,
              visando sempre aprimorar a experiência do cliente.
            </p>
          </Quadro>

          <Quadro className="my-1 mx-auto">
            <p className="text-2xl">
              <strong>Sustentabilidade:</strong>{" "}
            </p>
            <p className="text-xl">
              {" "}
              Compromisso com práticas sustentáveis, visando a preservação do
              meio ambiente e o bem-estar da comunidade.
            </p>
          </Quadro>

          <Quadro className="my-1 mx-auto">
            <p className="text-2xl">
              <strong>Valorização dos Colaboradores:</strong>{" "}
            </p>
            <p className="text-xl">
              Reconhecimento e valorização dos colaboradores, incentivando o
              desenvolvimento profissional e pessoa
            </p>
          </Quadro>
        </div>
      </div>
    </main>
  );
}
