import React, { useEffect, useState } from "react";

import Quadro from "../../components/Quadro";
import Titulo from "../../components/Titulo";
import axios from "../../services/axios";
import Formulario from "./style";
import Botao from "../../components/Botao";

export default function Carros() {
  const [carros, setCarros] = useState([]);
  const [novoCarro, setNovoCarro] = useState({
    Modelo: "",
    Marca: "",
    Ano: "",
    Placa: "",
    Disponibilidade: "",
  });
  const [modoEdicao, setModoEdicao] = useState(false);
  const [carroEditando, setCarroEditando] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get("/veiculos");
      setCarros(response.data);
    } catch (error) {
      console.error("Erro ao carregar veículos:", error);
    }
  };

  const sairEdicao = (e) => {
    e.preventDefault();

    setCarroEditando(null);
    setNovoCarro({
      Modelo: "",
      Marca: "",
      Ano: "",
      Placa: "",
      Disponibilidade: "",
    });
    setModoEdicao(false);
  };

  const editarCarro = (carro) => {
    setCarroEditando(carro);
    setModoEdicao(true);
    setNovoCarro(carro);
  };

  const confirmarEdicao = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`/veiculos/${carroEditando.ID}`, novoCarro);
      setModoEdicao(false);
      setNovoCarro({
        Modelo: "",
        Marca: "",
        Ano: "",
        Placa: "",
        Disponibilidade: "",
      });
      setCarroEditando(null);
    } catch (error) {
      console.error("Erro ao editar: ", error);
    }

    getData();
  };

  const handleChangeNovoCarro = (e) => {
    const { name, value } = e.target;
    setNovoCarro((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const deletarCarro = async (id) => {
    try {
      await axios.delete(`/veiculos/${id}`);
    } catch (error) {
      console.error("Erro ao deletar carro", error);
    }

    getData();
  };

  const handleSubmitNovoCarro = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/veiculos", novoCarro);
      console.log("Cheguei ate aqui");
      setNovoCarro({
        Modelo: "",
        Marca: "",
        Ano: "",
        Placa: "",
        Disponibilidade: "",
      });

      getData();
    } catch (error) {
      console.error("Erro ao adicionar novo carro", error);
    }
  };

  return (
    <main className="bg-neutral-900">
      <div className="container pt-1 flex flex-row justity-between items-stretch mx-auto">
        {/*lado esquerdo*/}
        <div className="flex flex-col justify-between break-after-column mx-auto text-center pt-1 bg-neutral-700 min-w-[550px] min-h-full rounded">
          <Titulo className="w-full mx-auto">Carros</Titulo>
          {carros.map((carro, index) => (
            <Quadro
              className="my-1 mx-auto min-w-[250px] "
              key={String(carro.ID)}
            >
              <p>Marca: {carro.Marca}</p>
              <p>Modelo: {carro.Modelo}</p>
              <p>Ano: {carro.Ano}</p>
              <p>Placa: {carro.Placa}</p>
              <p>
                Disponibilidade:{" "}
                {carro.Disponibilidade === 1
                  ? "Disponivel"
                  : carro.Disponibilidade}
              </p>
              <Botao
                className="bg-blue-400 hover:bg-blue-700 active:bg-blue-900"
                onClick={() => editarCarro(carro)}
              >
                Editar
              </Botao>
              <Botao
                onClick={() => deletarCarro(carro.ID)}
                className="bg-red-500 hover:bg-red-700 active:bg-red-800"
              >
                Remover
              </Botao>
            </Quadro>
          ))}
        </div>

        {/*lado direito*/}
        <div className="flex flex-col justify-start mx-auto text-center pt-1 min-w-[550px] bg-neutral-700 min-h-full rounded">
          <Titulo className="w-full mx-auto">
            {modoEdicao ? "Editar Carro" : "Adicionar Carro"}
          </Titulo>
          <Formulario
            onSubmit={modoEdicao ? confirmarEdicao : handleSubmitNovoCarro}
          >
            <Quadro className="my-1 mx-auto min-w-[250px]">
              <input
                type="text"
                name="Marca"
                value={novoCarro.Marca}
                onChange={handleChangeNovoCarro}
                placeholder="Marca"
              />
              <input
                type="text"
                name="Modelo"
                value={novoCarro.Modelo}
                onChange={handleChangeNovoCarro}
                placeholder="Modelo"
              />
              <input
                type="number"
                name="Ano"
                value={novoCarro.Ano}
                onChange={handleChangeNovoCarro}
                placeholder="Ano"
              />
              <input
                type="text"
                name="Placa"
                value={novoCarro.Placa}
                onChange={handleChangeNovoCarro}
                placeholder="Placa"
              />
              <input
                type="text"
                name="Disponibilidade"
                value={novoCarro.Disponibilidade}
                onChange={handleChangeNovoCarro}
                placeholder="Disponibilidade"
              />
            </Quadro>
            <Quadro className="my-1 mx-auto min-w-[250px]">
              <Botao
                className={
                  modoEdicao
                    ? "bg-blue-400 hover:bg-blue-700 active:bg-blue-900"
                    : "bg-green-400 hover:bg-green-700 active:bg-green-900"
                }
                type="submit"
              >
                {modoEdicao ? "Confirmar Edição" : "Adicionar Carro"}
              </Botao>
              <Botao
                className={
                  modoEdicao
                    ? "bg-red-500 hover:bg-red-700 active:bg-red-800"
                    : "hidden"
                }
                onClick={sairEdicao}
              >
                Cancelar
              </Botao>
            </Quadro>
          </Formulario>
        </div>
      </div>
    </main>
  );
}
