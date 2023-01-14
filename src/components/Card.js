import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <section className="card">
        <h4>Pré-visualização</h4>
        <div className="preview">
          <p data-testid="name-card">{ cardName }</p>
          <img data-testid="image-card" src={ cardImage } alt={ cardName } />
          <p data-testid="description-card">{ cardDescription }</p>
          <p data-testid="attr1-card">{`Bilheteria: ${cardAttr1}`}</p>
          <p data-testid="attr2-card">{`Premiações: ${cardAttr2}`}</p>
          <p data-testid="attr3-card">{`Músicas chiclete: ${cardAttr3}`}</p>
          <p data-testid="rare-card">{ cardRare }</p>
          {cardTrunfo === true && <p data-testid="trunfo-card">Super Trunfo</p>}
        </div>

      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;

// sobre a linha 26: é uma renderização condicional com apenas uma condição: renderizar apenas se o valor de cardTrunfo for true. Por isso o uso do operado &&.
