import React from "react";
import QuotesItem from "./QuotesItem";

const QuotesList = (props) => {
  const { quotes, removeItem, editItem } = props;

  return (
    <div>
      {quotes.length === 0 ? (
        <div className="row">
          <h1>No Quotes Found</h1>
          <p>Add you first Quotes</p>
        </div>
      ) : (
        <div className="row">
          <h4>My Quotes - {quotes.length}</h4>
          {quotes.map((quote) => {
            return (
              <QuotesItem
                key={quote.id}
                editItem={editItem}
                removeItem={removeItem}
                {...quote}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default QuotesList;
