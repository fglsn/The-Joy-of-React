import React from 'react'
import Button from '../Button'
import ToastShelf from '../ToastShelf'
import { ToastContext } from '../ToastProvider'
import styles from './ToastPlayground.module.css'

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error']

function ToastPlayground() {
    const { toasts, addToast } = React.useContext(ToastContext)
    const [selectedVariant, setSelectedVariant] = React.useState('notice')
    const [message, setMessage] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!message) return

        addToast(selectedVariant, message)

        setSelectedVariant('notice')
        setMessage('')
    }

    return (
        <div className={styles.wrapper}>
            <header>
                <img alt="Cute toast mascot" src="/toast.png" />
                <h1>Toast Playground</h1>
            </header>
            {toasts.length > 0 && <ToastShelf />}
            <form onSubmit={handleSubmit}>
                <div className={styles.controlsWrapper}>
                    <div className={styles.row}>
                        <label
                            htmlFor="message"
                            className={styles.label}
                            style={{ alignSelf: 'baseline' }}
                        >
                            Message
                        </label>
                        <div className={styles.inputWrapper}>
                            <textarea
                                id="message"
                                className={styles.messageInput}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.label}>Variant</div>
                        <div
                            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                        >
                            {VARIANT_OPTIONS.map((variant) => {
                                return (
                                    <div key={variant}>
                                        <label htmlFor={`variant-${variant}`}>
                                            <input
                                                id={`variant-${variant}`}
                                                type="radio"
                                                checked={
                                                    selectedVariant === variant
                                                }
                                                onChange={(e) =>
                                                    setSelectedVariant(
                                                        e.target.value
                                                    )
                                                }
                                                name={variant}
                                                value={variant}
                                            />
                                            {variant}
                                        </label>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.label} />
                        <div
                            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                        >
                            <Button>Pop Toast!</Button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ToastPlayground
