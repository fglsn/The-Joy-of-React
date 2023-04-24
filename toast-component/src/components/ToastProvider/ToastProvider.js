import React from 'react'
import useEscapeKey from '../../hooks/useEscapeBtn'
export const ToastContext = React.createContext({})

function ToastProvider({ children }) {
    const [toasts, setToasts] = React.useState([])

    //use useCallback to not regenerate callback on every render
    const handleEscape = React.useCallback(() => {
        setToasts([])
    }, [])
    //custom hook to close all notifications
    useEscapeKey(handleEscape)

    const addToast = (selectedVariant, message) => {
        const newToasts = [
            ...toasts,
            {
                variant: selectedVariant,
                message,
                id: crypto.randomUUID(),
            },
        ]
        setToasts(newToasts)
        console.table([newToasts])
    }

    const handleDismiss = (id) => {
        const newToasts = toasts.filter((toast) => toast.id !== id)
        setToasts(newToasts)
    }

    return (
        <ToastContext.Provider value={{ toasts, addToast, handleDismiss }}>
            {children}
        </ToastContext.Provider>
    )
}

export default ToastProvider
