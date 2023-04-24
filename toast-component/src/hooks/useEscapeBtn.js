import React from 'react'

const useEscapeKey = (callbackFn) => {
    React.useEffect(() => {
        const handleClose = (e) => {
            if (e.code === 'Escape') {
                callbackFn()
            }
        }

        window.addEventListener('keydown', handleClose)

        return () => window.removeEventListener('keydown', handleClose)
    }, [callbackFn])
}

export default useEscapeKey
