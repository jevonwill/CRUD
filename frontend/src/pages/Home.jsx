import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {toast} from 'react-toastify'


const Home = () => {
    const [contacts, setContacts] = useState([]);

    const getAllData = async() => {
        const response = await axios.get("http://localhost:7000/getall");
        setContacts(response.data);
        console.log(response);
    }

    useEffect( ()=> {
        getAllData()
    }, []);

  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>S/N</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map((contact, index)=> {
                    return(<tr>
                        <td>{index}</td>
                        <td>{contact.name}</td>
                        <td>{contact.email}</td>
                        <td>{contact.phone}</td>
                    </tr>)
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Home