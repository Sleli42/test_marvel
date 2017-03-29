import { HEROS_LOADED, HERO_LOADED } from '../actions';

const rootReducers = (state = {}, action) => {
  const { payload } = action;
  switch (action.type) {
    case HEROS_LOADED:
      return { ...state, heros: payload };
    case HERO_LOADED:
      return { ...state, currentHero: payload };
    default: return state;
  }
};

export default rootReducers;
