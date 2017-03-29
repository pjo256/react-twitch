import * as React from 'react';
import './styles/App.css';
import StreamList from './components/stream-list/StreamList';
import Stream from './components/stream/Stream';

const logo = require('./logo.svg');

type State = {
    activeStream: Twitch.Stream | null;
}

/*
 * This component could render a list of games from Twitch's API
 * and only show the list of streams when you select a particular game.
*/

//change me
const game = 'The Legend of Zelda: Breath of the Wild';

class App extends React.Component<{}, State> {
    constructor(props) {
        super(props);
        this.state = {
            activeStream: null
        };
    }

    onStreamClick = (stream: Twitch.Stream) => {
        this.setState({
            activeStream: stream
        });
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>React Twitch</h2>
                </div>
                <h1>{game}</h1>
                {this.state.activeStream !== null 
                  ? <Stream stream={this.state.activeStream} />
                  : <StreamList game={game} onClickHandler={this.onStreamClick} />}
            </div>
        );
    }
}

export default App;
