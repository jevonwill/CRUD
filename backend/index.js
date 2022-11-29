/* Import Dependecies */

const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const mysql = require("mysql2")

/* Create app object in express */
const app = express()

/* Define what app uses*/
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

/* Listen on Port 7000*/
app.listen(7000, ()=>{
    console.log("Connection successful!")
})

/* Connect to local DB*/
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Password1",
    database: "contact_database"
})

/*GET API to request contact data */
app.get("/getall", (req, res)=> {
    const getAllContacts = "select * from contact_table";
    db.query(getAllContacts, (err, result)=>{
        if(!err){
            res.send(result)
        }else{
            console.error(err)
        }
    })
})