import React from "react";
import book from './book.png'
import './Heading.css';

export default function Heading(){
    return(
        <div className="d-flex justify-content-center text-center mb-2 fw-bolder">
        <h1 className="fw-bolder">To-Do List</h1>
        <img src={book} className="" alt="" />
      </div>
    );
}