// Ilya Zeldner
// 5 example of react
// This component renders a button with a specific text and background color.
// It demonstrates how to create a reusable button component in React.
// It is a simple example of how to use props to customize a component's appearance and behavior.
import ActionButton from "./ActionButton5";
function ButtonContainer() {
    const handleClick = (buttonText) => {
      alert(`Button "${buttonText}" clicked!`);
    };
  
    return (
        <div>
            <ActionButton text="Submit" backgroundColor="green" onClick={() => handleClick("Submit")} />
            <ActionButton text="Cancel" backgroundColor="red" onClick={() => handleClick("Cancel")} />
            <ActionButton text="Learn More" backgroundColor="blue" onClick={() => handleClick("Learn More")} />
        </div>
  );
  }

export default ButtonContainer;