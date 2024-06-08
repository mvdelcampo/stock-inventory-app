export { AppServerModule as default } from './app/app.module.server';
import { Amplify } from 'aws-amplify';

Amplify.configure({
  API: {
    GraphQL: {
      endpoint: 'https://adiaanrzcneo5hglcuqhpf3oo4.appsync-api.us-east-2.amazonaws.com/graphql',
      region: 'us-east-2',
      defaultAuthMode: 'apiKey',
      apiKey: 'da2-aeamy3u25nhnfax6a2ttiaazgy'
    }
  }
});
