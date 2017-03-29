declare namespace Twitch {
    export type Data = {
        streams: Stream[];
    };

    export type Stream = {
        _id: number;
        viewers: number;
        game: string;
        channel: Channel;
        preview: {
            medium: string;
        }
    }

    export type Channel = {
        status: string;
        _id: number;
        name: string;
        followers: number;
        views: number;
        display_name: string;
    }
}