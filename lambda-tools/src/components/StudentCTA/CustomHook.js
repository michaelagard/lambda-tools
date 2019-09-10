import { useState } from 'react';
import {standUpStrData, moduleReviewAnnouncementStrData, moduleReviewStrData, tkPrepStrData} from './Data/StudentCTAData';

export const useCTAForm = (callback) => {
  const [inputs, setInputs] = useState({
    TKReview: tkPrepStrData,
    moduleReview: moduleReviewStrData,
    moduleReviewAnnouncement: moduleReviewAnnouncementStrData,
    standUp: standUpStrData
  });
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
  }
  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    console.log(inputs)
  }
  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
}