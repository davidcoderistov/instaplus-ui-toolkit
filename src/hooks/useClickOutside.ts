import React, { useEffect } from 'react'


export function useClickOutside(ref: React.MutableRefObject<Node | null>, cb: () => void) {
    useEffect(() => {
        function handleClickOutside(event: DocumentEventMap['mousedown']) {
            if (ref.current && !ref.current?.contains(event.target as Node)) {
                cb()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [cb, ref])
}