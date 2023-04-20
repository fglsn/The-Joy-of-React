import React from 'react'

import Toast from '../Toast'
import styles from './ToastShelf.module.css'

function ToastShelf({ toasts, setToasts }) {
    const handleDismiss = (id) => {
        const newToasts = toasts.filter((toast) => toast.id !== id)
        setToasts(newToasts)
    }

    return (
        <ol className={styles.wrapper}>
            {toasts.map(({ variant, message, id }) => {
                return (
                    <li className={styles.toastWrapper} key={id}>
                        <Toast variant={variant} handleDismiss={handleDismiss} id={id}>{message}</Toast>
                    </li>
                )
            })}
        </ol>
    )
}

export default React.memo(ToastShelf)
