import React from 'react';
import Form from './styles/Form';
import Modal from './styles/Modal';
import Error from './Error.js';

const FetchUser = (props) => {
    return (
        <Modal isModalOpen={props.isModalOpen}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <Error>{props.fetchErrorMsg}</Error>
                    <Form onSubmit={props.onSubmit}>
                        <fieldset>
                            <h2>Setup Your Experience</h2>
                            <label htmlFor="username">
                                Enter A Username
                                <input
                                    type="text"
                                    name="username"
                                    value={props.username}
                                    placeholder=""
                                    onChange={props.saveToState}
                                />
                            </label>
                        </fieldset>
                        <button type="submit">Launch 🚀</button>
                    </Form>
                </div>
            </div>
        </Modal>
    );
};

export default FetchUser;