import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      savedCards: [],
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState(
      {
        [name]: value,
      },
      this.validateButton, // Sugestão do Vitu na monitoria: passar a função de validação como callback!
    );
  };

  validateButton = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
    } = this.state;
    // Sugestão do Sumo na monitoria:
    // Armazenar as lógicas em constantes, e só depois alterar o estado com um único if/else, para evitar repetição
    const atr1 = parseInt(cardAttr1, 10);
    const atr2 = parseInt(cardAttr2, 10);
    const atr3 = parseInt(cardAttr3, 10);

    const maxValue = 210;
    const checkSum = (atr1 + atr2 + atr3) <= maxValue; // se true, botão habilita

    const attrArray = [atr1, atr2, atr3];
    const ninety = 90;
    const checkValues = attrArray.every((atr) => atr >= 0 && atr <= ninety); // se true, botão habilita

    const checkName = cardName.length > 0; // se true, botão habilita
    const checkDescr = cardDescription.length > 0; // se true, botão habilita
    const checkRare = cardRare.length > 0; // se true, botão habilita
    const checkImg = cardImage.length > 0; // se true, botão habilita

    if (
      checkSum === true
      && checkValues === true
      && checkName === true
      && checkDescr === true
      && checkImg === true
      && checkRare === true) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  };

  handleSubmit = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    } = this.state;

    const newCard = { // a nova carta é composta do estado atual
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo };

    this.setState((estadoAnterior) => ({
      savedCards: [estadoAnterior.savedCards, newCard], // incorpora nova carta ao estado e altera os campos pedidos
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardRare: 'normal',

    }));
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.handleChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.handleSubmit }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
