const ProductItemForm = (props) => {
  return (
    <form>
      <div>
        <button type="button">-</button>
        <input
          type="number"
          min={props.quantityInfo.min}
          step={props.quantityInfo.step}
          max={props.quantityInfo.max}
          placeholder={props.quantityInfo.min}
        />
        <button type="button">+</button>
      </div>
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default ProductItemForm;
