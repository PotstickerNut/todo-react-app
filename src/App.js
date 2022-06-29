import "./App.css";
import todosData from "./data/todosData";
import { Component } from "react";

import Navbar from "./components/Navbar";
import TodoList from "./components/TodosList";

class App extends Component {
  state = {
    todosData: todosData,
    id: 0,
    title: "",
    details: "",
    completed: false,
    created_at: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // create a new product object
    const newTodo = {
      id: this.state.id,
      title: this.state.title,
      details: this.state.details,
      completed: this.state.completed,
      created_at: this.state.created_at,
    };
    console.log(newTodo);
    console.log(todosData);

    // set new values in the state
    this.setState({
      todosData: [newTodo, ...this.state.todosData],
      id: 0,
      title: "",
      details: "",
      completed: false,
      created_at: "",
    });
    console.log(todosData);
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        {/* new todo form */}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="id">ID</label>
          <input
            type="number"
            value={this.state.id}
            onChange={this.handleChange}
            id="id"
          />
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
            id="title"
          />
          <label htmlFor="details">Details</label>
          <input
            type="text"
            value={this.state.details}
            onChange={this.handleChange}
            id="details"
          />
          <label htmlFor="completed">Completed</label>
          <input
            type="boolean"
            value={this.state.completed}
            onChange={this.handleChange}
            id="completed"
          />
          <label htmlFor="created_at">Created At</label>
          <input
            type="text"
            value={this.state.created_at}
            onChange={this.handleChange}
            id="created_at"
          />
          <input type="submit" value="Submit" />
        </form>

        <TodoList todosData={this.state.todosData} />
      </div>
    );
  }
}

export default App;
