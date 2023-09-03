import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

function Card() {
  return (
    <section className="card">
      <img
        className="card-img"
        src="https://i.dummyjson.com/data/products/1/1.jpg"
        alt="test"
      />
      <div className="card-details">
        <h3 className="card-title">Shoes</h3>
        <section className="card-reviews">
          <GradeOutlinedIcon className="rating-start" />
          <GradeOutlinedIcon className="rating-start" />
          <GradeOutlinedIcon className="rating-start" />
          <GradeOutlinedIcon className="rating-start" />
          <GradeOutlinedIcon className="rating-start" />
          <span className="total-reviews">5</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>300</del> 200
          </div>
          <div className="bag">
            <ShoppingBagOutlinedIcon className="bag-icon" />
          </div>
        </section>
      </div>
    </section>
  );
}

export default Card;
