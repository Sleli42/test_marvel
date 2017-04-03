import 'universal-fetch';
import crypto from 'crypto';


const checkStatus = (result) => {
  if (result.status !== 200) {
    throw new Error(result.statusText);
  }
  return result;
};

const parseJson = result => result.json();

const baseUrl = 'http://0.0.0.0:3004'

export const requestServer = (uri, params = { headers: { 'Content-Type': 'application/json' }, method: 'GET' }) => {
  return fetch(`${baseUrl}/${uri}`, params)
    .then(checkStatus)
    .then(parseJson)
};
