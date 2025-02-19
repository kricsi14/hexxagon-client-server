const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the dist folder
app.use(express.static(path.join(__dirname, 'dist/hexxagon-game/browser')));

// For any routes, send back index.html so that Angular can handle the routing.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/hexxagon-game/browser', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
