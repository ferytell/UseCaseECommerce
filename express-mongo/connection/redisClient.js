require('dotenv').config();
const Redis = require('ioredis');


const redisURI = process.env.REDIS;

const redis = new Redis(redisURI);

redis.on('connect', () => {
    console.log('Connected to Redis');
});

redis.on('error', (err) => {
    console.error('Redis connection error:', err);
});

module.exports = redis;
