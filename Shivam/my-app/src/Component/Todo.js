import React, { useState } from "react";

const Todo = () => {
  const [data, setData] = useState("");
  const [items, setItems] = useState([]);
  // console.log(datas)
  const addItem = () => {
    if (!data) {
      data = "null";
    } else {
      setItems([...items, data]);
      setData("");
    }
  };
  const deleteproduct = (id) => {
    const updateData = items.filter((elem, ind) => {
      return ind !== id;
    });
    setItems(updateData);
  };
  const allDelete = () => {
    setItems([]);
  };
  return (
    <div className="main-div">
      <h1>Todo list</h1>
      <div className="child-div">
        <div className="addItems">
          <input
            type="text" placeholder="Add items.." value={data}
            onChange={(e) => setData(e.target.value)}
          />
          <i
            className="fa fa-plus add-btn"
            title="Add Item"
            onClick={addItem}
          ></i>
        </div>
        <div className="eachItems">
          {items.map((elem, ind) => {
            // console.log(elem);
            return (
              <div className="onlyItem" key={ind}>
                <h4>{elem}</h4>
                <i
                  className="fa fa-trash add-btn"
                  title="Delete Item"
                  onClick={() => deleteproduct(ind)}
                ></i>
              </div>
            );
          })}
        </div>
        <div className="showItems">
          <button className="" onClick={allDelete}> Remove all</button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
