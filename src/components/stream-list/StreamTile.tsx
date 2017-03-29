import * as React from 'react';

type Props = {
    stream: Twitch.Stream;
};

class StreamTile extends React.Component<Props, {}> {
    render() {
        return (
            <div>
                <img src={this.props.stream.preview.medium} />
                <h3>{this.props.stream.channel.status}</h3>
                <p>{`${this.props.stream.viewers} viewers on ${this.props.stream.channel.display_name} `}</p>
            </div>
        )
    }
}

export default StreamTile;