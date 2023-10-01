import ProductButton from "./ProductButton";

export default function Product({ id, title, price, noButton = false }) {
  return (
    <div style={{ border: "1px solid white", margin: "20px", padding: "20px" }}>
      <h4>{title}</h4>
      <p>{price}</p>
      {!noButton && <ProductButton id={id} />}
    </div>
  );
}
