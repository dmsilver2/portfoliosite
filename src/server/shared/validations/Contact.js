import isEmpty from 'lodash/isEmpty';

function isEmptyString(str) {
    return (!str || 0 === str.length);
}

export default function validateInput(data) {
  let errors = {};

  if(isEmptyString(data.name))
    errors.name = 'Name is Required';
  if(isEmptyString(data.email))
    errors.email = 'Email is Required';
  if(isEmptyString(data.message))
    errors.message = 'Message is Required';

  return {
    errors,
    isValid: isEmpty(errors)
  };
}
