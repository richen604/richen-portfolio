/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const postContact = async values => {
  const result = await axios
    .post(process.env.NEXT_PUBLIC_CONTACT_URL, values)
    .catch(error => console.log(error));
  return result;
};
