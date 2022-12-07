import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {toast} from 'react-toastify'


const Home = () => {
    /*Hook to store our data from DB  */
    const [contacts, setContacts] = useState([]);

    /*Method to get all data using Axios  */
    const getAllData = async() => {
        const response = await axios.get("http://localhost:7000/getall");
        setContacts(response.data);
        console.log(response);
    }

    useEffect( ()=> {
        getAllData()
    }, []);

    const deleteContact = (id) =>{
        if(window.confirm("Do you want delete this contact?")){
            axios.delete(`http://localhost:7000/delete/${id}`).then.().catch(err=>{console.log(err)})
        }
    }

  return (
    <div style={{marginTop: "200px"}}>
        <Link to ={'add'}><button className='addItem'>Add Contact </button></Link>
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

                        <td>
                            <Link to = {`edit/${contact.id}`} ><button className='edit'>Edit</button></Link>
                            <Link to = {`view/${contact.id}`}><button className='view'>View</button></Link>
                            <button className='delete' onClick={()=>deleteContact(contact.id)}>Delete</button>
                        </td>
                    </tr>)
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Home