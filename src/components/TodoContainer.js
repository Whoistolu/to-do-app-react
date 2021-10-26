import React from "react"
class TodoContainer extends React.Component {

  state = {
    todos: [
      {
        id: 1,
        title: "Setup development environment",
        completed: true
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: false
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false
      }
    ]
   };

  render() {
    return (
      <React.Fragment>
        <h1>Hello from Create React App</h1>
        <p>I am in a React Component!</p>
      </React.Fragment>
    )
  }
}
export default TodoContainer