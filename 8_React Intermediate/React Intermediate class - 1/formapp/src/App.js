import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // console.log(firstName);
  // console.log(lastName);
  // function changeFirstNameHandler(event) {
  //   // console.log("printing first name")
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }
  // function changelastNameHandler(event) {
  //   // console.log("Printing last name")
  //   // console.log(event.target.value);
  //   setLastName(event.target.value);
  // }

  const [formData, setFormData] = useState(  {firstName: "", 
  lastName: "", email:"", comments:"", isVisible:true, mode:"", favCar:"" } );

  // console.log(formData)

  function changeHandler(event) {
    const {name, value, checked, type} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type ==="checkbox" ? checked : value
      }
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    //print
    console.log("Finally printing the entireform ka data ........")
    console.log(formData)
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
      <br/>
        <input
          type="text"
          placeholder='first name'
          onChange={changeHandler}  
          name="firstName"
          value={formData.firstName}
        />

        <br/>
        <br></br>

        <input
          type="text"
          placeholder='last name'
          onChange={changeHandler} 
          name="lastName" 
          value={formData.lastName}
        />

        <br/>
        <br/>
        <input
          type="email"
          placeholder="Enter your email here"
          onChange={changeHandler}
          name="email"
          value={formData.email}  
          />

<br/><br/>
        <textarea
          placeholder='enter your comments here'
          onChange={changeHandler}
          name="comments"
          value={formData.comments}
         /> 
         <br/>
         <br/>

         <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          id="isVisible"
          checked={formData.isVisible}
          />
          <label htmlFor='isVisible'>Am I visible ?</label>

          <br/>
          <br/>

          <fieldset>
            <legend>Mode:</legend>
            <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="Online-Mode"
            id="Online-Mode"
            checked={formData.mode === "Online-Mode"}
          />
          <label htmlFor='Online-mode'>Online Mode</label>

          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="Offline-Mode"
            id="Offline-Mode"
            checked={formData.mode === "Offline-Mode"}
          />
          <label htmlFor='Offline-mode'>Offline Mode</label>

          </fieldset>
          <label htmlFor='favCar'> Tell me your Favourite Car </label>
          <select
            name="favCar"
            id="favCar"
            value={formData.favCar}
            onChange={changeHandler}
          >
          <option value="scarpio">Scarpio</option>
          <option value="fartuner">fartuner</option>
          <option value="Tharrr">Tharrr</option>
          <option value="Legender">Legender</option>
          <option value="Defender">Defender</option>

          </select>

         {/* <input type='submit' value='submit'/> */}
         <br/>
         <br/>
         <button>Submit</button>






      </form>
    </div>
  );
}

export default App;
