import React, { Component } from 'react';
import './students.css';

class Students extends Component {
  constructor() {
    super();
    this.state = {
      students: []
    }
  }

  componentDidMount() {
    fetch('/api/students')
      .then(res => res.json())
      .then(students => this.setState({students}));
  }

  render() {
    return (
      <div>
        <h2>Students</h2>
        <ul>
          {this.state.students.map(student =>
            <li key={student.id}>{student.firstname} {student.lastname}</li>  
          )}
        </ul>
      </div>
    );
  }
}

export default Students;
