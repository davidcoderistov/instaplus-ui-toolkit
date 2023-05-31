export function getChatMembers(usernames: string[], membersCount: number, showCount = 5) {
    if (usernames.length > showCount) {
        const firstFiveUsers = usernames.slice(0, showCount).join(', ')
        const othersCount = membersCount - showCount
        if (othersCount > 0) {
            return `${firstFiveUsers}, ${othersCount} ${othersCount > 1 ? 'others' : 'other'}`
        }
        return firstFiveUsers
    }
    return usernames.join(', ')
}