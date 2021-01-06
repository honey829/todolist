import React, { useState } from "react";
import ToDoList from "./ToDoList";
import Header from "./Header";

const List = () => {
    let [list, setList] = useState([]);
    const [item, setItem] = useState("");

    const addToList = (event) => {
        event.preventDefault();
        if (item !== null || item !== "") setList([...list, item]);
        setItem("");
        document.getElementById("list").style.display = "block";
    };

    const deleteItem = (id) => {
        setList((oldList) => {
            return oldList.filter((ele, index) => {
                return index !== id;
            });
        });
        if (list.length <= 1) {
            document.getElementById("list").style.display = "none";
        }
    };

    return (
        <>
            <div className="header">
                <Header HeaderName={`To Do List`} />
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form onSubmit={addToList}>
                            <textarea
                                id="todoinput"
                                className="materialize-textarea validate"
                                required
                                placeholder="New Task"
                                value={item}
                                onChange={(e) => {
                                    if (
                                        e.target.value !== null ||
                                        e.target.value !== ""
                                    ) {
                                        setItem(e.target.value);
                                    }
                                }}
                            ></textarea>

                            <input
                                type="submit"
                                className="btn grey custom-button"
                                value="Add"
                            ></input>
                        </form>
                    </div>

                    <div className="col-12">
                        <div className="List">
                            <ul
                                className="collection custom-ul"
                                id="list"
                                style={{ display: "none" }}
                            >
                                {list.map((data, index) => {
                                    return (
                                        <ToDoList
                                            key={index}
                                            id={index}
                                            text={data}
                                            onSelect={deleteItem}
                                        />
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default List;
