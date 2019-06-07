import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { fetchAbout } from '../actions';

class About extends React.Component {
  componentDidMount() {
    this.props.fetchAbout();
  }

  render() {
    const { autobiography, education, job, experience, skills } = this.props;
    const profile = `/images/profile.png`;
    const ntue = `/images/NTUE.png`;
    const microsoft = `/images/Microsoft.png`;

    if (!autobiography) {
      return null;
    }

    return (
      <Wrapper className="ml-0 pb-5 pt-4">
        <Header className="mx-5">ABOUT</Header>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div
            className="mb-3 d-flex align-items-center justify-content-center rounded-circle"
            style={{ height: 210, width: 210, backgroundColor: '#3fb3b1' }}
          >
            <img
              className="rounded-circle"
              alt="profile"
              src={profile}
              width="200"
            />
          </div>
          <NameCh>李承修</NameCh>
          <NameEn>Matthew Lee</NameEn>
        </div>
        <TransitionGroup>
          <CSSTransition classNames="item-transition" appear timeout={2000}>
            <Item className="m-lg-5 m-2 px-4 py-3">
              <div className="p-3">
                <Title>ABOUT ME</Title>
                {autobiography.map(item => {
                  return (
                    <Content className="my-3" key={item}>
                      {item}
                    </Content>
                  );
                })}
              </div>
              <div className="p-3">
                <Title>EDUCATION</Title>
                <div className="d-flex flex-row align-items-center row m-0">
                  <div>
                    <img
                      className="mr-3 my-3"
                      alt="NTUE"
                      src={ntue}
                      width="50"
                    />
                  </div>
                  <div className="d-flex flex-column flex-lg-row">
                    <ContentTime className="my-1 mr-3">
                      {education.time}
                    </ContentTime>
                    <Content className="my-1">{education.college}</Content>
                  </div>
                </div>
              </div>
              <div className="p-3">
                <Title>JOB EXPERIENCE</Title>
                {Object.values(job).map(item => {
                  return (
                    <div
                      className="d-flex flex-row align-items-center row m-0"
                      key={item.description}
                    >
                      <div>
                        <img
                          className="mr-3 my-3"
                          alt="Microsoft"
                          src={microsoft}
                          width="50"
                        />
                      </div>

                      <div className="d-flex flex-column flex-lg-row">
                        <ContentTime className="my-1 mr-3">
                          {item.time}
                        </ContentTime>
                        <div className="d-flex flex-row">
                          <Content className="my-1 mr-3">{item.place}</Content>
                          <Content className="my-1 mr-3">
                            {item.department}
                          </Content>
                          <Content className="my-1">{item.title}</Content>
                        </div>
                      </div>
                      <Content className="my-1">{item.description}</Content>
                    </div>
                  );
                })}
              </div>
              <div className="p-3">
                <Title>EXPERIENCE</Title>
                {Object.values(experience).map(item => {
                  return (
                    <div
                      className="d-flex flex-row align-items-cente row m-0"
                      key={item.description}
                    >
                      <div className="my-3">
                        <div className="d-flex flex-column flex-lg-row">
                          <ContentTime className="my-1 mr-3">
                            {item.time}
                          </ContentTime>
                          <div className="d-flex flex-row">
                            <Content className="my-1 mr-3">
                              {item.place}
                            </Content>
                            <Content className="my-1">{item.title}</Content>
                          </div>
                        </div>
                        <Content className="my-1">{item.description}</Content>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="p-3">
                <Title>SKILLS</Title>
                <div className="d-flex flex-column flex-sm-row">
                  <div className="d-flex flex-column" style={{ flex: 1 }}>
                    <ContentTime className="my-3">Programming</ContentTime>
                    <div
                      className="d-flex flex-column flex-wrap"
                      style={{ height: 175 }}
                    >
                      {skills.programming.map(item => {
                        return <Content key={item}>{item}</Content>;
                      })}
                    </div>
                  </div>
                  <div className="d-flex flex-column" style={{ flex: 1 }}>
                    <ContentTime className="my-3">Tools</ContentTime>
                    <div
                      className="d-flex flex-column flex-wrap"
                      style={{ height: 175 }}
                    >
                      {skills.tools.map(item => {
                        return <Content key={item}>{item}</Content>;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </Item>
          </CSSTransition>
        </TransitionGroup>
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

const Header = styled.div`
  height: 100px;
  font-size: 74px;
  font-weight: bold;
  color: #d5d5d5;
  font-family: 'Poppins', sans-serif;
`;

const Item = styled.div`
  box-shadow: 0 10px 20px 0 rgba(50, 50, 50, 0.2),
    0 22px 40px 0 rgba(119, 119, 119, 0.1);

  &.item-transition-appear {
    opacity: 0;
  }

  &.item-transition-appear-active {
    opacity: 1;
    transition: opacity 1000ms;
  }
`;

const NameCh = styled.h3`
  color: rgb(50, 58, 69);
  font-family: 'Poppins', sans-serif;
`;

const NameEn = styled.h3`
  color: rgb(50, 58, 69);
  font-family: 'Poppins', sans-serif;
`;

const Title = styled.h3`
  color: rgb(50, 58, 69);
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
`;

const Content = styled.p`
  font-family: 'Noto Sans TC', 'Titillium Web', sans-serif;
  font-weight: normal;
  font-size: 16px;
`;

const ContentTime = styled.p`
  font-family: 'Noto Sans TC', 'Titillium Web', sans-serif;
  font-weight: bold;
  font-size: 16px;
  color: #3fb3b1;
`;

const mapStateToProps = state => {
  return {
    autobiography: state.about.autobiography,
    education: state.about.education,
    job: state.about.job,
    experience: state.about.experience,
    skills: state.about.skills
  };
};

export default connect(
  mapStateToProps,
  { fetchAbout }
)(About);
