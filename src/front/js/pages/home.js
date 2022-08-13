import React, { useContext, useEffect, useState, useRef } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        VANTA.TRUNK({
          el: "#home",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          spacing: 7.0,
          chaos: 7.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <>
      <div className="h-full z-[-10]" id="home">
        <div className="flex h-full w-full items-center justify-center container mx-auto px-8">
          <div className="max-w-4xl text-center">
            <h1 className="text-3xl sm:text-5xl capitalize tracking-widest text-white font-black lg:text-7xl">
              Start Crafting Your
            </h1>
            <span
              class="relative mt-2 md:inline-block text-3xl "
              style={{ color: "#98465f" }}
            >
              Next Great Path
            </span>
          </div>
        </div>
      </div>
      <div className="h-96"></div>
    </>
  );
};
