import React, { useEffect, useState, useRef } from 'react';

import {
  Checkbox as CheckBoxMaterial,
  FormControlLabel,
} from '@material-ui/core';
import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import useStyles from './styles';

const CheckBox = ({ label, name, onChange, ...rest }) => {
  const classes = useStyles();
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState(defaultValue || false);

  function handleChange(e) {
    e.persist();
    setInputValue(e.target.checked);
    if (onChange) onChange(e);
  }

  useEffect(() => {
    if (inputRef.current)
      registerField({
        name: fieldName,
        path: 'value',
        ref: inputRef.current,
        getValue: (ref) => inputValue,
        setValue: (ref, value) => value && setInputValue(value),
      });
  }, [fieldName, registerField, inputValue, inputRef.current]);

  return (
    <FormControlLabel
      {...rest}
      classes={{ label: classes.label }}
      control={
        <CheckBoxMaterial
          ref={inputRef}
          name={name}
          className={classes.checkbox}
          checked={inputValue}
          onChange={handleChange}
          {...rest}
        />
      }
      label={label}
    />
  );
};

CheckBox.defaultProps = {
  onChange: null,
};

CheckBox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default CheckBox;
