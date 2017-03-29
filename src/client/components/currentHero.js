import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Item = styled.li`
  list-style: none;
  width: 200px;
  max-width: 200px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 5px 5px;
`;

const Name = styled.h4`
  flex-grow: 1;
  align-self: center;
`;

const Button = styled.button`
  cursor: pointer;
`;

const CurrentHero = ({ hero, loadHero }) => {
  const { name, thumbnail, id } = hero;
  return (
    <Item style={{ border: '1px solid black' }}>
      <img
        role="presentation"
        src={`${thumbnail.path}.${thumbnail.extension}`}
        height="150px"
      />
      <Name>{name}</Name>
      <Button onClick={() => loadHero(id)}>More Infos</Button>
    </Item>
  );
}

CurrentHero.propTypes = {
  hero: PropTypes.object.isRequired,
  loadHero: PropTypes.func.isRequired,
}

export default CurrentHero;
