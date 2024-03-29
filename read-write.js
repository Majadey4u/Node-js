const fs = require('fs');

// Write to file (optional)
fs.writeFileSync('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('File created successfully!');
}); 

// Read from file
fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) {
    // Handle errors appropriately, e.g., check if file exists
    console.error('Error reading file:', err);
    return;
  }
  console.log(data);
});
