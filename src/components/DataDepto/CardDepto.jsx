import { Link } from "react-router-dom";

const CardDepto = ({ ImgSrc, titulo, descripcion, TextoDelBoton, to }) => {
  return (
    <div className="card">
      <img className="img-depto" src={ImgSrc} alt={descripcion} />

      <div>
        <h2 className="titulo-card">{titulo}</h2>
        <p className="parrafo-card">{descripcion}</p>
        <Link to={to}>
          <button
            className="button-card 
            hover:bg-[#C7BFB4] 
            hover:font-semibold
            hover:text-black"
          >
            {TextoDelBoton}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardDepto;
