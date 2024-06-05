import React from "react";
import useSWR from "swr";

import Quadro from "../Quadro";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Swr = () => {
  const {
    data: veiculos,
    error,
    isValidating,
  } = useSWR("http://localhost:3001/veiculos", fetcher);

  if (error) return <div className="failed">Falha ao Carregar</div>;
  if (isValidating) return <div className="Loading">Loading...</div>;

  return (
    <>
      {veiculos.map((veiculo) => (
        <Quadro className="my-1 mx-auto min-w-[250px]" key={veiculo.id}>
          <p>Marca: {veiculo.Marca}</p>
          <p>Modelo: {veiculo.Modelo}</p>
          <p>Ano: {veiculo.Ano}</p>
          <p>Placa: {veiculo.Placa}</p>
          <p>Disponibilidade: {veiculo.Disponibilidade}</p>
        </Quadro>
      ))}
    </>
  );
};

export default Swr;
