import styled from 'styled-components';

const Modal = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: ${props => props.isModalOpen ? 1 : 0};
    visibility: ${props => props.isModalOpen ? 'visible' : 'hidden'};
    transform: ${props => props.isModalOpen ? `scale(1)` : `scale(1.1)`};
    transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;
    .modal-dialog {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: 400px;
        width:100%;
    }
    .modal-content {
        position: relative;
        width: 100%;
        pointer-events: auto;
        background-color: #fff;
        outline: 0;
        max-width:400px;
        padding:3rem 2rem;
    }
`

export default Modal;