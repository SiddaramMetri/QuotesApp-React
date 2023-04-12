import React, { useEffect, useState } from "react";
import QuotesList from "./QuotesList";
import AddQuote from "./AddQuote";

const QuotesContainer = (props) => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("quotes")) || [];
    setQuotes(result);
  }, []);

  useEffect(() => {
    localStorage.setItem("quotes", JSON.stringify(quotes));
  }, [quotes]);

  const addItem = (quote) => {
    const result = [quote, ...quotes];
    setQuotes(result);
  };

  const editItem = (quote) => {
    console.log("edit", quote);
    const result = quotes.map((q) => {
      if (q.id === quote.id) {
        return { ...q, ...quote };
      } else {
        return { ...q };
      }
    });
    setQuotes(result);
  };

  const removeItem = (id) => {
    console.log("container", id);
    const result = quotes.filter((quote) => {
      return quote.id !== id;
    });
    setQuotes(result);
  };

  return (
    <div className="row mt-4">
      <div className="col-md-8">
        <QuotesList
          editItem={editItem}
          quotes={quotes}
          removeItem={removeItem}
        />
      </div>
      <div className="col-md-4">
        <AddQuote addItem={addItem} />
      </div>
    </div>
  );
};

export default QuotesContainer;
