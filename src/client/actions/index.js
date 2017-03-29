import { requestJson } from '../utils';

export const HEROS_LOADED = 'heros/loaded';
export const HERO_LOADED = 'hero/loaded';
export const HERO_CLOSED = 'hero/closed';

const herosLoaded = heros => ({
  type: HEROS_LOADED,
  payload: heros,
});

export const loadHeros = () => (dispatch) => {
  const uri = '/v1/public/characters';
  requestJson(uri)
    .then(data => dispatch(herosLoaded(data.data.results)))
    .catch(err => console.log('error: ', err));
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
