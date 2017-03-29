import React, { PropTypes } from 'react';
import R from 'ramda';

import CurrentHero from './currentHero';

const DisplayListHeros = ({ heros, loadHero }) => {
  return <ul>{R.map(hero => <CurrentHero hero={hero} loadHero={loadHero} key={hero.name} />)(heros)}</ul>
}

DisplayListHeros.propTypes = {
  heros: PropTypes.array.isRequired,
  loadHero: PropTypes.func.isRequired,
}

export default DisplayListHeros;
