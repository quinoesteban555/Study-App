import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [question, setquestion] = useState("");
  const [answer, setanswer] = useState("");
  const GetQuestion = () => {
    axios.get("http://localhost:5000/api")
    .then((response)=>
    {
      if (response.status === 200)
      {
        console.log("I hear ye");
        let array = response.data.question;
        let num = Math.floor(Math.random() * array.length);
        setquestion(array[num]);
      }
      else
      {
        console.log(response.data.message);
        alert(response.data.message);
      }
    })
    .catch((error) => 
    {
        console.log(error);
    })};
    const handleSubmit = (event) => {
      event.preventDefault();
      const send = [answer]
      axios
          .post("http://localhost:5000/api/response", send)
          .then((response) => {console.log("info sent"); 
        if (response.status === 200)
        {
          GetQuestion();
        }
        })
          .catch((err) => {
              console.error(err);
            });

        };
  const handleUserInput = async (e) => {
      const name = e.target.name
      const value = e.target.value;
      setanswer(value);
  }
  return (
    <>
    <div className="App">
      {useEffect(() => {
      GetQuestion()
    },[])}
      <header className="App-header">
      Study Time
      <form>
      <label htmlFor="location"> {question} </label>
        <input type="text" name="answer" onChange={handleUserInput}/>
        <br />
        <input type="submit" value="Submit" onClick={handleSubmit} />
        <br />
      </form>
      </header>
    </div>
    </>
  );
}

export default App;
