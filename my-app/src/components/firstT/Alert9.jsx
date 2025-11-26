// Ilya Zeldner
// 9 example of react
// This component demonstrates how to create a simple alert 
// component that displays messages with different styles based on the type of alert.
export default function Alert(props) {
    let alertStyle = {
      padding: '15px',
      margin: '10px 0',
      borderRadius: '5px',
      color: 'white',
    };
  
    if (props.type === 'success') {
      alertStyle.backgroundColor = 'green';
    } else if (props.type === 'warning') {
      alertStyle.backgroundColor = 'orange';
    } else if (props.type === 'error') {
      alertStyle.backgroundColor = 'red';
    }
  
    return (
      <div style={alertStyle}>
        {props.message}
    </div>
    );
  }