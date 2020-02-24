const request = require('request');

const nodePath = process.argv[0];
const appPath = process.argv[1];
const count = process.argv[2];
const type = process.argv[3];

const url = '127.0.0.1';
let answer = '';

//осталось понять как серверу обрабатывать последовательно или параллельно
for (let i = 0; i < count; i++) {
    request(
        {
            method: 'GET',
            url: url,
            type: type,
        },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                answer = body;
            }
        })
}