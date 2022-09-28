import React from 'react';
import Form from './components/Form';
import OutsideCardRemovable from './components/OutsideCardRemovable';
import OutsideCardPreview from './components/OutsideCardPreview';
import OutsideCard from './components/OutsideCard';
import Filter from './components/Filter';

class App extends React.Component {
  constructor() {
    super();

    const pbDescription = `Pedro Barros é um skatista brasileiro,
    medalhista olímpico e apontado por muitos como o sucessor de
    Sandro Dias e Bob Burnquist sendo o principal
    representante do país na modalidade Bowl.`;

    const mpDescription = `Nascido em 1996 na cidade de São Paulo. Murilo 
    é considerado um dos principais nomes do skate brasileiro, 
    independente da modalidade, marretando em todos os tipos de terreno.`;

    const rdDescription = `Aos 29 anos, Dexter é visto como um skatista
    irreverente e espontâneo e um dos profissionais mais
    “for fun” da cena do skateboard brasileiro.`;

    const lbDescription = `Leticia Bufoni é uma skatista profissional brasileira,
    considerada um dos maiores nomes da historia do esporte.
    Aos 14 anos mudou-se para de Los Angeles,
    na Califórnia, onde tornou-se uma skatista profissional.`;

    const pbImg = 'https://www.esportelandia.com.br/wp-content/uploads/2020/01/Quem-%C3%A9-Pedro-Barros.jpg';
    const mpImg = 'https://www.olimpiadatododia.com.br/wp-content/uploads/2019/06/Brigando-por-vagas-Murilo-Peres-e-Yndiara-Asp-almejam-T%C3%B3quio.jpg';
    const rdImg = 'https://www.layback.com.br/wp-content/uploads/2017/08/ricardo-dexter.jpg';
    const lbImg = 'https://hardcore.com.br/wp-content/uploads/sites/21/2022/05/WhatsApp-Image-2022-05-19-at-14.36.12-696x499.jpeg';

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      savedCards: [(<OutsideCard
        key={ 0 }
        cardName="Pedro Barros"
        cardDescription={ pbDescription }
        cardAttr1="77"
        cardAttr2="43"
        cardAttr3="90"
        cardImage={ pbImg }
        cardRare="muito raro"
        cardTrunfo={ false }
      />),
      (<OutsideCard
        key={ 1 }
        cardName="Murilo Peres"
        cardDescription={ mpDescription }
        cardAttr1="90"
        cardAttr2="35"
        cardAttr3="85"
        cardImage={ mpImg }
        cardRare="raro"
        cardTrunfo={ false }
      />),
      (<OutsideCard
        key={ 2 }
        cardName="Ricardo Dexter"
        cardDescription={ rdDescription }
        cardAttr1="33"
        cardAttr2="80"
        cardAttr3="51"
        cardImage={ rdImg }
        cardRare="normal"
        cardTrunfo={ false }
      />),
      (<OutsideCard
        key={ 3 }
        cardName="Leticia Bufoni"
        cardDescription={ lbDescription }
        cardAttr1="67"
        cardAttr2="88"
        cardAttr3="55"
        cardImage={ lbImg }
        cardRare="muito raro"
        cardTrunfo={ false }
      />)],
      cardKeys: 4,
      hasTrunfo: false,
      nameFilter: '',
      rareFilter: 'todas',
      trunfoFilter: false,
    };
  }

  onInputChange = (event) => {
    const { name, value, checked, type } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: newValue,
    });
  };

  isSaveButtonDisabled = () => {
    const { cardAttr1, cardAttr2, cardAttr3,
      cardName, cardImage,
      cardDescription, cardRare } = this.state;
    const maxPoints = 210;
    const sumAtt = parseFloat(cardAttr1)
    + parseFloat(cardAttr2) + parseFloat(cardAttr3) <= maxPoints;
    const maxAtt = 90;
    const validateAtt1 = parseFloat(cardAttr1) >= 0 && parseFloat(cardAttr1) <= maxAtt;
    const validateAtt2 = parseFloat(cardAttr2) >= 0 && parseFloat(cardAttr2) <= maxAtt;
    const validateAtt3 = parseFloat(cardAttr3) >= 0 && parseFloat(cardAttr3) <= maxAtt;
    const isEnable = cardName.length > 0
    && cardImage.length > 0
    && cardDescription.length > 0
    && cardRare.length > 0 && sumAtt
    && validateAtt1 && validateAtt2 && validateAtt3;
    return !isEnable;
  };

  excludeBtn = (event) => {
    const { name } = event.target;
    event.preventDefault();
    this.setState((prev) => ({
      savedCards: prev.savedCards.filter((e) => e.key !== name),
      hasTrunfo: prev.savedCards.find((e) => e.key === name)
        .props.cardTrunfo ? false : prev.hasTrunfo,
    }));
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    this.setState((prev) => ({
      savedCards: [...prev.savedCards,
        (<OutsideCardRemovable
          key={ prev.cardKeys }
          cardName={ prev.cardName }
          cardDescription={ prev.cardDescription }
          cardAttr1={ prev.cardAttr1 }
          cardAttr2={ prev.cardAttr2 }
          cardAttr3={ prev.cardAttr3 }
          cardImage={ prev.cardImage }
          cardRare={ prev.cardRare }
          cardTrunfo={ prev.cardTrunfo }
          excludeBtn={ this.excludeBtn }
          cardKeys={ prev.cardKeys }
        />),
      ],
      cardKeys: prev.cardKeys + 1,
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: prev.savedCards.reduce(
        (acc, curr) => (curr.props.cardTrunfo === true ? true : acc),
        false,
      ) || prev.cardTrunfo,
    }));
  };

  handleTrunfoFilter = (event) => {
    const { name, checked } = event.target;
    this.setState({
      [name]: checked,
      nameFilter: '',
      rareFilter: 'todas',
    });
  };

  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, savedCards, hasTrunfo,
      nameFilter, rareFilter, trunfoFilter } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <div className="Form">
          <Form
            onInputChange={ this.onInputChange }
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            isSaveButtonDisabled={ this.isSaveButtonDisabled() }
            onSaveButtonClick={ this.onSaveButtonClick }
            hasTrunfo={ hasTrunfo }
          />
          <OutsideCardPreview
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </div>
        <div className="savedCards">
          <h1>Saved Cards</h1>
          {
            savedCards.filter((e) => (
              e.props.cardName.toLowerCase().includes(nameFilter.toLowerCase())
              && (rareFilter === 'todas' ? true : e.props.cardRare === rareFilter)
              && (trunfoFilter ? e.props.cardTrunfo : true)
            ))
          }

        </div>
        <Filter
          onInputChange={ this.onInputChange }
          nameFilter={ nameFilter }
          rareFilter={ rareFilter }
          trunfoFilter={ trunfoFilter }
          handleTrunfoFilter={ this.handleTrunfoFilter }
        />
      </div>
    );
  }
}

export default App;
