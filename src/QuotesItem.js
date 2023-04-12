import React, { useState } from "react";
import EditQuote from "./EditQuote";

const QuotesItem = (props) => {
  const { id, name, body, removeItem, editItem } = props;

  const [toggle, setToggle] = useState(false);

  const handleRemove = () => {
    const confirmRemove = window.confirm("Are you sure?");
    if (confirmRemove) {
      removeItem(id);
    }
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="col-md-8 d-flex justify-content-center">
      <div className="card p-3  mb-3 col-md-12 ">
        {toggle ? (
          <div>
            <EditQuote
              id={id}
              name={name}
              body={body}
              editItem={editItem}
              handleToggle={handleToggle}
            />
            <button onClick={handleToggle} className="btn btn-danger">
              cancle
            </button>
          </div>
        ) : (
          <div>
            <figure style={{ marginLeft: "40px", marginTop: "10px" }}>
              <blockquote class="blockquote">
                <p> {body}</p>
              </blockquote>
              <figcaption class="blockquote-footer">
                <cite title="Source Title">{name}</cite>
              </figcaption>
            </figure>
            <div className="d-flex justify-content-end gap-3">
              <button onClick={handleToggle} className="btn btn-success btn-sm">
                {" "}
                Edit{" "}
              </button>
              <button onClick={handleRemove} className="btn btn-danger btn-sm">
                {" "}
                X{" "}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuotesItem;
