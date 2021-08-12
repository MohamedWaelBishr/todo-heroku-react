import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Typography } from "@material-ui/core";

let data = require("../data.json");
let finished = [];
toast.configure();
if (!localStorage.getItem("data")) {
  localStorage.setItem("data", data);
}
if (!localStorage.getItem("finished")) {
  localStorage.setItem("finished", JSON.stringify([]));
}
data = JSON.parse(localStorage.getItem("data"));
finished = JSON.parse(localStorage.getItem("finished"));

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const [person, setPerson] = React.useState("");

  React.useEffect(() => {
    console.log("useEffect Triggered");
    document.title = `﹝${people.length}﹞ - Non Completed Tasks`;
  });

  const updateLocalStorage = (newLocalStorage) => {
    localStorage.setItem("data", JSON.stringify(newLocalStorage));
  };
  const saveFinishedLocalStorage = (finishedItem) => {
    let arr = finished;
    arr.push(finishedItem);
    localStorage.setItem("finished", JSON.stringify(arr));
  };
  const showFinished = () => {
    let f = [];
    finished.map((item) => {
      f.push(`★ Task [ ${item.name} ] Done ✔`);
    });
    for (let x in f) {
      toast.success(f[x], {
        position: "top-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  const removeItem = (id) => {
    let ELEMENT = people.find((p) => p.id === id);
    let task = people.find((p) => p.id === id).name;
    const conf = window.confirm(`Is [ ${task} ] Task is Finished?`);
    if (conf) {
      let newPeople = people.filter((person) => person.id !== id);
      toast.error(
        `( ${task.toUpperCase()}) 
          Removed Successfully ✔`,
        {
          position: "top-right",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
      setPeople(newPeople);
      updateLocalStorage(newPeople);
      saveFinishedLocalStorage(ELEMENT);
    } else {
      toast.dark("Get Yourself A Cup Of Coffee And Keep On Good Work 💪", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  const clearAll = () => {
    let newPeople = [];
    toast.error("All Tasks Removed Successfully ✔", {
      position: "top-right",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    updateLocalStorage(newPeople);
    setPeople(newPeople);
  };
  const pushItem = () => {
    if (!person) return alert("Kindly enter a valid task!");
    let item = { id: Date.now(), name: person };
    let newPeople = [...people, item];
    toast.info(
      `( ${item.name.toUpperCase()}) 
          Added Successfully ✔`,
      {
        position: "top-right",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
    setPeople(newPeople);
    updateLocalStorage(newPeople);
    setPerson("");
  };
  return (
    <>
      <Typography variant="h2" id="topText">
        {" "}
        {people.length > 0
          ? `〔${people.length}〕 Non Completed Tasks`
          : `No Tasks Added`}
      </Typography>
      <br></br>
      <div className="col-auto">
        <input
          type="text"
          value={person}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setPerson(e.target.value);
              pushItem();
            }
          }}
          onChange={(e) => {
            setPerson(e.target.value);
          }}
          className="form-control"
          placeholder="Enter a new task"
        />
      </div>
      <div className="col-auto">
        <button
          id="newTask"
          type="button"
          className="btn btn-primary mb-3"
          onClick={() => pushItem()}
        >
          Add Task
        </button>
      </div>
      <br></br>
      <div className="card">
        <ul className="list-group list-group-flush">
          {people.length ? (
            people.map((person) => {
              const { id, name } = person;
              return (
                <li
                  className="list-group-item"
                  style={{ borderRadius: "5px" }}
                  key={id}
                >
                  <p>{name}</p>
                  <button
                    type="button"
                    className="btn btn-success"
                    style={{ marginTop: "1px" }}
                    onClick={() => removeItem(id)}
                  >
                    Finish Task
                  </button>
                </li>
              );
            })
          ) : (
            <p> {`[${people.length}] - Non Completed Tasks`})</p>
          )}
        </ul>
      </div>
      <span>
        <button
          type="button"
          className="btn btn-danger"
          style={{ marginTop: "20px", marginBottom: "10px" }}
          onClick={() => clearAll()}
        >
          Clear Tasks
        </button>
        <div>
          <button
            type="button"
            className="btn btn-info"
            style={{
              marginTop: "10px",
              marginBottom: "10px",
              marginLeft: "5px",
            }}
            onClick={() => showFinished()}
          >
            Show Finished Tasks
          </button>
        </div>
      </span>
    </>
  );
};

export default UseStateArray;
