import React from 'react'
import { ToastContext } from '../ToastProvider'

import Toast from '../Toast'
import styles from './ToastShelf.module.css'

function ToastShelf() {
    const { toasts } = React.useContext(ToastContext)

    return (
        <ol
            className={styles.wrapper}
            role="region"
            aria-live="polite"
            aria-label="Notification"
        >
            {toasts.map(({ variant, message, id }) => {
                return (
                    <li className={styles.toastWrapper} key={id}>
                        <Toast variant={variant} id={id}>
                            {message}
                        </Toast>
                    </li>
                )
            })}
        </ol>
    )
}

export default React.memo(ToastShelf)
