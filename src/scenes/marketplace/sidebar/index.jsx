import Category from "./category/Category";
import Price from "./prices/Price";
import Colors from "./colors/Colors";
import "./sidebar.css";

function Sidebar() {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h3>Sort By</h3>
        </div>
        <Category />
        <Price />
        <Colors />
      </section>
    </>
  );
}

export default Sidebar;
