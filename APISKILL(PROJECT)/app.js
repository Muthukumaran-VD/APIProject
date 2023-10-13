const express = require('express');
const app = express();
const port = 3000;
const module1 = require('./models/Skill');


app.get('/api/technical-skills', async (req, res) => {
  try {
    const database = await module1.getDatabase();
    console.log("DB Connected");
    const collection = database.collection('technicalskills');
    const skills = await collection.find({}, { _id: 0, skill: 1 }).toArray();
    const skillArray = skills.map(item => item.skill);
    res.json(skillArray);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving data');
  }
});


var server = app.listen(port, function() {
  console.log("Listening on port %d", server.address().port);
});