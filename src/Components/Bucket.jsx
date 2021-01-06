import React, { useState } from "react";
import Header from "./Header";
import { Modal } from "materialize-css";
import List from "./List";

const Bucket = () => {
    document.addEventListener("DOMContentLoaded", () => {
        const elems = document.querySelectorAll(".modal");
        const instances = Modal.init(elems);
        console.log(instances);
    });

    const [buckets, setBuckets] = useState([]);
    const [newBucket, setBucket] = useState({
        id: 0,
        Name: "",
    });

    const addBucket = (event) => {
        event.preventDefault();

        setBuckets([...buckets, newBucket]);

        setBucket({
            Name: "",
        });
    };

    return (
        <>
            <div className="header">
                <Header HeaderName="Bucket List" />
            </div>

            <div className="Bucket">
                <div className="Container">
                    <div className="row">
                        {buckets.map((ele, index) => {
                            return (
                                <div key={index}>
                                    <div className="col s12 m6">
                                        <div className="card blue-grey darken-1">
                                            <div className="card-content white-text">
                                                <span className="card-title">
                                                    {ele.Name}
                                                </span>
                                                <p>
                                                    Please select to edit the to
                                                    do list for {ele.Name}
                                                </p>
                                            </div>
                                            <div className="card-action">
                                                <button
                                                    data-target="modal1"
                                                    className="btn-floating btn-large waves-effect waves-light red modal-trigger "
                                                >
                                                    <i className="fa fa-check"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                        <div className="col s12 m6">
                            <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                    <form onSubmit={addBucket}>
                                        <input
                                            className="validate"
                                            required
                                            type="text"
                                            placeholder="Please add a bucket"
                                            value={newBucket.Name}
                                            onChange={(e) => {
                                                setBucket({
                                                    id: buckets.length,
                                                    Name: e.target.value,
                                                });
                                            }}
                                        ></input>

                                        <button
                                            type="submit"
                                            className="btn-floating btn-large waves-effect waves-light red"
                                        >
                                            <i className="fa fa-plus"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div id="modal1" className="modal">
                            <div className="modal-content">
                                <List />
                            </div>
                            <div className="modal-footer">
                                <a
                                    href="#!"
                                    className="modal-close waves-effect waves-green btn-flat"
                                >
                                    Close
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Bucket;
