import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: {
            color: {
              value: "transparent", // Make particles background transparent
            },
          },
          fpsLimit: 60,
          particles: {
            number: {
              value: 150,
              density: {
                enable: true,
                area: 800,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "char",
              options: {
                char: {
                  value: "*",
                  font: "Verdana",
                  style: "",
                  weight: "800"
                }
              }
            },
            opacity: {
              value: 0.8,
            },
            size: {
              value: { min: 1, max: 3 },
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              outModes: {
                default: "bounce",
              },
            },
          },
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
  );
};


