const client = require('./client.js');

async function init(){
    const element = await client.set('user:3', 'heyy');
    const result = await client.get('user:3');
    console.log('result->', result);
}
init();