const Basket = ({ basket, setBasket }) => {
  let vat = 2.5;
  let subtotal = 0;

  for (let i = 0; i < basket.length; i++) {
    subtotal = subtotal + basket[i].price * basket[i].quantity;
  }

  let total = subtotal + vat;
  let roundingSubtotal = subtotal.toFixed(2);
  let roundingTotal = total.toFixed(2);

  return (
    <div className="basket-container">
      <div className="basket">
        {basket.length === 0}
        <button className={basket.length === 0 ? "unsubmit" : "submit"}>
          Valider mon panier
        </button>

        {basket.map((element, index) => {
          return (
            <div key={index} className="choice">
              <div className="left">
                <span>
                  <button
                    onClick={() => {
                      const copyBasket = [...basket];
                      copyBasket[index].quantity =
                      copyBasket[index].quantity - 1;
                      element.quantity < 1 && copyBasket.splice(index, 1);
                      setBasket(copyBasket);
                    }}
                  >
                    -
                  </button>
                </span>

                <span className="quantity">{element.quantity}</span>

                <span>
                  <button
                    onClick={() => {
                      const copyBasket = [...basket];
                      copyBasket[index].quantity =
                        copyBasket[index].quantity + 1;
                      setBasket(copyBasket);
                    }}
                  >
                    +
                  </button>
                </span>
              </div>
              <div className="right">
                <span>{element.name}</span>
                <span className="price">
                  {(element.price * element.quantity).toFixed(2)} <p>$</p>
                </span>
              </div>
            </div>
          );
        })}

        {basket.length > 0 ? (
          <>
            <div className="cart-result">
              <div className="subtotal">
                <p>Sous-total</p>
                <span>{roundingSubtotal} $</span>
              </div>
              <div className="vat">
                <p>Frais de livraison </p>
                <span>{vat} $</span>
              </div>
            </div>

            <div className="total">
              <p>Total</p>
              <span>{roundingTotal} $</span>
            </div>
          </>
        ) : (
          <p className="empty">Votre panier est vide</p>
        )}
      </div>
    </div>
  );
};

export default Basket;
