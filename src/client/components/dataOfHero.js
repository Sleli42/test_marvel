import React, { PropTypes } from 'react';
import R from 'ramda';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ContainerRight = styled.div`
  flex-grow: 2;
`;

const Button = styled.button`
  margin-top: 25px;
  width: 300px;
`;

const Item = styled.li`
  list-style: none;
`;

const ListSeries = ({ series }) =>
  <ul>{ series.map((serie, index) => <Item key={index}>{serie.name}</Item>) }</ul>

const ListComics = ({ comics }) =>
  <ul>{ comics.map((comic, index) => <Item key={index}>{comic.name}</Item>) }</ul>

const DisplayDataOfHero = ({ hero, closeHero }) => {
  const { name, description, series, comics, thumbnail } = hero[0];
  return (
    <Container>
      <ContainerLeft>
        <img
          role="presentation"
          src={`${thumbnail.path}.${thumbnail.extension}`}
          height="400px"
          width="300px"
        />
        <Button onClick={() => closeHero()}>GO BACK</Button>
      </ContainerLeft>
      <ContainerRight>
        <h2>{name}</h2>
        <p>{description}</p>
        <div>
          <h3>Comics</h3>
          <ListComics comics={comics.items} />
        </div>
        <div>
          <h3>Series</h3>
          <ListSeries series={series.items} />
        </div>
      </ContainerRight>
    </Container>
  )
}

DisplayDataOfHero.propTypes = {
  hero: PropTypes.array.isRequired,
  closeHero: PropTypes.func.isRequired,
}

export default DisplayDataOfHero;
