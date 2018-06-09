import React, { Component } from 'react';
import PropTypes from 'prop-types';

const TextBoxGroup = ({field, value, label, error, type, onChange}) => {
  let cName = "form-group";
  if (error)
    cName+=" has-error";

  return (
    <div className={cName}>
      <label className="control-label">{label}</label>
      <textarea
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

TextBoxGroup.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

export default TextBoxGroup;
