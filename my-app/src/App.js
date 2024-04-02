
import './App.css';
// import { FunctionSample } from './component/FunctionSample';
// import { MultiTypeComponent } from './component/MultiTypeComponent';
// import { OneOfSample } from './component/OneOfSample';
// import { ArrayComponent } from './component/ArrayComponent';
// import { ChildComponent } from './component/ChildComponent';
// import { FirstComponent } from './component/FirstComponent';
// import { Second } from './component/Second';
// import { Student } from './component/Student';
// import { Third } from './component/Third';

// const handleClick=()=>{
//   alert("Butten Clicked!");
// };
import { useState } from 'react';

function App() {

  // const items=[
  //   {id:1,names:"item 1"},
  //   {id:2,names:"item 2"},
  //   {id:3,names:"item 3"},
  // ]

  const [count,setCount]=useState(4)

  function decrementCount(){
    count ===0 ? setCount(count): setCount(prevCount => prevCount - 1)
    
  }

function incrementCount(){
  setCount(prevCount => prevCount + 1)
  
}

  return (
    <div>
 <button onClick={decrementCount} disabled={count===0}>-</button>
<span>{count}</span>
<button onClick={incrementCount}>+</button>

      {/* helo
   <FirstComponent/>
   <Second></Second>
   {<Third/>}
    
  
   <Student names="vibin"age={12} isMarried={true} />
 <Student/> 
 <ChildComponent>
    <p>Hello 1</p>
    <p>Hello 2</p>
    <p>Hello 1</p>
 </ChildComponent>

<ArrayComponent items={items} />

<OneOfSample color="blue"/>

<MultiTypeComponent value="Hello" title="vibin" />
<MultiTypeComponent value={10} />
<MultiTypeComponent value={true} />

<div>
  <p>
    Parent Component
  </p>
  <FunctionSample handleClick={handleClick}/>
</div>  */}

</div>
  
  )
}

export default App;
