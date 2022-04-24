import React from 'react';
import "../Styles/Button.css"

const CalcButton = (props) => {
  const handleCalc=()=>
  {
    switch(props.val)
    {
    case 'Clear':props.setRes([0]);
    break;
    case '=':{
      let i=0;
      while(i<(props.res).length)
      {
        if(props.res[i]=='+')
        {
          props.setRes(parseInt(props.res[i-1])+parseInt(props.res[i+1]))
        }
        i++;
      }
    }
    break;
    default:alert("Something Wrong");
    }
    
  }
  return (
    <button className='btn' onClick={handleCalc}>{props.val}</button>
  )
}

export default CalcButton