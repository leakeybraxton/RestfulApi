const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json())

require("dotenv").config();

const port = 3000



mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(()=>{
    app.listen(port, () => {
        console.log('Server started');
    })
  })
.catch((err)=>{
    console.log(err);
})
const PersonSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
    }
});


const Person = mongoose.model('Person', PersonSchema);

app.post("/api", async(req, res)=>{
    if(!req.body){
        res.status(400).json({
            massage: "Field cannot be empty"
            
        })
        return;
    }

    try{
        const person = new Person(req.body);

        await person.save();

        
        res.status(201).json({
            massage: "Person saved"
        })
        


    }catch(err){
        res.status(500).send("Internal server error");
    }
})

app.get("/api", async(req, res)=>{
    try {
        const person = await Person.find({});
        res.json(person);
        if(!person){
            res.status()
        } 
    } catch (err) {
        res.status(500).send("Internal sever error");
    }
})

// Retrieve a user by ID
app.get("/api/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const person = await Person.findById(id);
      if (!person) {
        res.status(404).send("Person not found");
      } else {
        res.json(person);
      }
    } catch (err) {
      console.error("Error retrieving Person:", err);
      res.status(500).send("Internal Server Error");
    }
  });
  
  // Update a user by ID 
  app.put("/api/:id", async (req, res) => {
    const id = req.params.id;
    const person = req.body;
    try {
      const personUpdate = await Person.findByIdAndUpdate(id, person, {
        new: true,
      });
      if (!personUpdate) {
        res.status(404).send("Person not found");
      } else {
        res.json({ message: "Person updated!" });
      }
    } catch (err) {
      console.error("Error updating Person:", err);
      res.status(500).send("Internal Server Error");
    }
  });
  
  // Delete a user by ID
  app.delete("/api/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const person = await Person.findByIdAndRemove(id);
      if (!person) {
        res.status(404).send("Person not found");
      } else {
        res.json({ message: "person deleted successfully!" });
      }
    } catch (err) {
      console.error("Error deleting person:", err);
      res.status(500).send("Internal Server Error");
    }
  });