import moment from 'moment'


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

export function formatNumber(number: number) {
    if (number >= 1000) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
    return number.toString()
}

export const getTimeElapsed = (timestamp: number, granularity?: 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks') => {
    const now = moment()
    const ago = moment(timestamp)

    let granularityOrder
    switch (granularity) {
        case 'minutes':
            granularityOrder = 1
            break
        case 'hours':
            granularityOrder = 2
            break
        case 'days':
            granularityOrder = 3
            break
        case 'weeks':
            granularityOrder = 4
            break
        default:
            granularityOrder = 0
    }

    if (now.diff(ago, 'seconds') < 1 && 0 >= granularityOrder) {
        return 'Now'
    } else if (now.diff(ago, 'minutes') < 1 && 0 >= granularityOrder) {
        return `${now.diff(ago, 'seconds')}s`
    } else if (now.diff(ago, 'minutes') < 60 && 1 >= granularityOrder) {
        return `${now.diff(ago, 'minutes')}m`
    } else if (now.diff(ago, 'hours') < 24 && 2 >= granularityOrder) {
        return `${now.diff(ago, 'hours')}h`
    } else if (now.diff(ago, 'days') < 7 && 3 >= granularityOrder) {
        return `${now.diff(ago, 'days')}d`
    } else {
        return `${now.diff(ago, 'weeks')}w`
    }
}