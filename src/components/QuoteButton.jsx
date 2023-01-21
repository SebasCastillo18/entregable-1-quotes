import React from "react";

const QuoteButton = ({ newQuote, color }) => {
  return (
    <button className="quote-button" onClick={newQuote} style={{ backgroundColor: color }}>
      <i className="bx bxs-chevrons-right"></i>
    </button>
  );
};

export default QuoteButton;
