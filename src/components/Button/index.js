import React from "react";

import PropTypes from "prop-types";

import { Label as Title } from "../Input/styles";
import { Container, LoaderComponent } from "./styles";

const Button = ({
  label,
  loading,
  Icon,
  title,
  titleMargin,
  titleColor,
  titleAlign,
  iconPosition,
  iconSize,
  justifyContent,
  height,

  ...rest
}) => {
  return (
    <div
      styles={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {title && (
        <Title
          labelMargin={titleMargin}
          labelAlign={titleAlign}
          color={titleColor}
        >
          {title}
        </Title>
      )}
      <Container
        disable={loading}
        justifyContent={justifyContent}
        iconPosition={iconPosition}
        iconSize={iconSize}
        height={height}
        {...rest}
      >
        {loading ? (
          <LoaderComponent
            type="ThreeDots"
            color="#fff"
            height={15}
            width={50}
            // 3 secs
          />
        ) : (
          <div className="customsvg">
            {Icon && iconPosition === "left" && <Icon />}
            {label}
            {Icon && iconPosition === "right" && <Icon />}
          </div>
        )}
      </Container>
    </div>
  );
};

Button.defaultProps = {
  type: "button",
  className: "",
  color: "default",
  variant: "button",
  size: "default",
  disabled: false,
  fullWidth: false,
  loading: false,
  Icon: null,
  Title: "",
  titleMargin: "",
  title: "",
  titleColor: "",
  titleAlign: "left",
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  size: PropTypes.string,
  variant: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    "default",
    "primary",
    "secondary",
    "success",
    "danger",
  ]),
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  loading: PropTypes.bool,
  Icon: PropTypes.element,
  Title: PropTypes.string,
  titleMargin: PropTypes.string,
  title: PropTypes.string,
  titleColor: PropTypes.string,
  titleAlign: PropTypes.string,
};

export default Button;
