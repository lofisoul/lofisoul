import React, {Component} from 'react';
import FetchTracks from './FetchTracks';
import FetchUser from './FetchUser';
import User from './User';

class SCApp extends Class {
    state = {
        username: '',
    }
    //get SC user from form
    saveToState = e => {
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit = e => {
        e.preventDefault();
        this.soundCloudResolveUser(this.state.username);
    }

    return (
        <FetchTracks username={username}>
            {({isFetching, errorMsg, randomTracksFromUsers, fiveTracks, isModalOpen, username, onSubmit}) => (
                {!user && <FetchUser onSubmit={onSubmit} ></FetchUser>}
            )}
        </FetchTracks>
    );
};

export default SCApp;