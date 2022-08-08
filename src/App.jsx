
import './App.css';
import Calcbar from './components/calculatorbar/Calcbar';
import Sidebar from './components/sidebar/sidebar';
import { useEffect, useState } from 'react';
import { IsNumber } from './helpers/isNumber';
import { Calculate, getcalchistory } from './logic/Calulatelogic';
function App() {
  const [calculatevalues, setcalculatingvalues] = useState(
    {
      firstvalue: null,
      operator: null,
      secondValue: null
    }
  );

  const [inputvalue, setinputvalue] = useState('');
  
  const [calchistory, setcalchistory] = useState([])
  
  const handleclick = (e) => {
    console.log(e.target.value)
    if (!IsNumber(e.target.value)) {
      setcalculatingvalues(!calculatevalues.firstvalue && !calculatevalues.operator ? { ...calculatevalues, firstvalue: inputvalue, operator: e.target.value } : { ...calculatevalues, operator: e.target.value })
      setinputvalue('')

    }
    else if (IsNumber(inputvalue) && IsNumber(e.target.value)) {
      setcalculatingvalues(IsNumber(calculatevalues.firstvalue) && calculatevalues.operator ? { ...calculatevalues, secondValue: inputvalue + e.target.value } : { ...calculatevalues, firstvalue: inputvalue + e.target.value })
      setinputvalue(inputvalue + e.target.value)
    }
    else {
      setinputvalue(e.target.value)
      setcalculatingvalues(IsNumber(calculatevalues.firstvalue) && IsNumber(e.target.value) ? { ...calculatevalues, secondValue: e.target.value } : IsNumber(e.target.value) && !IsNumber(calculatevalues.firstvalue) ? { ...calculatevalues, firstvalue: e.target.value } : { ...calculatevalues })
    }
  };
 
  useEffect(() => {
    console.log(Calculate(calculatevalues))
    if (Calculate(calculatevalues)) {
      var result = Calculate(calculatevalues)

      setinputvalue(result)
      setcalculatingvalues({ ...calculatevalues, firstvalue: result, operator: null, secondValue: null })
      setcalchistory(getcalchistory(calculatevalues) ? [...calchistory,getcalchistory(calculatevalues) + `=${result}`]:calchistory)
    }
  }, [calculatevalues, inputvalue, calchistory]);
 
  console.log(calculatevalues);
 
  return (
    <div className="App">

      <Sidebar history={calchistory} />
      <Calcbar handleclick={handleclick} inputvalue={inputvalue} />
    </div>
  );
}

export default App;
