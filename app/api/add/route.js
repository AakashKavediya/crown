const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Connect to MongoDB (local)
mongoose.connect('mongodb://127.0.0.1:27017/contactdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const contactSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    message: { type: String, required: true },
});

const Contact = mongoose.model('Contact', contactSchema);

app.use(cors());
app.use(express.json());

// POST API to add contact
app.post('/api/add', async (req, res) => {
    try {
        const { firstName, lastName, email, phone, message } = req.body;
        const newContact = new Contact({ firstName, lastName, email, phone, message });
        await newContact.save();
        res.status(201).json({ message: 'Contact saved successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to save contact.' });
    }
});

app.listen(5000, () => {
    console.log('Server Started on port 5000');
});