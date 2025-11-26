// Ilya Zeldner
// 4 example of react
// This component renders a user profile card using props to display 
// user information.
// It demonstrates how to use props to pass data to child components.
// It is a simple example of how to create reusable components in React.
function ProfileCard(props) {
    return (
        <div className="profile-card">     
        <h2> User Profile : </h2>
        <h3> {props.name}</h3>
        <p> Age : {props.age}</p>
        <p> Occupation : {props.occupation}</p>
     </div>
    );
  }

  export default ProfileCard;
// This component can be used in other components to display
// user profiles by passing the appropriate props.
// Example usage:
// <ProfileCard name="John Doe" age={30} occupation="Software Engineer" />