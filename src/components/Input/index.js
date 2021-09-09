import React, { useRef, useEffect, useCallback, useState } from "react";

import { useField } from "@unform/core";
import PropTypes from "prop-types";

import { ReactComponent as CloseIcon } from "../../assets/icons/hide.svg";
import { ReactComponent as OpenIcon } from "../../assets/icons/open.svg";
import masks from "../../utils/masks";

import { Container, FieldContainer, Label, Field, Error } from "./styles";

const Input = ({
  type,
  label,
  name,
  mask,
  colorLabel,
  className,
  fullWidth,
  noBorder,
  returnUnmask,
  variant,
  disabled,
  style,
  align,
  ...rest
}) => {
  const inputRef = useRef(null);
  const [typeAux, setTypeAux] = useState(type);
  const [showPassword, setShowPassword] = useState(false);

  // defaultValue
  const { fieldName, registerField, error, defaultValue = "" } = useField(name);

  useEffect(() => {
    if (inputRef.current && !rest.value)
      registerField({
        name: fieldName,
        ref: inputRef.current,
        path: "value",
        getValue: (ref) => {
          let { value } = ref;
          if (returnUnmask && mask) {
            value = masks.unmask(value);
          }
          return value;
        },
        setValue: (ref, value) => {
          let newValue = value;

          if (!newValue) return "";
          if (mask) {
            newValue = masks[mask](value);
          }
          ref.value = newValue;
        },
      });
  }, [fieldName, registerField, rest.value]);

  // To use masks
  const handleChange = useCallback(
    (e) => {
      e.persist();

      if (mask) {
        if (!masks[mask]) throw new Error("Máscara não definida");

        const { value } = e.target;
        inputRef.current.value = masks[mask](value);
      }

      if (rest.onChange) rest.onChange(e);
    },
    [inputRef, mask, rest]
  );

  useEffect(() => {
    if (String(defaultValue) !== "") {
      if (mask) {
        inputRef.current.value = masks[mask](String(defaultValue));
      } else {
        if (type === "date")
          inputRef.current.value = String(defaultValue).substr(0, 10);
        else inputRef.current.value = defaultValue;
      }
    }
  }, [defaultValue, mask]);

  const inputProps = {
    ...(rest.value ? { value: rest.value } : { defaultValue }),
    ...rest,
    onChange: handleChange,
  };
  useEffect(() => {
    if (type === "password") {
      if (showPassword) {
        setTypeAux("text");
      }

      if (!showPassword) {
        setTypeAux("password");
      }
    }
  }, [showPassword]);

  return (
    <Container className={`root-input ${className}`} fullWidth={fullWidth}>
      {label && (
        <Label htmlFor={fieldName} color={colorLabel}>
          {label}
        </Label>
      )}
      <FieldContainer>
        <Field
          ref={inputRef}
          type={typeAux}
          id={fieldName}
          name={fieldName}
          error={!!error}
          variant={variant}
          disabled={disabled}
          style={{ ...style, textAlign: align }}
          {...inputProps}
        />
        {type === "password" && (
          <button
            className="eyeBtn"
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <OpenIcon /> : <CloseIcon />}
          </button>
        )}
      </FieldContainer>
      {error && <Error>{error}</Error>}
    </Container>
  );
};

Input.defaultProps = {
  type: "text",
  label: null,
  className: "",
  mask: "",
  colorLabel: "#FFFFFF",
  noBorder: false,
  fullWidth: true,
  returnUnmask: true,
  width: "",
  variant: "",
  disabled: false,
};

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  colorLabel: PropTypes.string,
  className: PropTypes.string,
  noBorder: PropTypes.bool,
  returnUnmask: PropTypes.bool,
  name: PropTypes.string.isRequired,
  width: PropTypes.string,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  mask: PropTypes.string,
  variant: PropTypes.string,
};

export default Input;
