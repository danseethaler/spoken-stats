import {chunk} from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import {addStatAction} from '../../../redux/actions/games';
import {
  PlayerStat,
  StatType,
  StatTypes,
} from '../../../redux/redux.definitions';
import {colors} from '../../components/theme';
import {Headline5} from '../../components/Typography';
import {getManualRecordedStats} from '../../services/stats_definitions';
import {StatButton} from './components';

interface AddPlayerStatProps {
  game: string;
  player: string;
  onComplete: () => void;
  addPlayerStat: (game: string, stat: StatType) => void;
}

class AddPlayerStat extends React.Component<AddPlayerStatProps> {
  public render() {
    const statDefinitions = getManualRecordedStats();

    return (
      <div style={{display: 'flex'}}>
        {chunk(statDefinitions, 3).map((categories, index) => (
          <div
            key={index}
            style={{display: 'flex', flexDirection: 'column', flex: 1}}
          >
            {categories.map(category => (
              <div key={category.name}>
                <Headline5
                  style={{
                    padding: '2px',
                    backgroundColor: colors.darkCoolGray,
                    color: colors.white,
                  }}
                >
                  {category.name}
                </Headline5>
                {category.stats.map(stat => (
                  <StatButton
                    key={stat.shorthand}
                    onClick={() => {
                      if (this.props.player) {
                        const playerStat: PlayerStat = {
                          type: StatTypes.playerStat,
                          shorthand: stat.shorthand,
                          player: this.props.player,
                        };
                        this.props.addPlayerStat(this.props.game, playerStat);
                        this.props.onComplete();
                      }
                    }}
                  >
                    {stat.name}
                  </StatButton>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default connect(
  null,
  {addPlayerStat: addStatAction}
)(AddPlayerStat);
