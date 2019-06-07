import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import background from '../assets/images/background.jpg';

class Homepage extends React.Component {
  state = {
    loading: true,
    imageLoaded: false
  };

  handleImageLoaded = () => {
    this.setState({ imageLoaded: true });
  };

  renderLoading() {
    if (!this.state.imageLoaded || this.state.loading) {
      const timer = setInterval(() => {
        this.setState({ loading: false }, () => clearInterval(timer));
      }, 2000);

      return (
        <Content>
          <div className="d-flex flex-lg-row flex-column justify-content-center">
            <Loading
              className="m-lg-5 text-center"
              style={{ color: '#3fb3b1' }}
            >
              MATTHEW LEE
            </Loading>
            <Loading className="m-lg-5 text-center">LOADING...</Loading>
          </div>
        </Content>
      );
    }
    return (
      <TransitionGroup>
        <CSSTransition classNames="content-transition" appear timeout={500}>
          <Content className="p-3">
            <Name>
              Matthew <span style={{ color: '#3fb3b1' }}>Lee</span>
            </Name>
            <Text className="mb-5">
              With great passion in front-end develop, also, UI/UX design is
              interested in. <br />
              Currently, I'm continuously learning more techniques of front-end
              development.
            </Text>
            <Button
              className="my-5 px-4 py-3 rounded-pill text-decoration-none text-center"
              to="/works"
            >
              LEARN ME MORE
            </Button>
          </Content>
        </CSSTransition>
      </TransitionGroup>
    );
  }

  render() {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <ContentWrapper className="position-absolute">
          {this.renderLoading()}
        </ContentWrapper>
        <div
          className="position-absolute"
          style={{
            backgroundColor: 'rgba(0,0,0,0.5)',
            width: '100%',
            height: '100%',
            zIndex: 2
          }}
        />
        <Black />
        <Wrapper className="overflow-hidden d-flex justify-content-cneter align-items-center">
          <img
            src={background}
            onLoad={() => this.handleImageLoaded()}
            width="100%"
            alt="background"
            className={
              this.state.imageLoaded && !this.state.loading
                ? 'd-block'
                : 'd-none'
            }
            style={{ objectFit: 'cover', minWidth: '100%', minHeight: '100%' }}
          />
        </Wrapper>
      </div>
    );
  }
}

const Black = styled.div`
  width: 25vw;
  height: 100vh;
  background-color: rgb(41, 42, 45);
`;

const Wrapper = styled.div`
  width: 75vw;
  height: 100vh;
  background-color: #373737;
`;

const Loading = styled.p`
  color: white;
  font-family: 'Titillium Web', sans-serif;
  font-size: 12px;
  letter-spacing: 10px;
`;

const ContentWrapper = styled.div`
  z-index: 5;
`;

const Content = styled.div`
  color: white;
  width: 75vw;
  &.content-transition-appear {
    opacity: 0;
  }

  &.content-transition-appear-active {
    opacity: 1;
    transition: opacity 500ms;
  }
`;

const Name = styled.h3`
  color: white;
  font-family: 'Poppins', 'Noto Sans TC', sans-serif;
  font-weight: bold;
  font-size: 50px;
`;

const Text = styled.p`
  color: white;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
`;

const Button = styled(NavLink)`
  color: white;
  background-color: #3fb3b1;
  font-family: 'Titillium Web', sans-serif;
  font-size: 12px;
  letter-spacing: 3px;
  transition: all 0.3s;
  :hover {
    color: white;
    padding-left: 2rem !important;
    padding-right: 2rem !important;
  }
`;

export default Homepage;
