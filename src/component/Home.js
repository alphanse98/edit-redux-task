import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataAction } from "./slice";
import "./App.css";

function Home() {
  let store = useSelector((state) => state);
  let dispatch = useDispatch();

  const [editData, seteditData] = useState(store.initialState.data[0]),
    [indexValue, setindexValue] = useState(0),
    [toggle, settoggle] = useState(true);

    console.log(store.initialState.data);
  let EditBtn = (ele, index) => {
    seteditData(ele);
    setindexValue(index);
  };

  const inputChange = (e) => {
    seteditData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  let savefuc = () => {
    let temcopy = [...store.initialState.data];
    temcopy[indexValue] = editData;

    dispatch(dataAction(temcopy));
    settoggle(true);
  };

  return (
    <div className="container">
      {store.initialState.data.map((ele, index) => (
        <div key={index}>
          <p
            onClick={() => EditBtn(ele, index)}
            className={ele.id === editData.id ? "active box" : " box"}
          >
            {ele.name}
          </p>
        </div>
      ))}
      {/* tooggle fuction */}
      {toggle ? (
        // display data
        <div className="boxtwo">
          <p>
            <span>Name = </span>
            {editData.name}
          </p>
          <p>
            <span> Email = </span>
            {editData.email}
          </p>
          <p>
            <span> Phone = </span>
            {editData.phone}
          </p>
          <p>
            <span>Website = </span>
            {editData.website}
          </p>
          <button onClick={() => settoggle(false)}>Edit</button>
        </div>
      ) : (
        // input area
        <div className="boxtwo">
          <p>
            <span>Name = </span>
            <input
              value={editData.name}
              onChange={inputChange}
              name="name"
            ></input>
          </p>
          <p>
            <span>Email = </span>
            <input
              value={editData.email}
              onChange={inputChange}
              name="email"
            ></input>
          </p>
          <p>
            <span>phone = </span>
            <input
              value={editData.phone}
              onChange={inputChange}
              name="phone"
            ></input>
          </p>
          <p>
            <span>website = </span>
            <input
              value={editData.website}
              onChange={inputChange}
              name="website"
            ></input>
          </p>
          <button onClick={() => savefuc()}>save</button>
          <button onClick={() => settoggle(true)}>cancel</button>
        </div>
      )}
    </div>
  );
}

export default Home;
