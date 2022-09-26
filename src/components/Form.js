import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <section className="the-form">
        <h4>Adicione nova carta</h4>
        <form>
          <label htmlFor="name">
            Nome
            <input
              data-testid="name-input"
              id="name"
              type="text"
              name="name"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="description">
            Descrição
            <input
              data-testid="description-input"
              id="description"
              type="textarea"
              name="description"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="attr1">
            Attr1
            <input
              data-testid="attr1-input"
              id="attr1"
              type="number"
              name="attr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="attr2">
            Attr2
            <input
              data-testid="attr2-input"
              id="attr2"
              type="number"
              name="attr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="attr3">
            Attr3
            <input
              data-testid="attr3-input"
              id="attr3"
              type="number"
              name="attr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="image">
            Imagem
            <input
              data-testid="image-input"
              id="image"
              type="text"
              name="image"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="rarity">
            Raridade
            <select
              data-testid="rare-input"
              id="rarity"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option id="normal" value="normal">normal</option>
              <option id="raro" value="raro">raro</option>
              <option id="muito raro" value="muito raro">muito raro</option>
            </select>
          </label>
          <br />
          <label htmlFor="trunfo">
            Super Trunfo
            <input
              data-testid="trunfo-input"
              id="trunfo"
              type="checkbox"
              name="trunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <button
            id="submit-btn"
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </section>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
