import QuoteForm from "./QuoteForm";

const AddQuote = (props) => {
  const { addItem } = props;

  const formSubmission = (formData) => {
    addItem(formData);
  };

  return (
    <div className="card shadow p-3">
      <h2>Add Quote</h2>
      <hr />
      <QuoteForm formSubmission={formSubmission} />
    </div>
  );
};

export default AddQuote;
