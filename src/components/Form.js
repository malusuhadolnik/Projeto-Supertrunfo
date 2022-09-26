import React from 'react';

class Form extends React.Component {
  render() {
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
            />
          </label>
          <br />
          <label htmlFor="rarity">
            Raridade
            <select data-testid="rare-input" id="rarity">
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
            />
          </label>
          <br />
          <button id="submit-btn" type="submit" data-testid="save-button">Salvar</button>
        </form>
      </section>
    );
  }
}

export default Form;
