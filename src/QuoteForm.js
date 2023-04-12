import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";

const QuoteForm = (props) => {
  const {
    formSubmission,
    id: slNo,
    name: author,
    body: quote,
    handleToggle,
  } = props;

  const [id, setId] = useState(slNo ? slNo : uuidv4());
  const [name, setName] = useState(author ? author : "");
  const [body, setBody] = useState(quote ? quote : "");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      id: id,
      name: name,
      body: body,
    };

    formSubmission(formData);

    if (handleToggle) {
      handleToggle();
    }

    setName("");
    setBody("");
    setId(uuidv4());
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label> <br />
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          className="form-control"
        />
        <br />
        <label>Body</label>
        <br />
        <textarea
          value={body}
          className="form-control"
          onChange={handleBodyChange}
        ></textarea>
        <br />
        <input
          type="submit"
          value={handleToggle ? "Update" : "Save"}
          className={handleToggle ? "btn btn-primary" : "btn btn-success"}
        />
      </form>
    </div>
  );
};

export default QuoteForm;
