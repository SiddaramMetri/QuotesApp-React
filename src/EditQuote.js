import QuoteForm from "./QuoteForm";

const EditQuote = (props) => {
  const { id, name, body, handleToggle, editItem } = props;

  const formSubmission = (formData) => {
    // console.log("edit", formData);
    editItem(formData);
  };

  return (
    <div className="row">
      <h2>Edit Quote</h2>
      <hr />
      <QuoteForm
        id={id}
        name={name}
        body={body}
        handleToggle={handleToggle}
        formSubmission={formSubmission}
      />
    </div>
  );
};

export default EditQuote;
