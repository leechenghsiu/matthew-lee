import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import LogoFacebook from 'react-ionicons/lib/LogoFacebook';
import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin';
import LogoGithub from 'react-ionicons/lib/LogoGithub';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Svg from '../svg';

class Sidebar extends React.Component {
  state = {
    open: false
  };

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div>
        <div className="d-flex d-lg-none mb-3" style={{ height: 50 }}>
          <MenuBtn
            className="position-absolute"
            onClick={() => this.handleClick()}
          >
            <Icon
              className={[
                'position-absolute bg-drak',
                this.state.open && 'open'
              ].join(' ')}
            />
          </MenuBtn>
          <TransitionGroup>
            {this.state.open ? (
              <CSSTransition
                classNames="menu-transition"
                enter
                unmountOnExit
                timeout={1000000000}
              >
                <Menu className="position-absolute">
                  <div
                    className="d-flex flex-column justify-content-center"
                    style={{ height: '80vh' }}
                  >
                    <StyledLink
                      onClick={() => this.handleClick()}
                      to="/"
                      className="my-5 font-weight-bold text-decoration-none text-center"
                    >
                      HOME
                    </StyledLink>
                    <StyledLink
                      onClick={() => this.handleClick()}
                      to="/works"
                      className="mt-5 font-weight-bold text-decoration-none text-center"
                      activeStyle={{ color: '#3fb3b1', opacity: 1 }}
                    >
                      WORKS
                    </StyledLink>
                    <StyledLink
                      onClick={() => this.handleClick()}
                      to="/about"
                      className="mt-5 font-weight-bold text-decoration-none text-center"
                      activeStyle={{ color: '#3fb3b1', opacity: 1 }}
                    >
                      ABOUT
                    </StyledLink>
                    <StyledLinkA
                      onClick={() => this.handleClick()}
                      target="_blank"
                      href="https://drive.google.com/file/d/1J2ppsrPFo4J_mwR_jaklCyd0339GYyfg/view?usp=sharing"
                      className="mt-5 font-weight-bold text-decoration-none text-center"
                    >
                      RESUME
                    </StyledLinkA>
                  </div>
                  <div className="d-flex align-items-end justify-content-center">
                    <StyledLinkA
                      target="_blank"
                      onClick={() => this.handleClick()}
                      href="https://www.facebook.com/profile.php?id=100001049197253"
                    >
                      <LogoFacebook
                        className="mx-2"
                        fontSize="30"
                        color="white"
                      />
                    </StyledLinkA>
                    <StyledLinkA
                      target="_blank"
                      onClick={() => this.handleClick()}
                      href="https://www.linkedin.com/in/%E6%89%BF%E4%BF%AE-%E6%9D%8E-472230163/"
                    >
                      <LogoLinkedin
                        className="mx-2"
                        fontSize="30"
                        color="white"
                      />
                    </StyledLinkA>
                    <StyledLinkA
                      target="_blank"
                      onClick={() => this.handleClick()}
                      href="https://github.com/leechenghsiu"
                    >
                      <LogoGithub
                        className="mx-2"
                        fontSize="30"
                        color="white"
                      />
                    </StyledLinkA>
                  </div>
                </Menu>
              </CSSTransition>
            ) : null}
          </TransitionGroup>
        </div>
        <Wrapper className="pb-5 d-lg-flex d-none flex-column align-items-center justify-content-between">
          <div className="d-flex my-3" style={{ flex: 1 }}>
            <Link to="/" style={{ height: 120 }}>
              <Svg />
            </Link>
          </div>
          <div className="d-flex flex-column" style={{ flex: 2 }}>
            <StyledLink
              to="/works"
              className="mt-5 font-weight-bold text-decoration-none text-center"
              activeStyle={{ color: '#3fb3b1', opacity: 1 }}
            >
              WORKS
            </StyledLink>
            <StyledLink
              to="/about"
              className="mt-5 font-weight-bold text-decoration-none text-center"
              activeStyle={{ color: '#3fb3b1', opacity: 1 }}
            >
              ABOUT
            </StyledLink>
            <StyledLinkA
              target="_blank"
              href="https://drive.google.com/file/d/1J2ppsrPFo4J_mwR_jaklCyd0339GYyfg/view?usp=sharing"
              className="mt-5 font-weight-bold text-decoration-none text-center"
            >
              RESUME
            </StyledLinkA>
          </div>
          <div className="d-flex align-items-end" style={{ flex: 1 }}>
            <StyledLinkA
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100001049197253"
            >
              <LogoFacebook className="mx-2" fontSize="30" color="white" />
            </StyledLinkA>
            <StyledLinkA
              target="_blank"
              href="https://www.linkedin.com/in/%E6%89%BF%E4%BF%AE-%E6%9D%8E-472230163/"
            >
              <LogoLinkedin className="mx-2" fontSize="30" color="white" />
            </StyledLinkA>
            <StyledLinkA target="_blank" href="https://github.com/leechenghsiu">
              <LogoGithub className="mx-2" fontSize="30" color="white" />
            </StyledLinkA>
          </div>
        </Wrapper>
      </div>
    );
  }
}

const Menu = styled.div`
  z-index: 3;
  height: 110vh;
  background-color: #373737;
  width: 100vw;
  opacity: 0.8;
  transform: translateX(-100vw);

  &.menu-transition-enter {
  }

  &.menu-transition-enter-active {
    transform: translateX(0vw);
    transition: transform 500ms;
  }

  &.menu-transition-exit {
    transform: translateX(0vw);
  }

  &.menu-transition-exit-active {
    transform: translateX(-100vw);
    transition: transform 500ms;
  }
`;

const MenuBtn = styled.div`
  z-index: 5;
  width: 30px;
  height: 30px;
  right: 20px;
  top: 15px;
  transition-duration: 0.5s;
  &:hover {
    cursor: pointer;
  }
`;

const Icon = styled.div`
  transition-duration: 0.5s;
  background-color: teal;
  width: 30px;
  top: 15px;

  &:before {
    transition: transform 500ms;
    background-color: teal;
    height: 4px;
    width: 30px;
    top: -10px;
    content: '';
    position: absolute;
  }
  &:after {
    transition: transform 500ms;
    background-color: teal;
    height: 4px;
    width: 30px;
    top: 10px;
    content: '';
    position: absolute;
  }

  &.open {
    transition-duration: 0.5s;
    &:before {
      transition: transform 500ms;
      transform: rotateZ(135deg) scaleX(1.25) translate(6px, -6px);
    }
    &:after {
      transition: transform 500ms;
      transform: rotateZ(-135deg) scaleX(1.25) translate(7px, 7px);
    }
  }
`;

const Wrapper = styled.div`
  background-color: #373737;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 250px;
  box-shadow: 10px 0 10px -6px rgba(200, 200, 200, 1);
`;

const StyledLink = styled(NavLink)`
  font-size: 12px;
  color: white;
  font-weight: 600;
  letter-spacing: 3px;
  :hover {
    color: #3fb3b1;
    opacity: 0.7;
  }
`;

const StyledLinkA = styled.a`
  font-size: 12px;
  color: white;
  font-weight: 600;
  letter-spacing: 3px;
  :hover {
    color: #3fb3b1;
    opacity: 0.7;
  }
`;

const mapStateToProps = state => {
  return {
    details: state.details
  };
};

export default connect(mapStateToProps)(Sidebar);
