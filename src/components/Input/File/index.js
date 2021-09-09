import React, { useState, useEffect, useRef } from "react";

import { useField } from "@unform/core";
import PropTypes from "prop-types";

import { ReactComponent as Close } from "../../../assets/close.svg";
import { ReactComponent as Camera } from "../../../assets/image.svg";

import { Text } from "../../../styles/typography";

import {
  Container,
  ImageWrapper,
  Input,
  LoadedImage,
  RemoveButton,
  NoImageBackground,
} from "./styles";

const MAX_WIDTH = 50;
const MAX_HEIGHT = 50;

const FileInput = ({
  onChange,
  id,
  accept,
  squared,
  name,
  className,
  label,
  positionClose,
  titleIcon = "",
  widthImage = 50,
  heightImage = 50,
  ...rest
}) => {
  const [imageData, setImageData] = useState(null);
  const width = useRef(widthImage);
  const height = useRef(heightImage);

  const inputRef = useRef(null);
  const touched = useRef(false);
  const { fieldName, registerField, defaultValue, error } = useField(
    name || "file"
  );

  const _URL = window.URL || window.webkitURL;

  const adaptRatio = (width, height) => {
    if (width > height) {
      if (width > MAX_WIDTH) {
        height *= MAX_WIDTH / width;
        width = MAX_WIDTH;
      }
    } else if (height > MAX_HEIGHT) {
      width *= MAX_HEIGHT / height;
      height = MAX_HEIGHT;
    }

    return [width, height];
  };

  const remove = (e) => {
    touched.current = true;
    inputRef.current.value = "";
    e.preventDefault();
    setImageData(null);
    if (onChange) onChange(null);
  };

  const handleChange = (e) => {
    touched.current = true;
    if (e.target.files.length) {
      e.persist();
      const img = new Image();
      const objectUrl = _URL.createObjectURL(e.target.files[0]);
      const reader = new FileReader();

      reader.onload = (readerEvent) => {
        img.onload = (imageEvent) => {
          const { width: imgWidth, height: imgHeight } = imageEvent.target;
          const [newWidth, newHeight] = adaptRatio(imgWidth, imgHeight);

          width.current = newWidth;
          height.current = newHeight;
          setImageData(readerEvent.target.result);
        };
        img.src = objectUrl;
      };
      reader.readAsDataURL(e.target.files[0]);

      if (onChange) onChange(e);
    }
  };

  useEffect(() => {
    if (defaultValue) {
      setImageData(`${defaultValue}?date=${new Date().getTime()}`);
    }
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
      getValue: (ref) => (touched.current ? ref.files[0] : null),
      setValue: (ref, val) =>
        val && setImageData(`${val}?date=${new Date().getTime()}`),
    });
  }, [fieldName, registerField, defaultValue]);

  return (
    <Container htmlFor={id} style={{ display: "inline-flex" }}>
      {label && (
        <Text md darkBlue>
          {label}
        </Text>
      )}
      {imageData && (
        <RemoveButton onClick={remove} right={positionClose}>
          <Close width={10} height={10} />
        </RemoveButton>
      )}
      <ImageWrapper
        width={widthImage}
        height={heightImage}
        {...rest}
        circle={!squared}
      >
        {name ? (
          <input
            style={{ display: "none" }}
            id={fieldName}
            ref={inputRef}
            name={name}
            type="file"
            onChange={handleChange}
            accept={accept || "image/png, image/jpeg"}
          />
        ) : (
          <Input
            type="file"
            id={id}
            onChange={handleChange}
            accept={accept || "image/png, image/jpeg"}
          />
        )}
        {(!imageData && (
          <NoImageBackground>
            <Camera />
            <p>{titleIcon}</p>
          </NoImageBackground>
        )) || (
          <LoadedImage
            className={className}
            width={widthImage}
            height={heightImage}
            src={imageData}
          />
        )}
      </ImageWrapper>
    </Container>
  );
};

FileInput.defaultProps = {
  label: null,
  widthImage: 150,
  heightImage: 150,
  onChange: null,
  titleIcon: "Trocar Imagem",
  className: "",
  squared: false,
  accept: null,
};

FileInput.propTypes = {
  titleIcon: PropTypes.string,
  accept: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  squared: PropTypes.bool,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  widthImage: PropTypes.number,
  heightImage: PropTypes.number,

  onChange: PropTypes.func,
};

export default FileInput;
