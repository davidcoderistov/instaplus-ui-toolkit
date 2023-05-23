import React, { useEffect } from 'react'


export function useClickOutside(ref: React.MutableRefObject<Node | null>, cb: (target: Node) => void) {
    useEffect(() => {
        function handleClickOutside(event: DocumentEventMap['mousedown']) {
            if (ref.current && !ref.current?.contains(event.target as Node)) {
                cb(event.target as Node)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [cb, ref])
}