import React,{ useState} from 'react';
import "../Styles/Calculator.css";
import CalcButton from './CalcButton';
const Calculator = () => {
    const [res,setRes]=useState([])
    const [power,setPower]=useState(false);
    const handleValue=(e)=>
    {
      if(power)
      {
      if(res[0]===0)
      setRes([e.target.value])
      else
      setRes([...res,e.target.value]);
      }
      else
      {
        setRes([])
      }
    }
    const handelPower=()=>
    {
     if(power)
     {
     setPower(false)
     setRes([])
     }
     else
     {
     setPower(true)
     setRes([0])
     }
    }
  return (
    <div className='container-fluid'>
    <div className='row d-flex flex-column'>
      <h4 className='text-center mt-5'>Calculator</h4>
      <div className='px-0 col-4 border border-primary calc'>
          <div className='col-12 calc-display'>
          {res}
          </div>
          <div className='calc-btns'>
          <button className='btn' value="+" onClick={(e)=>{handleValue(e)}}>+</button>
          <button className='btn' value="-" onClick={(e)=>{handleValue(e)}}>-</button>
          <button className='btn' value="x" onClick={(e)=>{handleValue(e)}}>x</button>
          <button className='btn' value="/" onClick={(e)=>{handleValue(e)}}>/</button>
          <button className='btn' value="%" onClick={(e)=>{handleValue(e)}}>%</button>
          </div>
          <div className='calc-btns'>
            <button className='btn' value="1" onClick={(e)=>{handleValue(e)}}>1</button>
            <button className='btn' value="2" onClick={(e)=>{handleValue(e)}}>2</button>  
            <button className='btn' value="3" onClick={(e)=>{handleValue(e)}}>3</button>  
            <button className='btn' value="4" onClick={(e)=>{handleValue(e)}}>4</button>  
            <button className='btn' value="5" onClick={(e)=>{handleValue(e)}}>5</button>  
            <button className='btn' value="6" onClick={(e)=>{handleValue(e)}}>6</button>  
            <button className='btn' value="7" onClick={(e)=>{handleValue(e)}}>7</button>  
            <button className='btn' value="8" onClick={(e)=>{handleValue(e)}}>8</button>  
            <button className='btn' value="9" onClick={(e)=>{handleValue(e)}}>9</button>  
            <button className='btn' value="0" onClick={(e)=>{handleValue(e)}}>0</button>  
          </div>
          <div className='calc-functions'>
          <button className='btn' onClick={handelPower}>{power?'OFF':'ON'}</button>
          <CalcButton val="=" setRes={setRes} res={res}/>
          <CalcButton val="Clear" setRes={setRes} res={res}/>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Calculator