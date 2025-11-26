// Ilya Zeldner
// 7 example of react
// This component demonstrates how to create a reusable input component with a label.
function LabeledInput(props) {
    return (
      <div>
        <label>{props.label}</label>
        <input type={props.type} />
    </div>
    );
  }

export default LabeledInput;