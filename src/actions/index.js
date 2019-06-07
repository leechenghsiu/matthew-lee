import { FETCH_WORKS, FETCH_WORK, FETCH_ABOUT } from './types';
import portfolio from '../json/portfolio.json';

export const fetchWorks = () => {
  return {
    type: FETCH_WORKS,
    payload: portfolio.works
  };
};

export const fetchWork = slug => {
  return {
    type: FETCH_WORK,
    payload: portfolio.works[slug]
  };
};

export const fetchAbout = () => {
  return {
    type: FETCH_ABOUT,
    payload: portfolio.about
  };
};
