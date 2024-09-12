import React from "react";

const styles = {
  container: {
    fontFamily: "'Courier New', Courier, monospace" as React.CSSProperties['fontFamily'],
    fontSize: "2rem" as React.CSSProperties['fontSize'],
    textAlign: "center" as React.CSSProperties['textAlign'],
    margin: "2rem" as React.CSSProperties['margin'],
    color: "#fff" as React.CSSProperties['color'],
    position: "relative" as React.CSSProperties['position'],
    display: "inline-block" as React.CSSProperties['display'],
  },
  text: {
    display: "inline-block" as React.CSSProperties['display'],
    overflow: "hidden" as React.CSSProperties['overflow'],
    whiteSpace: "nowrap" as React.CSSProperties['whiteSpace'],
    borderRight: "0.15em solid #333" as React.CSSProperties['borderRight'],
    animation: "typing 3.5s steps(30, end), blink 0.75s step-end infinite" as React.CSSProperties['animation'],
  },
};

const Blog: React.FC = () => {
  return (
    <>
      <div style={styles.container}>
        <div style={styles.text}>C o m i n g S o o n!</div>
      </div>
      <style>
        {`
          @keyframes typing {
            from { width: 0; }
            to { width: 100%; }
          }

          @keyframes blink {
            from, to { border-color: transparent; }
            50% { border-color: #333; }
          }

          .text {
            animation: typing 3.5s steps(30, end), blink 0.75s step-end infinite;
          }
        `}
      </style>
    </>
  );
};

export default Blog;
