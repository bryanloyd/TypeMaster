import Logo from "./Logo";
import ButtonOne from "./ButtonOne";

const Header = () => {
  return (
    <>
      <section className="header">
        <div>
          <Logo />
        </div>

        <div>
          <ButtonOne />
        </div>
      </section>
    </>
  );
};

export default Header;
