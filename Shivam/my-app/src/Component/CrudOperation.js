import React, { useState } from "react";

const CrudOperation = () => {
  const [data, setData] = useState("");
  const [items, setItems] = useState([]);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [editItem, setEditItem] = useState(null);
  // console.log(data)
  const addItem = () => {
    if (!data) {
      alert("please fill the data");
    } else if (data && !toggleSubmit) {
      setItems(
        items.map((elem) => {
          if (elem.id === editItem) {
            return { ...elem, name: data }
          }
          return elem;
        })
      )
      setToggleSubmit(true);
      setData('');
      setEditItem(null);
    }
    else {
      const AllData = { id: new Date().getTime().toString(), name: data }
      setItems([...items, AllData]);
      setData("");
    }
  };
  const deleteproduct = (index) => {
    const updateData = items.filter((elem) => {
      return index !== elem.id
    });
    setItems(updateData);
  };
  const allDelete = () => {
    setItems([]);
  };
  const editproduct = (id) => {
    let newEditItem = items.find((elem) => {
      return elem.id === id
    })
    setToggleSubmit(false);
    setData(newEditItem.name);
    setEditItem(id);
    // console.log(newEditItem)

  }
  return (
    <div className="main-div" style={{ textAlign: "center" }}>
      <h1 style={{ color: "orange" }}>Crud operation</h1>
      <div className="child-div">
        <div className="addItems">
          <input
            type="text" placeholder="Add items.."
            value={data} onChange={(e) => setData(e.target.value)} />

          {
            toggleSubmit ? <i className="fa fa-plus add-btn"
              title="Add Item" onClick={addItem}></i> :
              <i className="fa fa-edit add-btn"
                title="update Item" onClick={addItem}></i>
          }

        </div>
        <div className="eachItems">
          {items.map((elem) => {
            // console.log(elem);
            return (
              <div className="onlyItem" key={elem.id}>
                <h4 style={{ color: "green" }}>{elem.name}</h4>
                <i className="fa fa-edit add-btn" style={{ color: "blue" }}
                  title="Edit Item" onClick={() => editproduct(elem.id)} ></i><br></br>

                <i className="fa fa-trash add-btn" style={{ color: "red" }}
                  title="Delete Item" onClick={() => deleteproduct(elem.id)} ></i>
              </div>
            );
          })}
        </div>
        <div className="showItems"><br></br>
          <button className="" style={{ color: "red" }} onClick={allDelete}> Remove all </button>
        </div>
      </div>
    </div>
  );
};
export default CrudOperation;
