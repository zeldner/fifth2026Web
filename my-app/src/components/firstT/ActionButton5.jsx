// Ilya Zeldner
// 5 example of react
// This component renders a button with a specific text and background color.
// It demonstrates how to create a reusable button component in React.
// It is a simple example of how to use props to customize a component's 
// appearance and behavior.
function ActionButton(props) {
    const buttonStyle = {
      backgroundColor: props.backgroundColor,
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    };
  
    return (
      <button style={buttonStyle} onClick={props.onClick}>
        {props.text}
      </button>
    );
  }

export default ActionButton;