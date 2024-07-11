import { setupServer } from 'msw/native';
import { handlers } from './handlers';
export const server = setupServer(...handlers);

// server.events.on('request:start', request => {
//   console.log({ request });
//   //console.log('Outgoing:', request.method, request.url, request.body);
// });

server.events.on('response:mocked', async ({ response, request }) => {
  const result: object = await response.json();
  console.tron?.display({
    name: 'network',
    value: { url: request.url, result },
    preview: request.url,
    important: false,
    //image: 'https://www.vectorlogo.zone/logos/telegram/telegram-icon.svg',
  });
});
