import React, { PropTypes } from 'react';
import R from 'ramda';
import styled from 'styled-components';

import CurrentHero from './currentHero';

const Container = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const DisplayListHeros = ({ heros, loadHero }) =>
  <Container>{R.map(hero => <CurrentHero hero={hero} loadHero={loadHero} key={hero.name} />)(heros)}</Container>

DisplayListHeros.propTypes = {
  heros: PropTypes.array.isRequired,
  loadHero: PropTypes.func.isRequired,
}

export default DisplayListHeros;
