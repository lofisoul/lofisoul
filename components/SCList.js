import React, {Component} from 'react';
import styled from 'styled-components';
import SCPlayer from './SCPlayer';
import FetchUser from './FetchUser';
import User from './User';
import {scAppId, scUser} from '../config';
import {shuffle} from '../lib/utils';

class SCList extends Component {
	constructor() {
		super();
		this.state = {
			isFetching: false,
			doneFetching: false,
			fiveTracks: null,
			randomTracksFromUsers: null,
			isModalOpen: true,
			username: '',
			user: null,
			fetchErrorMsg: '',
			currentTrack: '',
			tracks: null,
		};
	}

	//function to resolve soundcloud user
	soundCloudResolveUser = async user => {
		try {
			const userToResolve = await SC.resolve(
				`https://soundcloud.com/${user}`,
			);
			const response = await SC.get(
				`/users/${userToResolve.id}/favorites`,
				{
					limit: 1000,
					linked_partitioning: 1,
				},
			);

			if (response.collection.length < 5) {
				this.setState({
					fetchErrorMsg: `You don't have enough likes. Try favoriting some tracks on soundcloud!`,
				});
				return;
			}
			this.initTrack(userToResolve);
			this.setState({user: userToResolve, isModalOpen: false});
		} catch (e) {
			const errorMsg =
				e.status === 404
					? `Whoops! That user doesn't exist!`
					: e.message;
			this.setState({fetchErrorMsg: errorMsg});
		}
	};

	//get SC user from form
	saveToState = e => {
		this.setState({[e.target.name]: e.target.value});
	};

	onSubmit = e => {
		e.preventDefault();
		this.soundCloudResolveUser(this.state.username);
	};

	initTrack = async user => {
		//initialize SC
		this.setState({isFetching: true});

		const response = await SC.get(`/users/${user.id}/favorites`, {
			limit: 1000,
			linked_partitioning: 1,
		});

		const sortedTracks = shuffle(response.collection, 5);

		//run logic for getting random song based on users that liked 5 sorted tracks
		let randomPlaylist = await Promise.all(
			sortedTracks.map(async item => {
				let newItem = await this.generateRandomPlaylist(item);
				return newItem;
			}),
		);

		this.setState({
			isFetching: false,
			fiveTracks: sortedTracks,
			randomTracksFromUsers: randomPlaylist,
		});
	};

	generateRandomPlaylist = async track => {
		const usersWhoLiked = await SC.get(`/tracks/${track.id}/favoriters`, {
			limit: 1000,
			linked_partitioning: 1,
		});

		let userArr = usersWhoLiked.collection;
		const arrayUsersFaves = userArr.filter(
			user => user.public_favorites_count > 0,
		);
		//sort users without playlists
		//TODO::need to figure out a way to filter out user
		let randomUser = shuffle(arrayUsersFaves, 1)[0];
		//get first list of random users
		const userFaves = await SC.get(`/users/${randomUser.id}/favorites`, {
			limit: 1000,
			linked_partitioning: 1,
		});
		const randomTrack = shuffle(userFaves.collection, 1)[0];
		const randomObj = {
			referral: track,
			user: randomUser,
			track: randomTrack,
		};
		return randomObj;
	};

	componentDidMount = () => {
		SC.initialize({
			client_id: scAppId,
			redirect_uri: 'http://jambox.thatdudeartoo.com/callback.html',
		});
	};
	render() {
		const {
			isFetching,
			fiveTracks,
			randomTracksFromUsers,
			isModalOpen,
			username,
			fetchErrorMsg,
			doneFetching,
			user,
		} = this.state;
		return (
			<>
				{fiveTracks && <SCPlayer currentTrack={fiveTracks[0]} />}
				<FetchUser
					onSubmit={this.onSubmit}
					isModalOpen={isModalOpen}
					username={username}
					saveToState={this.saveToState}
					fetchErrorMsg={fetchErrorMsg}
				/>
				{user ? <User user={user} /> : ''}
				{isFetching ? (
					<div>Fetching...</div>
				) : (
					<>
						<div>
							{fiveTracks
								? fiveTracks.map(track => {
										return (
											<div>
												<p key={track.id}>
													<strong>
														{track.user.username}
													</strong>
													<br />: {track.title}
												</p>
												<iframe
													width="100%"
													height="166"
													scrolling="no"
													frameborder="no"
													allow="autoplay"
													src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${track.id}`}
												></iframe>
											</div>
										);
								  })
								: ''}
						</div>
						<div>
							{randomTracksFromUsers
								? randomTracksFromUsers.map(item => {
										return (
											<div key={item.track.id}>
												<p>
													<strong>User:</strong>{' '}
													{item.user.username}
												</p>
												<p>Song: {item.track.title}</p>
												<p>
													Referral:{' '}
													{item.referral.title}
												</p>
												<iframe
													width="100%"
													height="166"
													scrolling="no"
													frameborder="no"
													allow="autoplay"
													src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${item.track.id}`}
												></iframe>
											</div>
										);
								  })
								: ''}
						</div>
					</>
				)}
			</>
		);
	}
}

export default SCList;
