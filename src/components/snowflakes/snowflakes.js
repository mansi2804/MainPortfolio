import React from 'react';
import { useCallback } from "react";
import Particles from 'react-particles';
import { loadSlim } from "tsparticles-slim";

const Snowflakes = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
  
    const particleColors = ['#915eff', '#2f2465', '#000000'];

  return (
    <div style={{ top: 0, left: 0, zIndex: -1 }}>
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#000",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "bubble",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        bubble: {
                            distance: 250,
                            duration: 2,
                            size: 6,
                            opacity: 0.4
                        },
                    },
                },
                particles: {
                    color: {
                        value: particleColors,
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        opacity: 0.5,
                        width: 1,
                        enable: false
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 6,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "star",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
    </div>
  );
};

export default Snowflakes;
