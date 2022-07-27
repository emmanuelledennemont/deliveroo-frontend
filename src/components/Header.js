import Restaurant from "./Restaurant";
import deliveroo from "../images/Deliveroo_logo.svg"
const Header = ({ data }) => {
  return (
    <header>
      <div className="info">
        <div className="logo-contain container">
            <img className= "logo" src={deliveroo} alt="" />
        </div>
      </div>
      <Restaurant data={data} />
    </header>
  );
};

export default Header;

