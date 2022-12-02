import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {toast} from 'react-toastify'


const Home = () => {
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
                <tr key="">
                    
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Home