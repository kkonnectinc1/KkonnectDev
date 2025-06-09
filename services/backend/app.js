const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
      res.send('✅ Kkonnect Backend Running!');
});

app.get('/health', (req, res) => {
      res.json({ status: 'healthy' });
});

app.get('/api/messages', (req, res) => {
    res.json({
        messages: [
            { id: 1, text: 'Welcome to Kkonnect!' },
            { id: 2, text: 'Your backend and frontend are now connected.' }
        ]
    });
});

app.post('/api/messages', (req, res) => {
    const { text } = req.body;
    if (!text) {
        return res.status(400).json({ error: 'Message text is required' });
    }
    // In a real app, we would save this to a database
    res.status(201).json({ id: Date.now(), text });
});

app.listen(PORT, () => {
      console.log(`🚀 Backend service is live on port ${PORT}`);
});