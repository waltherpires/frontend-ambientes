import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 shadow-lg justify-center">
      <div className="container max-w-1800 ">
        <div className="container mx-1 max-w-1800 flex justify-between items-center px-4 py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-white text-xl font-bold ml-2">
              WBM Locadora
            </Link>
          </div>

          {/* Links */}
          <div className="hidden md:flex items-center space-x-4">
            <ul className="flex text-white space-x-4">
              <li>
                <Link to="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/carros" className="hover:text-gray-300">
                  Carros
                </Link>
              </li>
              <li>
                <Link to="/clientes" className="hover:text-gray-300">
                  Clientes
                </Link>
              </li>
              <li>
                <Link to="/reservas" className="hover:text-gray-300">
                  Reservas
                </Link>
              </li>
              <li>
                <Link to="/quemsomos" className="hover:text-gray-300">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-gray-300">
                  Contato
                </Link>
              </li>
              <li>
                <Link to="/oficina" className="hover:text-gray-300">
                  Oficina
                </Link>
              </li>
              <li>
                <Link to="/planos" className="hover:text-gray-300">
                  Planos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
