import { useEffect } from "react";
import "./Modal.css";

function Modal({

    open = false,

    title = "Modal Title",

    children,

    size = "medium",

    confirmText = "Confirm",

    cancelText = "Cancel",

    showFooter = true,

    closeOnOverlay = true,

    onConfirm,

    onClose

}) {

    useEffect(() => {

        function handleKey(event) {

            if (event.key === "Escape") {

                onClose?.();

            }

        }

        if (open) {

            window.addEventListener("keydown", handleKey);

        }

        return () => {

            window.removeEventListener("keydown", handleKey);

        };

    }, [open, onClose]);

    if (!open) return null;

    function handleOverlayClick(e) {

        if (
            e.target.classList.contains("modal-overlay") &&
            closeOnOverlay
        ) {

            onClose?.();

        }

    }

    return (

        <div

            className="modal-overlay"

            onClick={handleOverlayClick}

        >

            <div

                className={`nova-modal ${size}`}

                role="dialog"

                aria-modal="true"

                aria-labelledby="modal-title"

            >

                <div className="modal-header">

                    <h2 id="modal-title">

                        {title}

                    </h2>

                    <button

                        className="close-button"

                        onClick={onClose}

                        aria-label="Close Modal"

                    >

                        ×

                    </button>

                </div>

                <div className="modal-body">

                    {children}

                </div>

                {

                    showFooter &&

                    <div className="modal-footer">

                        <button

                            className="cancel-btn"

                            onClick={onClose}

                        >

                            {cancelText}

                        </button>

                        <button

                            className="confirm-btn"

                            onClick={onConfirm}

                        >

                            {confirmText}

                        </button>

                    </div>

                }

            </div>

        </div>

    );

}

export default Modal;