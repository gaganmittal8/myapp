import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Modal from './common/Modal';

const Dashboard = () => {

  const [todo, setTodo] = useState([]);

  const getTodoList = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        setTodo(json);
      }
    )
  }
  useEffect(() => {
    getTodoList();
  },[]);

  const[showModal, setShowModal] = useState(false);
  const[data, setData] = useState("");

  const openModal = (data, e) => {
    console.log(data);
    setShowModal(true);
    setData(data);
    document.body.classList.add("modal-open");
  }

  const closeModal = (e) => {
    setShowModal(false);
    document.body.classList.remove("modal-open");
  }
  
  return (
    <>
      <Helmet>
        <title>React App | Dashboard</title>
      </Helmet>
      <div className="dashboard">
        <div className='container'>
          <div className='row py-5'>
            <div className='col-sm-12'>
              <div className='text-center mb-3'><h1>Welcome to Dashboard</h1></div>
            </div>
            <div className='col-sm-12'>
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Address</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Website</th>
                    <th scope="col">Company</th>
                    <th scope="col">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    todo.map((items) => {
                      const { id, name, username, email, address, phone, website, company } = items;
                      return (
                        <tr key={id}>
                          <td>{id}</td>
                          <td>{name}</td>
                          <td>{username}</td>
                          <td>{email}</td>
                          <td>{address.city}</td>
                          <td>{phone}</td>
                          <td>{website}</td>
                          <td>{company.name}</td>
                          <td><button type='button' className='btn btn-danger' onClick={(e) => openModal(items)}>PopUp</button></td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Modal data={data} showModal={showModal} closeModal={closeModal}/>
    </>
  )
}

export default Dashboard;