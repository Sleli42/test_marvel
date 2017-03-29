import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { loadHero } from '../../actions';
import DisplayListHeros from '../listHeros';
import DisplayDataOfHero from '../dataOfHero';

const App = ({ heros, loadHero, currentHero }) => {
  return (
    (!currentHero)
    ? <DisplayListHeros heros={heros} loadHero={loadHero} />
    : <DisplayDataOfHero hero={currentHero} />
  );
};

App.propTypes = {
  heros: PropTypes.array.isRequired,
  loadHero: PropTypes.func.isRequired,
  currentHero: PropTypes.array,
}

const mapStateToProps = state => state;
const actions = { loadHero };
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
