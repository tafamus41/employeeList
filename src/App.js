import React, { useState } from "react";
import List from "./components/List";
import data from "./helper/data";
function App() {
  const [number, setNumber] = useState(1);
  const [filteredEmployee, setFilteredEmployee] = useState(
    data.slice(number - 1, number + 4)
  );
  const changeNext = () => {
    if(number<16){
    const newNumber=number+5
    setNumber(newNumber);
    setFilteredEmployee(data.slice(newNumber - 1, newNumber + 4))
    };
  }
  const changePrev = () => {
    if (number>4){
      const newNumber=number-5
    setNumber(newNumber);
    setFilteredEmployee(data.slice(newNumber-1, newNumber+4));
  };
}
  return (
    <main>
      <section className="container">
        <h3>Employee List</h3>
        <h5>
          (Employees {number} to {number + 4})
        </h5>
        <List filteredEmployee={filteredEmployee} />
        <div className="btns">
          <button onClick={changePrev}  disabled={number<=5}  >Prev</button>
          <button onClick={changeNext}  disabled={number>=16}  >Next</button>
        </div>
      </section>
    </main>
  );
}
export default App;
