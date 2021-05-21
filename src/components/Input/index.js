import React, { useRef, useEffect, useCallback } from 'react';

import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import masks from '../../utils/masks';

import { Container, Label, Field, Error } from './styles';

const Input = ({
  type,
  label,
  name,
  mask,
  colorLabel,
  className,
  fullWidth,
  noBorder,
  variant,
  ...rest
}) => {
  const inputRef = useRef(null);

  // defaultValue
  const { fieldName, registerField, error, defaultValue = '' } = useField(name);

  useEffect(() => {
    if (inputRef.current && !rest.value)
      registerField({
        name: fieldName,
        ref: inputRef.current,
        path: 'value',
      });
  }, [fieldName, registerField, rest.value]);

  // To use masks
  const handleChange = useCallback(
    (e) => {
      e.persist();

      if (mask) {
        if (!masks[mask]) throw new Error('Máscara não definida');

        const { value } = e.target;
        inputRef.current.value = masks[mask](value);
      }

      if (rest.onChange) rest.onChange(e);
    },
    [inputRef, mask, rest]
  );

  const inputProps = {
    ...(rest.value ? { value: rest.value } : { defaultValue }),
    ...rest,
    onChange: handleChange,
  };

  return (
    <Container className={`root-input ${className}`} fullWidth={fullWidth}>
      {label && (
        <Label htmlFor={fieldName} color={colorLabel}>
          {label}
        </Label>
      )}
      <Field
        ref={inputRef}
        type={type}
        id={fieldName}
        name={fieldName}
        error={!!error}
        variant={variant}
        {...inputProps}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
};

Input.defaultProps = {
  type: 'text',
  label: '',
  className: '',
  mask: '',
  colorLabel: '#FFFFFF',
  noBorder: false,
  width: '',
  variant: '',
};

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  colorLabel: PropTypes.string,
  className: PropTypes.string,
  noBorder: PropTypes.bool,
  name: PropTypes.string.isRequired,
  width: PropTypes.string,
  mask: PropTypes.string,
  variant: PropTypes.string,
};

export default Input;
