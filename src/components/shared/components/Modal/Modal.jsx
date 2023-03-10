import React from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css'

const modalRoot = document.querySelector("#modal-root");
export class Modal extends React.Component {
    closeModal = ({ target, currentTarget, code }) => {
        if (target === currentTarget || code === "Escape") {
            this.props.close();
        }
    }

    componentDidMount() {
        document.addEventListener("keydown", this.closeModal);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.closeModal);
    }

    render() {
        const {children} = this.props
        return createPortal(
            <div className={styles.Overlay} onClick={this.closeModal}>
                <div className={styles.Modal}>
                    {children}
                </div>
            </div>,
            modalRoot
        )
    }
}