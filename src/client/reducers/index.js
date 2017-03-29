import { HEROS_LOADED, HERO_LOADED, HERO_CLOSED } from '../actions';

const rootReducers = (state = {}, action) => {
  const { payload } = action;
  switch (action.type) {
    case HEROS_LOADED:
      return { ...state, heros: payload };
    case HERO_LOADED:
      return { ...state, currentHero: payload };
    case HERO_CLOSED:
      return { ...state, currentHero: undefined };
    default: return state;
  }
};

export default rootReducers;
