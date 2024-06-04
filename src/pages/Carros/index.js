import React from "react";
import Titulo from "../../components/Titulo";
import Quadro from "../../components/Quadro";

export default function Carros() {
  return (
    <main className="bg-neutral-900">
      <div className="container pt-1 flex flex-row justity-between items-stretch mx-auto">
        {/*lado esquerdo*/}
        <div className="flex flex-col justify-between break-after-column mx-auto text-center pt-1 bg-neutral-700 min-w-[550px] min-h-full rounded">
          <Titulo className="w-full mx-auto">Carros</Titulo>
          <Quadro className="my-1 mx-auto">
            <p>Marca: </p>
          </Quadro>
        </div>

        {/*lado direito*/}
        <div className="flex flex-col justify-between mx-auto text-center pt-1 min-w-[550px] bg-neutral-700 min-h-full rounded">
          <Titulo className="w-full mx-auto">Info</Titulo>
        </div>
      </div>
    </main>
  );
}
