import 'whatwg-fetch';
import crypto from 'crypto';

const checkStatus = (result) => {
  if (result.status !== 200) {
    throw new Error(result.statusText);
  }
  return result;
};

const parserJson = result => result.json();

export const requestJson = (uri, { method = 'GET' } = {}) => {
  const baseUrl = 'http://gateway.marvel.com:80';
  const publicApi = '298bab46381a6daaaee19aa5c8cafea5';
  const privateApi = 'b0223681fced28de0fe97e6b9cd091dd36a5b71d';
  const ts = Math.round(+new Date() / 1000);
  const concatenatedString = `${ts}${privateApi}${publicApi}`;
  const hash = crypto.createHash('md5').update(concatenatedString).digest('hex');
  const params = { headers: { 'Content-Type': 'application/json' }, method };
  return fetch(`${baseUrl}${uri}?ts=${ts}&apikey=${publicApi}&hash=${hash}`, params)
    .then(checkStatus)
    .then(parserJson)
    .catch(err => console.log('error: ', err))
}
