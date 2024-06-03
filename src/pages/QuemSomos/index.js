import React from "react";

export default function QuemSomos() {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Seção de Vantagens */}
        <div className="col-md-6">
          <h2>Vantagens</h2>
          <p>
            Aqui você pode listar as vantagens da sua locadora, como preços
            competitivos, variedade de veículos, atendimento ao cliente, etc.
          </p>
        </div>
        {/* Seção de Quem Somos */}
        <div className="col-md-6">
          <h2>Quem Somos</h2>
          <p>
            Aqui você pode falar um pouco sobre sua locadora, sua missão, visão,
            valores, história da empresa, etc.
          </p>
        </div>
      </div>
    </div>
  );
}
