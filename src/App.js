import React from 'react';
import Form from './components/Form';
import OutsideCardRemovable from './components/OutsideCardRemovable';
import OutsideCardPreview from './components/OutsideCardPreview';
import OutsideCard from './components/OutsideCard';
import Filter from './components/Filter';
import HandCard from './components/HandCard';
import Game from './components/Game';
import Battle from './components/Battle';
import Result from './components/Result';

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
    const lbDescription = `Leticia Bufoni é uma skatista brasileira,
    considerada um dos maiores nomes da historia do esporte.
    Aos 14 anos mudou-se para de Los Angeles,
    na Califórnia, onde tornou-se uma skatista profissional.`;
    const lfDescription = `Luiz Francisco, também conhecido como Luizinho, é um skatista profissional brasileiro. Ele competiu em várias edições do Campeonato Mundial de Skate Park masculino, levando a medalha de prata em 2019.`;
    const ipDescription = `Recordista do aéreo mais alto da história dos X-Games, Italo Penarrubia é considerado um dos skatistas mais ousados e versáteis da atualidade!`;
    const dvDescription = `Dora Varella é uma skatista profissional brasileira na categoria park. Ela foi uma das três atletas selecionadas para representar o Brasil na sua modalidade nos Jogos Olímpicos de Verão de 2020.`;
    const rlDescription = `Rayssa Leal conquistou a medalha de prata no street nos Jogos Olímpicos de Tóquio e encantou o mundo ao torcer pelas outras atletas durante a disputa, com isso, ela venceu o The Visa Awards.`;
    const fmDescription = `Ele tem apenas 15 anos, mas já encanta andando entre os profissionais do mais alto nível do skate mundial. O jovem Filipe Mota é um dos representantes do Brasil no Super Crown.`;
    const loDescription = `Luan Vilanova de Oliveira mais conhecido como Luan Oliveira é um skatista profissional brasileiro e um dos mais influentes skatistas da sua geração de skaters no Brasil.`;
    const moDescription = `O skatista curitibano Miguel Oliveira, de apenas 16 anos, que foi apresentado ao mundo inteiro ao ficar em 4º lugar no mundial Vans Park Series, que rolou na pista da Costeira, em Floripa.`;
    const kkDescription = `Apenas 14 anos de idade e já com três vídeo partes. “New Bone” (“osso novo” na tradução), a mais nova delas, traz um Kalani amadurecido pela experiência, por uma lesão, pelas viagens.`;

    const pbImg = 'https://www.esportelandia.com.br/wp-content/uploads/2020/01/Quem-%C3%A9-Pedro-Barros.jpg';
    const mpImg = 'https://www.olimpiadatododia.com.br/wp-content/uploads/2019/06/Brigando-por-vagas-Murilo-Peres-e-Yndiara-Asp-almejam-T%C3%B3quio.jpg';
    const rdImg = 'https://www.layback.com.br/wp-content/uploads/2017/08/ricardo-dexter.jpg';
    const lbImg = 'https://hardcore.com.br/wp-content/uploads/sites/21/2022/05/WhatsApp-Image-2022-05-19-at-14.36.12-696x499.jpeg';
    const lfImg = 'https://scontent.fcgh23-1.fna.fbcdn.net/v/t31.18172-8/27788834_1937471989614135_8055725068231980050_o.jpg?_nc_cat=103&ccb=1-7&_nc_sid=9267fe&_nc_ohc=xZAvCRm6EQAAX9ItV0X&_nc_ht=scontent.fcgh23-1.fna&oh=00_AT9t_d4loYHAsSalMlrFO_IfPv9QI0IoDtCgSzhRG_abYQ&oe=63742D89';
    const ipImg = 'https://cdn.abcdoabc.com.br/Italo-Penarrubia-1_5804072f.jpg';
    const dvImg = 'https://hardcore.com.br/wp-content/uploads/sites/21/2022/09/MV4M4502-1-scaled-e1663344008638-696x466.jpg';
    const rlImg = 'https://www.nikesb.com/assets/imager/uploads/instagram/57887/Screen-Shot-2021-10-22-at-3.19.26-PM_fddb4b8cf8eb5e13f19e28f3ace2eae3.png';
    const fmImg = 'https://www.onsk8.com/wp-content/uploads/2022/08/felipe-mota-primite-skateboards-skate-team-2022.jpg';
    const loImg = 'https://s2.glbimg.com/IJEumL-xP5CuS1_w8hxZfymi8Z4=/0x0:5760x3240/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2020/w/L/M28MVrRCKgDl5up6lqow/ep-10-03.jpg';
    const moImg = 'https://3127bd09bc5dbc82e90b-2f84b28f704f9f5fbcd9c873e843c0af.ssl.cf1.rackcdn.com/images/photoGalleries/2016/2016-bra-floripa-finals-day-photos/_1000x700_fit_center-center_85_none/vps16_bra_Final_Miguel-Oliveira_helge.jpg';
    const kkImg = 'https://cemporcentoskate.com.br/wp-content/uploads/2019/05/ka11ani-konig.jpg';

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
        key={0}
        cardName="Pedro Barros"
        cardDescription={pbDescription}
        cardAttr1="77"
        cardAttr2="43"
        cardAttr3="90"
        cardImage={pbImg}
        cardRare="muito raro"
        cardTrunfo={false}
      />),
      (<OutsideCard
        key={1}
        cardName="Murilo Peres"
        cardDescription={mpDescription}
        cardAttr1="90"
        cardAttr2="35"
        cardAttr3="85"
        cardImage={mpImg}
        cardRare="raro"
        cardTrunfo={false}
      />),
      (<OutsideCard
        key={2}
        cardName="Ricardo Dexter"
        cardDescription={rdDescription}
        cardAttr1="33"
        cardAttr2="80"
        cardAttr3="51"
        cardImage={rdImg}
        cardRare="normal"
        cardTrunfo={false}
      />),
      (<OutsideCard
        key={3}
        cardName="Leticia Bufoni"
        cardDescription={lbDescription}
        cardAttr1="67"
        cardAttr2="88"
        cardAttr3="55"
        cardImage={lbImg}
        cardRare="muito raro"
        cardTrunfo={false}
      />),
      (<OutsideCard
        key={4}
        cardName="Luis Francisco"
        cardDescription={lfDescription}
        cardAttr1="70"
        cardAttr2="59"
        cardAttr3="81"
        cardImage={lfImg}
        cardRare="raro"
        cardTrunfo={false}
      />),
      (<OutsideCard
        key={5}
        cardName="Italo Penarrubia"
        cardDescription={ipDescription}
        cardAttr1="77"
        cardAttr2="29"
        cardAttr3="65"
        cardImage={ipImg}
        cardRare="normal"
        cardTrunfo={false}
      />),
      (<OutsideCard
        key={6}
        cardName="Dora Varella"
        cardDescription={dvDescription}
        cardAttr1="51"
        cardAttr2="17"
        cardAttr3="59"
        cardImage={dvImg}
        cardRare="normal"
        cardTrunfo={false}
      />),
      (<OutsideCard
        key={7}
        cardName="Rayssa Leal"
        cardDescription={rlDescription}
        cardAttr1="70"
        cardAttr2="90"
        cardAttr3="50"
        cardImage={rlImg}
        cardRare="muito raro"
        cardTrunfo={false}
      />),
      (<OutsideCard
        key={8}
        cardName="Filipe Mota"
        cardDescription={fmDescription}
        cardAttr1="51"
        cardAttr2="86"
        cardAttr3="53"
        cardImage={fmImg}
        cardRare="raro"
        cardTrunfo={false}
      />),
      (<OutsideCard
        key={9}
        cardName="Luan de Oliveira"
        cardDescription={loDescription}
        cardAttr1="63"
        cardAttr2="87"
        cardAttr3="60"
        cardImage={loImg}
        cardRare="raro"
        cardTrunfo={false}
      />),
      (<OutsideCard
        key={10}
        cardName="Miguel Oliveira"
        cardDescription={moDescription}
        cardAttr1="62"
        cardAttr2="51"
        cardAttr3="64"
        cardImage={moImg}
        cardRare="normal"
        cardTrunfo={false}
      />),
      (<OutsideCard
        key={11}
        cardName="Kalani Konig"
        cardDescription={kkDescription}
        cardAttr1="65"
        cardAttr2="61"
        cardAttr3="66"
        cardImage={kkImg}
        cardRare="normal"
        cardTrunfo={false}
      />)],
      cardKeys: 12,
      hasTrunfo: false,
      nameFilter: '',
      rareFilter: 'todas',
      trunfoFilter: false,
      showHome: true,
      shuffledCards: [],
      userCards: [],
      rivalCards: [],
      userSelectedCard: {},
      rivalSelectedCard: {},
      userTurn: true,
      showHand: false,
      showGame: false,
      showBattle: false,
      showResult: false,
      attChosen: 0,
      round: 0,
      wins: 0,
      loses: 0,
    };
  }

  componentDidMount() {
    if (localStorage.getItem('card')) {
      const storageCards = JSON.parse(localStorage.getItem('card'));
      const storageRemaped = storageCards.map((e, i) => (
        <OutsideCardRemovable
          key={this.state.cardKeys + i}
          cardName={e.cardName}
          cardDescription={e.cardDescription}
          cardAttr1={e.cardAttr1}
          cardAttr2={e.cardAttr2}
          cardAttr3={e.cardAttr3}
          cardImage={e.cardImage}
          cardRare={e.cardRare}
          cardTrunfo={e.cardTrunfo}
          excludeBtn={this.excludeBtn}
          cardKeys={this.state.cardKeys + i}
        />
      ));
      const newCards = [...this.state.savedCards, ...storageRemaped];
      this.setState({
        savedCards: newCards,
        hasTrunfo: newCards.reduce(
          (acc, curr) => (curr.props.cardTrunfo === true ? true : acc), false),
        cardKeys: newCards.length,
      });
    }
  };

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
    const storageCards = JSON.parse(localStorage.getItem('card'));
    const newStorageCards = storageCards.filter((e) => `${e.key}` !== name);
    localStorage.setItem('card', JSON.stringify(newStorageCards));
    this.setState((prev) => ({
      savedCards: prev.savedCards.filter((e) => e.key !== name),
      hasTrunfo: prev.savedCards.find((e) => e.key === name)
        .props.cardTrunfo ? false : prev.hasTrunfo,
    }));
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const storageCards = JSON.parse(localStorage.getItem('card'));
    console.log(storageCards);
    const card = {
      key: this.state.cardKeys,
      cardName: this.state.cardName,
      cardDescription: this.state.cardDescription,
      cardAttr1: this.state.cardAttr1,
      cardAttr2: this.state.cardAttr2,
      cardAttr3: this.state.cardAttr3,
      cardImage: this.state.cardImage,
      cardRare: this.state.cardRare,
      cardTrunfo: this.state.cardTrunfo,
    };
    const newStorageCards = storageCards ? [...storageCards, card] : [card];
    localStorage.setItem('card', JSON.stringify(newStorageCards));

    this.setState((prev) => ({
      savedCards: [...prev.savedCards,
      (<OutsideCardRemovable
        key={prev.cardKeys}
        cardName={prev.cardName}
        cardDescription={prev.cardDescription}
        cardAttr1={prev.cardAttr1}
        cardAttr2={prev.cardAttr2}
        cardAttr3={prev.cardAttr3}
        cardImage={prev.cardImage}
        cardRare={prev.cardRare}
        cardTrunfo={prev.cardTrunfo}
        excludeBtn={this.excludeBtn}
        cardKeys={prev.cardKeys}
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

  startGame = () => {
    this.setState((prev) => ({
      showHome: false,
      showGame: true,
      showHand: true,
      shuffledCards: [...prev.savedCards]
        .sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5),
    }), () => {
      this.setState((prev) => ({
        userCards: [...prev.shuffledCards].filter((_e, i) => i >= 0 && i <= 5).map((element) => ({
          att: [element.props.cardAttr1, element.props.cardAttr2, element.props.cardAttr3],
          name: element.props.cardName,
          trunfo: element.props.cardTrunfo,
          image: element.props.cardImage,
          id: element.key,
        })),
        rivalCards: [...prev.shuffledCards].filter((_e, i) => i >= 6 && i <= 11).map((element) => ({
          att: [element.props.cardAttr1, element.props.cardAttr2, element.props.cardAttr3],
          name: element.props.cardName,
          trunfo: element.props.cardTrunfo,
          image: element.props.cardImage,
          id: element.key,
        })),
      }));
    });
  };

  clickMiniCard = ({ target }) => {
    const { userCards, rivalCards, attChosen } = this.state;
    const userCard = userCards.find((e) => `${e.id}` === `${target.id}`);
    const rivalCard = rivalCards.reduce((acc, curr) => acc.att[attChosen] > curr.att[attChosen] ? acc : curr);
    const winRound = userCard.trunfo ? 1 : rivalCard.trunfo ? 0 : userCard.att[attChosen] > rivalCard.att[attChosen] ? 1 : 0;
    const loseRound = rivalCard.trunfo ? 1 : userCard.trunfo ? 0 : userCard.att[attChosen] < rivalCard.att[attChosen] ? 1 : 0;
    this.setState((prev) => ({
      showBattle: true,
      showHand: false,
      userSelectedCard: userCard,
      rivalSelectedCard: rivalCard,
      round: prev.round + 1,
      wins: prev.wins + winRound,
      loses: prev.loses + loseRound,
      userCards: prev.userCards.filter((e) => e.id !== userCard.id),
      rivalCards: prev.rivalCards.filter((e) => e.id !== rivalCard.id),
    }));
  };

  nextRound = () => {
    const randomNum = Math.floor(Math.random() * 3);

    this.setState((prev) => ({
      showBattle: false,
      showHand: true,
      userTurn: !prev.userTurn,
      attChosen: prev.userTurn ? randomNum : prev.attChosen,
    }));
  };

  endMatch = () => {
    this.setState({
      showBattle: false,
      showResult: true,
    });
  };

  returnHome = () => {
    this.setState({
      showHome: true,
      userTurn: true,
      showHand: false,
      showGame: false,
      showBattle: false,
      showResult: false,
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      nameFilter: '',
      rareFilter: 'todas',
      trunfoFilter: false,
      attChosen: 0,
      round: 0,
      wins: 0,
      loses: 0,
    });
  };

  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, savedCards, hasTrunfo,
      nameFilter, rareFilter, trunfoFilter, showHome,
      showHand, userCards, attChosen, showGame,
      wins, loses, round, userTurn, showBattle, userSelectedCard,
      rivalSelectedCard, showResult } = this.state;

    const home = (<div>
      <h1>Tryunfo</h1>
      <div className="Form">
        <Form
          onInputChange={this.onInputChange}
          cardName={cardName}
          cardDescription={cardDescription}
          cardAttr1={cardAttr1}
          cardAttr2={cardAttr2}
          cardAttr3={cardAttr3}
          cardImage={cardImage}
          cardRare={cardRare}
          cardTrunfo={cardTrunfo}
          isSaveButtonDisabled={this.isSaveButtonDisabled()}
          onSaveButtonClick={this.onSaveButtonClick}
          hasTrunfo={hasTrunfo}
        />
        <OutsideCardPreview
          cardName={cardName}
          cardDescription={cardDescription}
          cardAttr1={cardAttr1}
          cardAttr2={cardAttr2}
          cardAttr3={cardAttr3}
          cardImage={cardImage}
          cardRare={cardRare}
          cardTrunfo={cardTrunfo}
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
        onInputChange={this.onInputChange}
        nameFilter={nameFilter}
        rareFilter={rareFilter}
        trunfoFilter={trunfoFilter}
        handleTrunfoFilter={this.handleTrunfoFilter}
      />
      <div className='gamebtn'>
        <button type='button' onClick={this.startGame} className="btn41-43 btn-41">
          Jogar
        </button>
      </div>
    </div>);

    const myTurn = (
      <>
        <h2 className='myTurnTitle'>Sua vez: Escolha o atributo</h2>
        <select
          id="attChosen"
          name="attChosen"
          value={attChosen}
          onChange={this.onInputChange}
        >
          <option value={0}>Speed</option>
          <option value={1}>Street</option>
          <option value={2}>Park</option>
        </select>
      </>
    );

    const atributes = ['speed', 'street', 'park'];

    const cpuTurn = (
      <h2>
        Vez da CPU: Atributo escolhido <span className='cpuAtt'>{atributes[attChosen]}</span>
      </h2>
    );

    const hand = (<div className='handBox'>
      <div className='handInput'>
        <h1>Rodada {round === 5 ? 'FINAL!' : round + 1}</h1>
        {userTurn ? myTurn : cpuTurn}
      </div>
      {userCards?.map((e) => (<HandCard card={e} key={e.id} hoverCard={true} clickMiniCard={this.clickMiniCard} idOn={e.id} />))}
    </div>);

    return (
      <>
        {showHome && home}
        {showGame && <Game wins={wins} loses={loses} round={round} />}
        {showResult && <Result wins={wins} loses={loses} returnHome={this.returnHome} />}
        {showHand && hand}
        {showBattle && <Battle
          userCard={userSelectedCard}
          rivalCard={rivalSelectedCard}
          win={userSelectedCard['att'][attChosen] > rivalSelectedCard['att'][attChosen]}
          lose={userSelectedCard['att'][attChosen] < rivalSelectedCard['att'][attChosen]}
          nextRound={this.nextRound}
          round={round}
          endMatch={this.endMatch}
        />}
      </>
    );
  }
}

export default App;
