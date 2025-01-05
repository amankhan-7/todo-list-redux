import React from "react";
import './Home.css'
import AddTodo from "./AddTodo"
import { Link } from "react-router-dom";
import Todos from "./Todos";


function Home() {

  return (
    
    <div>
      <header>
        <h1 className="head">Todo List Management with redux toolkit</h1>
        <img src="https://png.pngtree.com/png-vector/20191005/ourmid/pngtree-checklist-on-to-do-list-form-illustration-with-man-signing-a-png-image_1794620.jpg" alt="Educational Platform Logo" />
        <div className="logo">
          
        </div>
        <nav>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        </nav>
      </header>
      
      <section id="buttons">
        <div className="button-container">
          <button className="cta-btn"><Link to="/addtodo">Add New Todo</Link>
          </button>
          <button className="cta-btn"><Link to="/todos">All Todos</Link>
          </button>
          <button className="cta-btn"><Link to="/editable">Edit and Save</Link>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
