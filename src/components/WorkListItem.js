import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MdCloseCircle from 'react-ionicons/lib/MdCloseCircle';

import { fetchWork } from '../actions';
// import Modal from '../Modal';
// import history from '../history';

class WorkListItem extends React.Component {
  state = {
    color: true,
    link: ''
  };

  componentDidMount = async () => {
    await this.props.fetchWork(this.props.match.params.slug);
    this.setState({
      link: this.props.work.link
    });
  };

  render() {
    const background = `${process.env.PUBLIC_URL}/images/${
      this.props.match.params.slug
    }/${this.props.match.params.slug}-icon.png`;
    const {
      name,
      slogan,
      role,
      language,
      overview,
      details,
      link
    } = this.props.work;

    return (
      <Wrapper className="ml-0">
        <Item className="m-lg-5 m-0 p-0 px-lg-4 py-lg-3">
          <Header className="p-3 p-lg-0 d-flex flex-column mb-5 mb-lg-0 bg-light">
            <div className="align-self-end">
              <Link
                to="/works"
                className="align-self-end"
                style={{ height: 40 }}
              >
                <Close fontSize="40" color="#3fb3b1" />
              </Link>
            </div>
            <div className="d-flex flex-column flex-sm-row">
              <div className="align-self-center">
                <img
                  className="m-1 m-sm-5 align-self-center"
                  alt="logo"
                  src={background}
                  height="150"
                />
              </div>
              <div className="d-flex flex-column my-5 align-self-center">
                <Title className="d-flex flex-lg-row flex-column align-items-lg-center align-items-start">
                  {name}
                  <Content className="ml-lg-3 my-0">{slogan}</Content>
                </Title>

                <div className="d-flex flex-row">
                  <SubTitle className="px-4 py-3">
                    <span style={{ color: '#3fb3b1', fontWeight: 'bold' }}>
                      ROLE:{' '}
                    </span>
                    {role}
                  </SubTitle>
                </div>
                <div className="d-flex flex-row">
                  <SubTitle className="px-4 py-3">
                    <span style={{ color: '#3fb3b1', fontWeight: 'bold' }}>
                      LANGUAGE:{' '}
                    </span>
                    {language}
                  </SubTitle>
                </div>
              </div>
            </div>
          </Header>

          <div className="px-3 px-sm-5 pb-5">
            <Title>OVERVIEW</Title>
            <Content>{overview}</Content>
          </div>
          <div className="px-3 px-sm-5 pb-5">
            <Title>DETAILS</Title>
            <Content>{details}</Content>
          </div>
          <div className="px-3 px-sm-5 pb-5">
            <Title>SNAPSHOTS</Title>
            {['color'].map(item => {
              const snapshot = `${process.env.PUBLIC_URL}/images/${
                this.props.match.params.slug
              }/${this.props.match.params.slug}-${item}.png`;
              return (
                <div>
                  {this.state.color ? (
                    <Content>Color Specification</Content>
                  ) : null}
                  <DemoImg
                    className="mt-1 mb-5 align-self-center"
                    onError={e => {
                      e.target.style.display = 'none';
                      this.setState({ color: false });
                    }}
                    key={item}
                    alt="123"
                    src={snapshot}
                    height="200"
                  />
                </div>
              );
            })}
            <Content>Demo</Content>
            {[1, 2, 3, 4, 5].map(item => {
              const snapshot = `${process.env.PUBLIC_URL}/images/${
                this.props.match.params.slug
              }/${this.props.match.params.slug}-${item}.png`;
              return (
                <img
                  className="mt-1 mb-5 ml-5 align-self-center"
                  onError={e => {
                    e.target.style.display = 'none';
                  }}
                  key={item}
                  alt="123"
                  src={snapshot}
                  width="230"
                />
              );
            })}
            <div>
              {this.state.link !== undefined ? (
                <LinkContent target="blank" href={link}>
                  View Website
                </LinkContent>
              ) : null}
            </div>
          </div>
        </Item>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  background-color: white;

  @media (min-width: 992px) {
    margin-left: 250px !important;
  }
`;

const Item = styled.div`
  box-shadow: 0 10px 20px 0 rgba(50, 50, 50, 0.2),
    0 22px 40px 0 rgba(119, 119, 119, 0.1);
  animation: expand 0.5s;
  @keyframes expand {
    0% {
      transform: scale(0.1, 0.1);
    }

    100% {
      transform: scale(1, 1);
    }
  }
`;

const Close = styled(MdCloseCircle)`
  transition: 0.3s;
  :hover {
    transform: scale(1.2);
  }
`;

const Header = styled.div`
  @media (min-width: 992px) {
    background-color: white !important;
  }
`;

const Title = styled.h3`
  color: rgb(50, 58, 69);
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
`;

const SubTitle = styled.p`
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  font-family: 'Titillium Web', sans-serif;
  font-size: 12px;
  letter-spacing: 3px;
`;

const Content = styled.p`
  font-family: 'Noto Sans TC', 'Titillium Web', sans-serif;
  font-weight: normal;
  font-size: 16px;
`;

const LinkContent = styled.a`
  font-family: 'Noto Sans TC', 'Titillium Web', sans-serif;
  font-weight: normal;
  font-size: 16px;
`;

const DemoImg = styled.img`
  @media (min-width: 576px) {
    height: 300px;
  }
`;

const mapStateToProps = state => {
  return {
    work: state.works
  };
};

export default connect(
  mapStateToProps,
  { fetchWork }
)(WorkListItem);
