import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../scss/TextFieldGroup.css';

const TextFieldGroup = ({field, value, label, error, type, onChange}) => {
  let cName = "form-group";
  if (error)
    cName+=" has-error";

  return (
    <div className={cName}>
      <label className="control-label">{label}</label>
      <input
        onChange={onChange}
        value={value}
        type={type}
        name={field}
        className="form-control"
      />
      {error && <span className="help-block">{error}</span>}
    </div>
  );
}

TextFieldGroup.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

TextFieldGroup.defaultProps = {
  type: 'text',
}

export default TextFieldGroup;
