import Header from "./components/./header/Header.jsx";
import UserInput from "./components/userInputs/UserInput.jsx";
import {useState} from "react";
import Results from "./components/results/Results.jsx";
function App() {
  const [userInput,setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 10000,
    expectedReturn: 6,
    duration: 10
  })

  const inputIsValid = userInput.duration >= 1 ;
  function handleChange  (inputIdentifier, newValue) {
    setUserInput(previousUserInput => {
      return {
        ...previousUserInput,
        [inputIdentifier]: +newValue
      };
    });
  }
  return <>
    <Header/>
    <UserInput userInput={userInput} onChange={handleChange}/>
    { inputIsValid
     ? <Results userInput={userInput}/>
        : <p className="center"> The Input is Not valid , Please enter correct values</p>
    }
  </>
}

export default App
