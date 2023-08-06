import { User } from './User'


type PostUser = Pick<User, 'id' | 'username' | 'photoUrl'>

interface PostCreator extends PostUser {
    following: boolean
    followingLoading: boolean
}

export interface Post {
    id: string | number
    description: string | null
    location: string | null
    photoUrls: string[]
    creator: PostCreator
    isLiked: boolean
    isSaved: boolean
    lastLikingMutualFollowers: PostUser[] | null
    lastLikingUser: {
        id: string | number
        username: string
    } | null
    likesCount: number
    createdAt: number
}