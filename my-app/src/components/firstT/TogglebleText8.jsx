// Ilya Zeldner
// 8 example of react
// This component demonstrates how to create a toggleable text component 
// that shows or hides text based on a prop.
function ToggleableText(props) {
    return (
      <div>
        {props.isVisible && <p>{props.text}</p>}
    </div>
    );
  }

export default ToggleableText;