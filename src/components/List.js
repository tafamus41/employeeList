import React from "react";

const List = ({ filteredEmployee }) => {
  // console.log(filteredEmployee);
  return (
    <>
      {filteredEmployee.map((item) => (
        <article key={item.id} className="person">
          <img src={item.image} alt="" />
          <div>
            <h4>{item.name}</h4>
            <p>{item.email}</p>
            <p>{item.age}years</p>
          </div>
        </article>
      ))}
    </>
  );
};

export default List;
