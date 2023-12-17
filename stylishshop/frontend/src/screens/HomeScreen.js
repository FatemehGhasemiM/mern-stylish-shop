import { Link } from "react-router-dom";
import data from "../data";

function HomeScreen() {
  return (
    <>
      <h1>Featured Products</h1>
      <div className="products">
        {data.products.map((product) => (
          <div className="product" key={product.slug}>
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <Link to={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </Link>
                <p>
                  <storage>${product.price}</storage>
                </p>
                <button>Add to cart</button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
export default HomeScreen;
