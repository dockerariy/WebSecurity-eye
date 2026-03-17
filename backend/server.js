const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Basic security scan endpoint
app.get('/scan', (req, res) => {
    res.json({ message: 'Security scan initiated.' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});