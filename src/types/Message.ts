interface BaseMessage {
    id: string | number
    creatorUsername: string
    creatorPhotoUrl: string
    text: string | null
    photoUrl: string | null
    photoOrientation: 'portrait' | 'landscape' | null
    videoUrl: string | null
    reactions: {
        items: string[]
        count: number
    } | null
}

export type ReplyMessage = Pick<BaseMessage, 'id' | 'creatorUsername' | 'text' | 'photoUrl' | 'photoOrientation' | 'videoUrl'>

export interface Message extends BaseMessage {
    reply: ReplyMessage | null
}

