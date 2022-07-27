import Section from "./Section";

const Sections = ({ categories, basket, setBasket }) => {
  return (
    <div className="contain">
      {categories.map((category, index) => {
        return (
          category.meals.length > 0 && (
            <Section key={index} title={category.name} menus={category.meals} basket={basket} setBasket={setBasket} />
          )
        );
      })}
    </div>
  );
};

export default Sections;
