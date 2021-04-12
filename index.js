const http = require('http');
const fs = require('fs');
const path = require('path');

// fetches data from JSON PLACEHOLDER POSTS
http.get('http://jsonplaceholder.typicode.com/posts', res => {
    let body = '';

    res.on('data', data => body += data);

    // Writes the JSON data gotten from the API to a file called posts.json in a directory file called result
    res.on('end', () => {
        try {
            let data = JSON.parse(body);
            fs.writeFile(path.join('result', 'posts.json'), JSON.stringify(data, null, 4), err => {if (err) return});
            console.log(data);
        } catch (error){
            console.error(error);
        }
    })
});
