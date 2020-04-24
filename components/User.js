import React from 'react';
import styled from 'styled-components';

const UserWrap = styled.div`
display:flex;
align-items:center;
`

const UserImage = styled.img`
height:40px;
margin-left:2rem;
border-radius:50%;
`



const User = (props) => {
    return (
        <UserWrap>
            <h1>Welcome, {props.user.username}</h1>
            <UserImage src={props.user.avatar_url} alt={props.user.username} />
        </UserWrap>
    );
};

export default User;