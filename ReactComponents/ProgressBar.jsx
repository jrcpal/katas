import { useEffect, useState } from "react";

export const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 5;
        if (next >= 100) {
          clearInterval(interval);
          return 100;
        }
        return next;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="progress-bar">
        <div className="progress-bar-border">
          <div
            style={{ width: `${progress}%` }}
            className="progress-bar-fill"
          ></div>
        </div>

       <div className="progress-bar-label">{progress}%</div>
      </div>
    </div>
  );
};

export default function App() {
  const [bars, setBars] = useState([]);

  const handleClick = () => {
    setBars((prevBars) => [...prevBars, { id: Date.now() }]);
  };

  return (
    <div>
      <button onClick={() => handleClick()}>Add</button>
      {bars.map((bar) => {
        return <ProgressBar />;
      })}
    </div>
  );
}
