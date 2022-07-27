import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Section = ({ title, menus, basket, setBasket }) => {
  return (
    <section>
      <h2>{title}</h2>
      <div className="menus">
        {menus.map((menu, index) => {
          return (
            <div
              className="menu-item"
              key={menu.id}
              onClick={() => {
                const copyBasketArray = [...basket];

                const obj = {
                  id: menu.id,
                  name: menu.title,
                  price: menu.price,
                  quantity: 1,
                };

                let isHere = false;
                for (let i = 0; i < copyBasketArray.length; i++) {
                  if (obj.id === copyBasketArray[i].id) {
                    isHere = true;
                    copyBasketArray[i].quantity =
                      copyBasketArray[i].quantity + 1;
                  }
                }

                  isHere === false && copyBasketArray.push(obj);

                setBasket(copyBasketArray);
              }}
            >
              <div className="menu-info">
                <h3>{menu.title}</h3>
                <p className="menu-description">{menu.description}</p>
                <div className="price-popular">
                  <p className="menu-price">{menu.price} €</p>
                  {menu.popular && (
                    <span>
                      <FontAwesomeIcon icon="fa-solid fa-star" />
                      Populaire
                    </span>
                  )}
                </div>
              </div>
              <div className="menu-item-img">
                {menu.picture && <img src={menu.picture} alt={menu.title} />}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Section;
