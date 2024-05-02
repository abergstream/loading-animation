import "./JumpingDots.css";

const JumpingDots = ({ jumpingDotsSpeed }) => {
  return (
    <div
      className="jumping-dots-container"
      style={{
        "--jumping-dots-speed": jumpingDotsSpeed
          ? jumpingDotsSpeed + "s"
          : "1s",
      }}
    >
      <div className="jumping-dots__dot"></div>
      <div
        className="jumping-dots__dot"
        style={{
          "--i": jumpingDotsSpeed ? `${jumpingDotsSpeed * 0.2}s` : "0.2s",
        }}
      ></div>
      <div
        className="jumping-dots__dot"
        style={{
          "--i": jumpingDotsSpeed ? `${jumpingDotsSpeed * 0.2 * 2}s` : "0.4s",
        }}
      ></div>
      <div
        className="jumping-dots__dot"
        style={{
          "--i": jumpingDotsSpeed ? `${jumpingDotsSpeed * 0.2 * 3}s` : "0.6s",
        }}
      ></div>
      <div
        className="jumping-dots__dot"
        style={{
          "--i": jumpingDotsSpeed ? `${jumpingDotsSpeed * 0.2 * 4}s` : "0.8s",
        }}
      ></div>
    </div>
  );
};

export default JumpingDots;
