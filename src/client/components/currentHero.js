import React, { PropTypes } from 'react';

const CurrentHero = ({ hero, loadHero }) => {
  const { name, thumbnail, id } = hero;
  return (
    <li style={{ border: '1px solid black' }}>
      <img
        role="presentation"
        src={`${thumbnail.path}.${thumbnail.extension}`}
        width="200px"
        height="150px"
      />
      <h2>{name}</h2>
      <button onClick={() => loadHero(id)}>More Infos</button>
    </li>
  );
}

CurrentHero.propTypes = {
  hero: PropTypes.object.isRequired,
  loadHero: PropTypes.func.isRequired,
}

export default CurrentHero;
