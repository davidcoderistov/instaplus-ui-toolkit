import { useMemo } from 'react'
import { getChatMembers } from '../utils'


export function useChatMembers(chatMembers: { id: string | number, username: string, photoUrl: string | null }[], authUserId: string | number) {

    const members = useMemo(() => {
        if (chatMembers.length > 2) {
            const authIndex = chatMembers.findIndex(chatMember => chatMember.id === authUserId)
            if (authIndex > -1) {
                const authUser = chatMembers[authIndex]
                const newChatMembers = Array.from(chatMembers)
                newChatMembers.splice(authIndex, 1)
                newChatMembers.push(authUser)
                return newChatMembers
            }
            return chatMembers
        }
        return chatMembers.filter(chatMember => chatMember.id !== authUserId)
    }, [chatMembers, authUserId])

    const usernames = useMemo(() => {
        return getChatMembers(
            members.map(chatMember => chatMember.username),
            members.length,
            2,
        )
    }, [members])

    const photoUrls = useMemo(() => {
        return members.map(chatMember => chatMember.photoUrl)
    }, [members])

    return [usernames, photoUrls] as const
}