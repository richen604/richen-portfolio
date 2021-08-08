import axios from 'axios';

export const postContact = async values => {
  console.log(values);
  const result = await axios
    .post('https://richen-emailer.herokuapp.com/contact', values)
    .catch(error => console.log(error));
  return result;
};
