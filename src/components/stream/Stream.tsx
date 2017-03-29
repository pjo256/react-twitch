import * as React from 'react';

type Props = {
    stream: Twitch.Stream;
}

const Stream = (props: Props) => {
    return (
        <div>
            <iframe
                src={`https://player.twitch.tv/?channel=${props.stream.channel.name}`}
                height="720"
                width="1280"
                frameBorder="0"
                scrolling="no"
                allowFullScreen={true}>
            </iframe>
        </div>
    );
}

export default Stream;