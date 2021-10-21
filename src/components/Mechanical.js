import glass from "../assets/mobile/image-glass-and-keyboard.jpg";
import phone from "../assets/mobile/image-phone-and-keyboard.jpg";

const Mechanical = () => {
  return (
    <>
      <section className="mechanical">
        <div>
          <div className="mechanical-images">
            <div>
              <img src={phone} alt="" />
              <div className="img_overlay"></div>
            </div>
            <div>
              <img src={glass} alt="" />
            </div>
          </div>
          <div className="mechanical-body">
            <h3>mechanical wireless keyboard</h3>
            <p>
              The Typemaster keyboard boasts top-notch build and practical
              design. It offers a wide variety of switches and keycaps, along
              with reliable wireless connectivity.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mechanical;
