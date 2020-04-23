import React, { Component } from 'react';
import styled, {ThemeProvider, createGlobalStyle} from 'styled-components';
import Meta from '../components/Meta';
import Header from '../components/Header';

const theme = {
    greenDark: '#004445',
    greenMed: '#2c7873',
    greenLight: '#6fb98f',
    yellow: '#ffd800',
    sky: '#82B8D6',
    red: '#ED1C24',
    black: '#222',
    gray: '#555',
    lightGray: '#e7e7e7',
    offWhite: '#f1f1f1',
    maxWidth: '1200px',
    bs: '0 12px 24px 0 rgba(0,0,0,.09)',
    bp: '1300px'
}

const StyledPage = styled.div`

`

const Inner = styled.div`
    max-width:${props => props.theme.maxWidth};
    margin:0 auto;
    padding:2rem;
`

const GlobalStyle = createGlobalStyle`
    html,body {
        height:100%;
    }
    html{
        box-sizing:border-box;
        font-size:10px;
    }

    *,*:before, *:after {
        box-sizing: inherit;
    }
    body {
        padding:0;
        margin:0;
        font-size:1.5rem;
        line-height:2;
        color:${props=>props.theme.black};
        font-family:'Fira Sans', sans-serif;
    }

    body.start-warmup {
        background-color:${props=>props.theme.yellow};
    }

    body.start-work {
        background-color:${props=>props.theme.greenLight};
        color:#fff;
    }

    body.start-cooldown {
        background-color:${props=>props.theme.sky};
        color:#fff;
    }

    body.end-session {
        background-color:${props=>props.theme.red};
        color:#fff;
    }

    a {
        text-decoration:none;
        color: ${theme.black}
    }
`


class Page extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <StyledPage>
                    <Meta />
                    <GlobalStyle />
                    <Inner>
                    <Header />
                        {this.props.children}
                    </Inner>
                </StyledPage>
            </ThemeProvider>
        );
    }
}

export default Page;