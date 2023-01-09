import { useState, useEffect } from "react";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";
function ProductsList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setLoading(false);
        setProducts(response.data.products);
      })
      .catch(() => {
        setErrorMessage("Unable to fetch user list");
        setLoading(true);
      });
  }, []);

  if (isLoading) return LoadingSpinner;

  return (
    <div>
      {errorMessage && <span>{errorMessage}</span>}
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {products.map((product) => {
            return (
              <div key={product.id} className="product">
                <h1>{product.brand}</h1>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <h3>{product.stock}</h3>
                <h3>{product.price}$</h3>
                <div>
                  <span className="material-symbols-outlined">
                    add_shopping_cart
                  </span>
                  <span className="material-symbols-outlined">
                    remove_shopping_cart
                  </span>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default ProductsList;
