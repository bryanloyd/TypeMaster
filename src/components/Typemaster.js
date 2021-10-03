import ButtonTwo from "../components/ButtonTwo";
import keyboard from "../assets/mobile/image-keyboard.jpg";

const Typemaster = () => {
  return (
    <>
      <section className="typemaster">
        <div>
          <h2 className="typemaster-heading">typemaster Keyboard</h2>
          <p className="typemaster-body">
            Improve your productivity and gaming without breaking the bank.
            Upgrade to a high quality mechanical typing experience.
          </p>

          <div className="typemaster-button">
            <div>
              <ButtonTwo />
            </div>
            <div>
              <h5>release on 5/27</h5>
            </div>
          </div>

          <div className="typemaster-image">
            <img src={keyboard} alt="" className="typemaster-keyboard" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Typemaster;
