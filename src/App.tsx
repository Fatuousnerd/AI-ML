import { useRef, useEffect } from "react";
import { Population } from "../engine/simulation/Population";

const App = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const population = new Population(50);

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      population.move();
      population.spawn(ctx);

      requestAnimationFrame(loop);
    };

    loop();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={300}
      style={{ border: "1px solid #ccc" }}
    />
  );
};

export default App;
