import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { loadHero, closeHero } from '../../actions';
import DisplayListHeros from '../listHeros';
import DisplayDataOfHero from '../dataOfHero';

const App = ({ heros, loadHero, currentHero, closeHero }) =>
  (!currentHero)
  ? <DisplayListHeros heros={heros} loadHero={loadHero} />
  : <DisplayDataOfHero hero={currentHero} closeHero={closeHero} />

App.propTypes = {
  heros: PropTypes.array.isRequired,
  loadHero: PropTypes.func.isRequired,
  currentHero: PropTypes.array,
  closeHero: PropTypes.func.isRequired,
}

const mapStateToProps = state => state;
const actions = { loadHero, closeHero };
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
