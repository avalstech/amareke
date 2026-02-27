import type { Handler } from 'aws-lambda';

interface Event {
  name?: string;
}

interface Response {
  statusCode: number;
  body: string;
}

export const handler: Handler<Event, Response> = async (event) => {
  const name = event?.name || 'World';
  
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello, ${name}!`,
      timestamp: new Date().toISOString(),
    }),
  };
};
