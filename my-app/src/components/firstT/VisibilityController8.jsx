// Ilya Zeldner
// 8 example of react
// This component demonstrates how to create a toggleable text component 
// that can show or hide its content based on a prop.
// It uses the "ToggleableText" component to create two instances: 
// one with visible text and one with hidden text.  

import ToggleableText from "./TogglebleText8";
function VisibilityController() {
    return (
      <div>
        <ToggleableText text="This is some secret information!" isVisible={true} />
        <ToggleableText text="Another hidden message." isVisible={false} />
    </div>
    );
  }

export default VisibilityController;