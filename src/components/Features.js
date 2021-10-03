import { useState } from "react";
import { features } from "../data/features";

const Features = () => {
  // eslint-disable-next-line
  const [feature, setPeople] = useState(features);

  return (
    <>
      <section className="feature">
        <div>
          {feature.map(({ id, image, title, desc }) => (
            <article key={id}>
              <div className="feature-image">
                <img src={image} alt="" />
              </div>
              <h4 className="feature-title">{title}</h4>
              <p className="feature-desc">{desc}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Features;
