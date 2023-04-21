import React from 'react'

export const ToastContext = React.createContext({})

function ToastProvider({ children }) {
    const [toasts, setToasts] = React.useState([])

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
        <ToastContext.Provider
            value={{ toasts, setToasts, addToast, handleDismiss }}
        >
            {children}
        </ToastContext.Provider>
    )
}

export default ToastProvider