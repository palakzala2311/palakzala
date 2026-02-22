import "./App.css";
import Welcome from "./Welcome";
import Button from "./Button";
import Student from "./Student";

function App() {
  function handleClick() {
    alert("Button Clicked!");
  }

  return (
    <div className="container">
      <Welcome name="Palak" />

      <Button label="Login" />
      <Button label="Register" />

      <Student name="Palak" course="BCA" />
      <Student name="Namra" course="CSE" />

      <Button label="Click Me" onClick={handleClick} />
    </div>
  );
}

export default App;
