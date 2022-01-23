import { createClient } from 'redis';

const createRedisClient = async () => {
  const client = createClient();

  client.on('error', (err) => console.log('Redis Client Error', err));

  await client.connect();

  return client
}

export default createRedisClient