const request = require('request');

const nodePath = process.argv[0];
const appPath = process.argv[1];
const count = process.argv[2];
const type = process.argv[3];

const url = 'http://127.0.0.1:3000';

if (type === 'normal') {
    for (let i = 0; i < count; i++) {
        request({
            url: url,
            headers: {
                count: i
            }
        }, (err, response, body) => {
            if (err) {
                console.error('Error', err)
            }
            if (response.statusCode == 200) {
                console.log(body)
            }
        })
    }
}
if (type === 'async') {
    async function f() {
        for (let i = 0; i < count; i++) {
            let promise = new Promise((resolve, reject) => {
                request({
                    url: url,
                    headers: {
                        count: i
                    }
                }, (err, response, body) => {
                    if (err) {
                        console.error('Error', err)
                    }
                    if (response.statusCode == 200) {
                        resolve(body)
                    }
                })
            });
            let result = await promise;
            console.log(result)
        }
    }

    f();
}