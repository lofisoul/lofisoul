import React, { Component } from 'react';
import styled from 'styled-components';
import {scAppId, scUser} from '../config';
import {shuffle} from '../lib/utils';

class SCList extends Component {
    state = {
        isFetching: false,
        fiveTracks: null,
        randomTracksFromUsers: null
    }
    
    initTrack = async () => {
        //initialize SC
        this.setState({isFetching:true})
        
        const response = await SC.get(`/users/${scUser.id}/favorites`,{
            limit:1000,
            linked_partitioning:1
        })

        const sortedTracks = shuffle(response.collection,5);

        //run logic for getting random song based on users that liked 5 sorted tracks
        let randomPlaylist = await Promise.all(sortedTracks.map(async(item) => {
            
            let newItem = await this.generateRandomPlaylist(item);
            return newItem
        }))
        
        
        
        this.setState({isFetching:false, fiveTracks:sortedTracks, randomTracksFromUsers: randomPlaylist})
        const track = response.collection[27];
        const trackSrc = `${track.stream_url}?client_id=${scAppId}`;
        this.audio = new Audio();
        this.audio.crossOrigin = "anonymous";
        this.audio.src = trackSrc;
        this.context = new (window.AudioContext || window.webkitAudioContext)();
        this.source = this.context.createMediaElementSource(this.audio);

        this.analyser = this.context.createAnalyser();
        this.source.connect(this.analyser);
        this.analyser.connect(this.context.destination);
        this.frequency_array = new Uint8Array(this.analyser.frequencyBinCount);        
    }

    generateRandomPlaylist = async (track) => {
        const usersWhoLiked = await SC.get(`/tracks/${track.id}/favoriters`,{
            limit: 1000,
            linked_partitioning:1
        })
 
        let userArr = usersWhoLiked.collection;
        const arrayUsersFaves = userArr.filter(user=> user.public_favorites_count>0)
        //sort users without playlists
        //TODO::need to figure out a way to filter out user
        let randomUser = shuffle(arrayUsersFaves,1)[0];
        //get first list of random users
        const userFaves = await SC.get(`/users/${randomUser.id}/favorites`,{
            limit: 1000,
            linked_partitioning:1
        });
        const randomTrack = shuffle(userFaves.collection,1)[0];
        const randomObj = {
            referral: track,
            user: randomUser,
            track: randomTrack
        }
        return randomObj
    }

    componentDidMount = () => {
        SC.initialize({
            client_id: scAppId,
            redirect_uri: 'http://jambox.thatdudeartoo.com/callback.html'
        });
        this.initTrack();
    }
    render() {
        const {isFetching, fiveTracks, randomTracksFromUsers} = this.state;
        if(isFetching) {
            return <div>Fetching...</div>
         }
        return (
            <div>
                <div style={{borderBottom: '1px solid gray', paddingBottom: '20px'}}>
                {(fiveTracks) ? fiveTracks.map(track=>{
                    return <div><p key={track.id}><strong>{track.user.username}</strong><br/>: {track.title}</p>
                    <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${track.id}`}></iframe>
                    </div>
                }) : ''}
                </div>
                <div>
                {(randomTracksFromUsers) ? randomTracksFromUsers.map(item=>{
                    return <div key={item.track.id}>
                        <p><strong>User:</strong> {item.user.username}</p>
                        <p>Song: {item.track.title}</p>
                        <p>Referral: {item.referral.title}</p>
                        <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${item.track.id}`}></iframe>
                    </div>
                }) : 'Error'}
                </div>
            </div>
        )
    }
}

export default SCList;