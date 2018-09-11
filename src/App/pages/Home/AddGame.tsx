import {cloneDeep, sortBy} from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import {RouteComponentProps, withRouter} from 'react-router';
import {arrayMove, SortableContainer} from 'react-sortable-hoc';
import {addGameAction} from '../../../redux/actions/games';
import {GameRedux} from '../../../redux/redux.definitions';
import {TextInput} from '../../components/Bits';
import Button, {ButtonTypes} from '../../components/Button';
import {Headline5, Paragraph3} from '../../components/Typography';
import players, {PlayerType} from '../../services/players';
import {getUniqueId} from '../../services/unique_id';
import {PlayerSortHandler, SortPlayer} from './components';
import {PlayersContainer} from './components';

interface AddGameProps extends RouteComponentProps<any> {
  addGame: (game: GameRedux) => void;
}

interface AddGameState {
  formError: null | string;
  players: PlayerType[];
}

class AddGame extends React.Component<AddGameProps, AddGameState> {
  public state = {
    formError: null,
    players: sortBy(players, 'name'),
  };

  private opponentRef: React.RefObject<HTMLInputElement>;
  private setRef: React.RefObject<HTMLInputElement>;
  private serveFirstRef: React.RefObject<HTMLInputElement>;

  constructor(props) {
    super(props);

    this.opponentRef = React.createRef();
    this.setRef = React.createRef();
    this.serveFirstRef = React.createRef();
  }

  public componentDidMount() {
    this.opponentRef.current.select();
  }

  public reorderPlayers = ({oldIndex, newIndex}) => {
    const orderedPlayers = arrayMove(this.state.players, oldIndex, newIndex);
    this.setState({players: orderedPlayers});
  };

  public validateForm = () => {
    const gameData = this.getGameData();
    if (!gameData.opponent) {
      this.setState({formError: 'Please add an opponent.'});
      return false;
    }
    if ([1, 2, 3, 4, 5].indexOf(gameData.set) === -1) {
      this.setState({formError: 'Select a game number between 1 and 5'});
      return false;
    }
    if (gameData.lineup.length !== 6) {
      this.setState({formError: 'Lineup should have 6 players'});
      return false;
    }
    return true;
  };

  public getGameData = (): GameRedux => {
    const opponent = this.opponentRef.current.value;
    const serveFirst = this.serveFirstRef.current.checked;
    const set = parseInt(this.setRef.current.value, 10);
    const lineup = this.state.players.slice(0, 6).map(({name}) => name);

    return {
      id: getUniqueId(),
      opponent,
      set,
      lineup,
      stats: [],
      rotation: cloneDeep(lineup),
      serveFirst,
    };
  };

  public render() {
    const {history, addGame} = this.props;
    const SP = ({items}) => (
      <PlayersContainer>
        {items.map((player, index) => (
          <SortPlayer key={player.jersey} sortIndex={index} index={index}>
            {player.name}
            <PlayerSortHandler>:::</PlayerSortHandler>
          </SortPlayer>
        ))}
      </PlayersContainer>
    );

    const SortablePlayers = SortableContainer(SP);

    return (
      <form onSubmit={e => e.preventDefault()}>
        <Paragraph3>Opponent</Paragraph3>
        <TextInput innerRef={this.opponentRef} />

        <Paragraph3>Set Number</Paragraph3>
        <TextInput innerRef={this.setRef} type="number" />

        <Paragraph3>Serve First</Paragraph3>
        <input ref={this.serveFirstRef} type="checkbox" />

        <Headline5>Lineup</Headline5>

        <SortablePlayers
          onSortEnd={this.reorderPlayers}
          lockAxis="y"
          useDragHandle
          items={this.state.players}
        />
        <Button
          type={ButtonTypes.primary}
          onClick={() => {
            if (this.validateForm()) {
              const gameData = this.getGameData();
              addGame(gameData);
              history.push('/game/' + gameData.id);
            }
          }}
        >
          Add Set
        </Button>

        {this.state.formError && (
          <React.Fragment>
            <hr />
            <h5>{this.state.formError}</h5>
          </React.Fragment>
        )}
      </form>
    );
  }
}

export default withRouter(
  connect(
    ({games}) => ({games}),
    {
      addGame: addGameAction,
    }
  )(AddGame)
);
