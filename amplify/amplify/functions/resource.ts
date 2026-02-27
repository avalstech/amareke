import { defineFunction } from '@aws-amplify/backend';

export const myFunction = defineFunction({
  name: 'myFunction',
  runtime: 'nodejs20.x',
  entry: './handler.ts',
});
