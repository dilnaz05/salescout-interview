// Write a script that:
// 1. Connects to Redis.
// 2. Saves the keys with their values.
// 3. Reads and outputs values for a given key.

import { createClient } from "redis";

// Use redis library

async function manageRedis(): Promise<void> {
    // Your code goes here
    const client=createClient();
    client.on('error', (err)=>{
        console.error('Redis connec error: ',err);
    });

    try{
        await client.connect();
        console.log('Redis connected')

        await client.set('key1', 'value1');
        await client.set('key2', 'value2');

        console.log('Values have beeen set');

        const value=await client.get('key1');
        console.log('Value key1: ',value);
    }catch(error){
        console.error('Error: ',error);

    }finally{
        await client.disconnect();
        console.log('Redis desconnected');
    }

}

module.exports = { manageRedis };