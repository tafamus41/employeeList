import React from 'react';
import List from './components/List';
import data from "./helper/data"

function App() {
 
  return (
    <main>
      <section className="container">
        <h3>Employee List</h3>
        <h5>
          (Employees 1 to 5)
        </h5>
        <List personel={data} />
        <div className='btns'>
          <button >Prev</button>
          <button >Next</button>
        </div>
      </section>
    </main>
  );
}

export default App;
