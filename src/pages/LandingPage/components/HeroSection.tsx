import React from "react";

import { AnimateText } from "./TextDecoration";
import { CardAnimation } from "./CardAnimation";

import "./styles/styles.css";

const HeroSection = () => {

  return (
    <div className="lg-hero-section-container">
      <div className="animate-text-section">
        <AnimateText />
      </div>
      <div className="lg-image-container">
        <div className="image-1">
          <CardAnimation
            isSmallCard={true}
            bigImage={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCIPoGrSLXfWIaPkZEMym1jgXmCcs7gXQWhd4f6n845pzgnnVKi3H2JgJnFJoxVQDrugY&usqp=CAU"
            }
            smallImage={
              "https://images.unsplash.com/photo-1639591361445-06b0f20bc35e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            }
            bigImageStyle={{ height: "520px", width: "360px" }}
            strength={180}
          />
        </div>
        <div className="images-2-3">
          <div className="image-2">
            <CardAnimation
              isSmallCard={false}
              bigImage={
                "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              }
              bigImageStyle={{ height: "400px", width: "360px" }}
              strength={260}
            />
          </div>
          <div className="image-3">
            <CardAnimation
              isSmallCard={false}
              bigImage={
                "https://images.unsplash.com/photo-1565035010268-a3816f98589a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
              }
              bigImageStyle={{ height: "400px", width: "360px" }}
              strength={250}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(HeroSection);
