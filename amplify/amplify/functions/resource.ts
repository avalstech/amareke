import { defineFunction } from '@aws-amplify/backend';

export const myFunction = defineFunction({
  entry: './handler.ts',
});
