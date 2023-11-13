const express = require('express');
const bodyparser = require('body-parser')

const { MongoClient, ObjectId } = require('mongoose');

const app = express();
const port = 4000;

const url = 'mongodb://localhost:27017';
const dbName = 'personal-skillsite';

// Connect and display the status 
mongoose.connect('mongodb://127.0.0.1:27017/teamProject', { useNewUrlParser: true,  useUnifiedTopology: true })
    .then(() => { console.log("connected"); })
    .catch((err) => { console.log("error connecting", err); });

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Log every request
app.use((req, res, next) => {
    console.log('This line is always called');
    next();
});

// Set CORS headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // can connect from any host
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE'); // allowable methods
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    next();
});


app.get('/skills', async (req, res, next) => {
  const client = new MongoClient(url, { useUnifiedTopology: true });

  try {
    await client.connect();
    const db = client.db(dbName);
    const skills = await db.collection('projects').find().toArray();
    res.json(skills);
  } finally {
    await client.close();
  }
});

// Create (Add)
app.post('/api/skills', async (req, res) => {
  const newSkill = req.body; // Assuming the skill data is sent in the request body
  const client = new MongoClient(url, { useUnifiedTopology: true });

  try {
    await client.connect();
    const db = client.db(dbName);
    const result = await db.collection('projects').insertOne(newSkill);
    res.json(result.ops[0]);
  } finally {
    await client.close();
  }
});

// Update
app.put('/api/skills/:id', async (req, res) => {
  const skillId = req.params.id;
  const updatedSkill = req.body;
  const client = new MongoClient(url, { useUnifiedTopology: true });

  try {
    await client.connect();
    const db = client.db(dbName);
    const result = await db
      .collection('projects')
      .updateOne({ _id: ObjectId(skillId) }, { $set: updatedSkill });

    if (result.modifiedCount === 1) {
      res.json({ message: 'Skill updated successfully' });
    } else {
      res.status(404).json({ message: 'Skill not found' });
    }
  } finally {
    await client.close();
  }
});

// Delete
app.delete('/api/skills/:id', async (req, res) => {
  const skillId = req.params.id;
  const client = new MongoClient(url, { useUnifiedTopology: true });

  try {
    await client.connect();
    const db = client.db(dbName);
    const result = await db.collection('projects').deleteOne({ _id: ObjectId(skillId) });

    if (result.deletedCount === 1) {
      res.json({ message: 'Skill deleted successfully' });
    } else {
      res.status(404).json({ message: 'Skill not found' });
    }
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

