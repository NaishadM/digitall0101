import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

const Employee = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:5000/employees');
        setEmployees(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEmployees();
  }, []);

  return (
    <div className="container">
      <h1>Employees</h1>
      <Table striped bordered hover>
        <thead>
        <tr>
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      {employees.map((employee) => (
        <tr key={employee._id}>
          <td>{employee.name}</td>
          <td>{employee.phone}</td>
          <td>{employee.email}</td>
        </tr>

      ))}
      </tbody>
      </Table>
      <br />
      </div>
  )  }

export default Employee;