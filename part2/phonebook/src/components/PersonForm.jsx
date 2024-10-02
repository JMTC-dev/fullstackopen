const PersonForm = ({ values, handlers, onSubmit }) => {
  const { newName, newNumber } = values;
  const { handleNameInput, handleNumberInput } = handlers;

  return (
    <form onSubmit={onSubmit}>
      <div>
        name: <input value={newName} onChange={handleNameInput} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberInput} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
