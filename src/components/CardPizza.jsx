const MyCard = ({ name, price, ingredients, img }) => {
  return (
    <>
      <div class="card-group">
        <div class="card" style={{ maxWidth: "350px", margin: "10px" }}>
          <img class="card-img-top" src={img} alt={name} />
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <div className="m-2">
              <p class="card-text text-center">Ingredientes:</p>
              <p className="card-text text-center">
                🍕
                {ingredients.map((ingredient, index) => (
                  <span
                    key={index}
                    style={{ display: "inline-block", marginRight: "5px" }}
                  >
                    <span role="img" aria-label="ingredient"></span>{" "}
                    {ingredient},
                  </span>
                ))}
              </p>
            </div>

            <p className="card-text text-center fs-4 fw-bold">
              Precio: ${price.toLocaleString()}
            </p>
            <div className="d-flex justify-content-between mt-4 mx-4">
              <a href="#" className="btn btn-outline-secondary">
                Ver Más 👀
              </a>
              <a href="#" className="btn text-white bg-black">
                Añadir 🛒
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyCard;
