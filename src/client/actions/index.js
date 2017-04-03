import { requestJson } from '../utils';

export const HEROS_LOADED = 'heros/loaded';
export const HERO_LOADED = 'hero/loaded';
export const HERO_CLOSED = 'hero/closed';

// action creator
const herosLoaded = heros => ({
  type: HEROS_LOADED,
  payload: heros,
});

// action creator type thunk
export const loadHeros = () => (dispatch) => {
  const uri = 'http://0.0.0.0:3004/server/heros';
  const params = { headers: { 'Content-Type': 'application/json' }, method: 'GET' };
  fetch(uri, params)
    .then(res => res.json())
    .then(heros => dispatch(herosLoaded(heros)))
    .catch(err => console.error('error:', err))
};

const heroLoaded = hero => ({
  type: HERO_LOADED,
  payload: hero,
});

export const loadHero = characterId => (dispatch) => {
  const uri = `/v1/public/characters/${characterId}`;
  requestJson(uri)
    .then(hero => dispatch(heroLoaded(hero.data.results)))
    .catch(err => console.log('error: ', err));
};

export const closeHero = () => ({
  type: HERO_CLOSED,
});
