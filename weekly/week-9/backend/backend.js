const express = require('express'); // Import express
const fs = require('fs'); // Import fs
const path = require('path'); // Import path
const cors = require('cors'); // Import cors

const app = express(); // Create express app
const PORT = 3000; // Set port

app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors());

const dataFilePath = path.join(__dirname, 'data.json'); // Path to data file
const rickFilePath = path.join(__dirname, 'rick.json'); // Path to image file

/*
    * Read data from data file
    * @returns {Array} Data
    * @returns {Array} Empty array if error
*/
const readData = (dataFilePath) => {
    try {
        const data = fs.readFileSync(dataFilePath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading data file:', err);
        return [];
    }
};

/*
    * Write data to data file
    * @param {Array} data Data to write
    * @returns {undefined}
*/
const writeData = (data) => {
    try {
        fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
    } catch (err) {
        console.error('Error writing to data file:', err);
    }
};

/* 
    * Get all items
    * @route GET /items
    * @returns {Array} Items
*/
app.get('/items', (req, res) => {
    const data = readData(dataFilePath);
    res.json(data);
});

/* 
    * Get item by id
    * @route GET /items/:id
    * @param {number} id Item id
    * @returns {Object} Item
*/
app.get('/items/:id', (req, res) => {
    console.log(req.headers);
    console.log(req.query);
    console.log(req.params);
    console.log(req.body);
    const data = readData(dataFilePath);
    const item = data.find((i) => i.id === parseInt(req.params.id));
    if (item) {
        res.json(item);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

/* 
    * Create new item
    * @route POST /items
    * @param {Object} Item
    * @returns {Object} Created item
*/
app.post('/items', (req, res) => {
    const data = readData(dataFilePath);
    const newId = data.length > 0 ? Math.max(...data.map(item => item.id)) + 1 : 1;
    const newItem = { id: newId, ...req.body };
    data.push(newItem);
    writeData(data);
    res.status(201).json(newItem);
});

/*
    * Update item by id
    * @route PUT /items/:id
    * @param {number} id Item id
    * @param {Object} Item
    * @returns {Object} Updated item
*/
app.put('/items/:id', (req, res) => {
    const data = readData(dataFilePath);
    const index = data.findIndex((i) => i.id === parseInt(req.params.id));
    if (index !== -1) {
        data[index] = { ...data[index], ...req.body };
        writeData(data);
        res.json(data[index]);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

/* 
    * Delete item by id
    * @route DELETE /items/:id
    * @param {number} id Item id
    * @returns {Object} Message
*/
app.delete('/items/:id', (req, res) => {
    const data = readData(dataFilePath);
    const newData = data.filter((i) => i.id !== parseInt(req.params.id));
    if (newData.length !== data.length) {
        writeData(newData);
        res.json({ message: 'Item deleted' });
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

app.get('/rick', (req, res) => {
    const data = fs.readFileSync(rickFilePath, 'utf8');
    res.send(data);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})