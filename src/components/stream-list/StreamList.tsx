import * as React from 'react';
import StreamTile from './StreamTile';

//Your api key goes here
const apiKey = '';

type Props = {
    game: string;
    onClickHandler: (stream: Twitch.Stream) => void;
};

type State = {
    streams: Twitch.Stream[];
};

class StreamList extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            streams: []
        };
    }

    componentDidMount() {
        fetch(`https://api.twitch.tv/kraken/streams?limit=20&game=${this.props.game}`, {
            method: 'GET',
            headers: {
                'client-id': apiKey
            }
        })
        .then(response => response.json() as Promise<Twitch.Data>)
        .then(response => {
            this.setState({
                streams: response.streams
            });   
        });
    }

    render() {
        return (
            <div>
                {this.state.streams.map((stream) => {
                    return (
                        <div onClick={(event) => this.props.onClickHandler(stream)}>
                            <StreamTile stream={stream} />
                        </div>
                    );
                })}
            </div>
        )
    }
}

export default StreamList;
