import React from "react";
import QuoteButton from "./QuoteButton";

const QuoteBox = ({ quote, newQuote, color }) => {
    return (
        <div className="quoteBox" style={{ color: color }}>
            <p className="quote-quote">{quote.quote}</p>
            <h3 className="quote-autor">{quote.author}</h3>
            <i className="quote-icon bx bxs-quote-left"></i>
            <QuoteButton color={color} newQuote={newQuote}></QuoteButton>
        </div>
    );
};

export default QuoteBox;
