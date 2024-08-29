import React, {useState} from 'react';
import List from './components/List';
import data from "./helper/data"


function App() {
 const [number,setNumber]=useState(1);
 const changeNext=()=>setNumber(number+5);
 const changePrev=()=>setNumber(number-5);
 
  return (
    <main>
      <section className="container">
        <h3>Employee List</h3>
        <h5>
          (Employees {number} to {number+4})
        </h5>
        <List personel={data} />
        <div className='btns'>
          <button onClick={changePrev} >Prev</button>
          <button onClick={changeNext} >Next</button>
        </div>
      </section>
    </main>
  );
}

export default App;
