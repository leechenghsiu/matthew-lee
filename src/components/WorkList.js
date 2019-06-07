import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { fetchWorks } from '../actions';

class WorkList extends React.Component {
  componentDidMount() {
    this.props.fetchWorks();
  }

  renderList() {
    return this.props.works.map(work => {
      const workId = work.id % 2 === 0 ? `0${work.id}.` : `.0${work.id}`;
      const WorkItemClassName =
        work.id % 2 === 0
          ? 'm-3 p-lg-5 p-0 d-flex flex-row-reverse justify-content-center'
          : 'm-3 p-lg-5 p-0 d-flex justify-content-center';
      const className1 =
        work.id % 2 === 0
          ? 'col-1 col-sm-2 col-xl-5 d-flex justify-content-end align-items-end'
          : 'col-1 col-sm-2 col-xl-5 d-flex align-items-end';
      const className2 =
        work.id % 2 === 0
          ? 'd-flex flex-column align-items-start'
          : 'd-flex flex-column align-items-end';
      const className3 =
        work.id % 2 === 0
          ? 'col-1 col-sm-2 col-xl-2 d-flex justify-content-start align-items-end'
          : 'col-1 col-sm-2 col-xl-2 d-flex justify-content-end align-items-end';
      const background = `/images/${work.slug}/${work.slug}.png`;

      return (
        <StyledLink className="text-decoration-none" key={work.slug}>
          <TransitionGroup>
            <CSSTransition
              classNames="work-item-transition"
              appear
              timeout={2000}
            >
              <WorkItem className={WorkItemClassName}>
                <div className={className1}>
                  <WorkImg
                    className="d-flex align-self-center"
                    alt={work.slug}
                    src={background}
                    width="300"
                  />
                </div>
                <div className="col-10 col-sm-8 col-xl-5 d-flex align-self-center justify-content-center">
                  <div className={className2}>
                    <WorkTitle className="px-3 py-2 text-uppercase">
                      {work.name}
                    </WorkTitle>
                    <WorkSubTitle className="px-5 py-3 text-uppercase">
                      {work.description}
                    </WorkSubTitle>
                    <WorkButton
                      to={`/works/${work.slug}`}
                      className="my-4 px-4 py-3 rounded-pill text-decoration-none text-center"
                    >
                      VIEW PROJECT
                    </WorkButton>
                  </div>
                </div>
                <div className={className3}>
                  <WorkId>{workId}</WorkId>
                </div>
              </WorkItem>
            </CSSTransition>
          </TransitionGroup>
        </StyledLink>
      );
    });
  }

  render() {
    return (
      <Wrapper className="ml-0 pb-5 pt-4">
        <Title className="mx-5">WORKS</Title>
        <SubTitle className="mx-5 pb-4">
          — With great passion in front-end develop, also, UI/UX design is
          interested in.
          <br />— Currently, I'm continuously learning more techniques of
          front-end development.
        </SubTitle>
        {this.renderList()}
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

const Title = styled.div`
  font-size: 74px;
  font-weight: bold;
  color: #d5d5d5;
  font-family: 'Poppins', sans-serif;
`;

const SubTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 2px;
  color: rgba(51, 51, 51, 0.81);
  font-family: 'Titillium Web', sans-serif;
`;

const StyledLink = styled.div``;

const WorkItem = styled.div`
  background-color: white;
  height: 400px;
  transition: all 0.3s;
  :hover {
    transform: translate(0, -5px);
    box-shadow: 0 10px 20px 0 rgba(50, 50, 50, 0.2),
      0 22px 40px 0 rgba(119, 119, 119, 0.1);
  }

  &.work-item-transition-appear {
    opacity: 0;
  }

  &.work-item-transition-appear-active {
    opacity: 1;
    transition: opacity 1000ms;
  }

  @media (min-width: 768px) {
    height: 500px;
  }
`;

const WorkImg = styled.img`
  @media (min-width: 768px) {
    width: 600px;
  }
`;

const WorkTitle = styled.h3`
  color: rgba(51, 51, 51, 0.81);
  background-color: rgba(255, 255, 255, 0.8);
  font-family: 'Poppins', 'Noto Sans TC', sans-serif;
  font-weight: bold;
`;

const WorkSubTitle = styled.p`
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  font-family: 'Titillium Web', sans-serif;
  font-size: 10px;
  letter-spacing: 3px;
`;

const WorkButton = styled(NavLink)`
  color: white;
  background-color: #3fb3b1;
  font-family: 'Titillium Web', sans-serif;
  font-size: 10px;
  letter-spacing: 3px;
  transition: all 0.3s;
  :hover {
    color: white;
    padding-left: 2rem !important;
    padding-right: 2rem !important;
  }
`;

const WorkId = styled.h1`
  font-size: 74px;
  font-weight: bold;
  color: #d5d5d5;
  font-family: 'Poppins', sans-serif;
`;

const mapStateToProps = state => {
  return {
    works: Object.values(state.works)
  };
};

export default connect(
  mapStateToProps,
  { fetchWorks }
)(WorkList);
