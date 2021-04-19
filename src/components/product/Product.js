import "./Product.css";

export const Product = (props) => {
  const handleClick = () => alert(`Gracias por clickear en el saludo`);

  return (
    <div onClick={handleClick}>
      <h2>{props.greeting}</h2>
    </div>
  );
};
