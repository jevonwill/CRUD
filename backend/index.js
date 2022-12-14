/* Import Dependecies */

const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const mysql = require("mysql2")
const e = require("express")

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
    database: "contact_db"
})

/*GET API to request contact data */
app.get("/getall", (req, res)=> {
    const getAllContacts = "SELECT * FROM contact_table";
    db.query(getAllContacts, (err, result)=>{
        if(!err){
            res.send(result)
        }else{
            console.error(err)
        }
    })
})

/* API to add contact */

app.post("/add", (req, res)=> {
    const {name, email, phone} = req.body;
    const addQuery = "INSERT into contact_table (name, email, phone) VALUES (?, ?, ?)"
    db.query(addQuery, [name, email, phone], (err, result)=>{
        if(!err){
            res.send("Successfully added contact")
        }else{
            console.error(err)
        }
    })
})

/*API to retrieve single contact by uniq ID */

app.get("/getOne/:id", (req, res)=> {
    const id = req.params.id
    const getContact = "SELECT * FROM contact_table where id = ?";
    db.query(getContact, [id], (err, result)=> {
        if(!err){
            res.send(result)
        }else{
            res.send("User not found")
        }
    })
})

/* API to update single contact */

app.put("/update/:id", (req, res)=> {
    const id = req.params.id
    const {name, email, phone} = req.body;
    const updateContact = "UPDATE contact_table SET name = ?, email = ?, phone = ? WHERE id = ?";
    db.query(updateContact, [name, email, phone, id], (err, result)=> {
        if(!err){
           res.send(result) 
        }else{
            console.error(err)
        }
    })
})


/* API to delete contact  */

app.delete("/delete/:id", (req, res)=> {
    const id = req.params.id
    const deleteContact = "DELETE FROM contact_table WHERE id = ?";
    db.query(deleteContact, [id], (err, result)=> {
        if(!err){
            res.send(result)
        }else{
            console.error(err)
        }
    })
})