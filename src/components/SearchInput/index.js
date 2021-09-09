import React, { useRef } from 'react';

import { Form } from '@unform/web';
import PropTypes from 'prop-types';
import { FiSearch } from 'react-icons/fi';

import Input from '../Input';
import { Button, Content } from './styles';

function InputSearch({ fetchItem }) {
  const formRef = useRef();

  function handleSubmit({ search }) {
    fetchItem(1, search);
  }

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Content>
        <Input name="search" placeholder="Search" />
        <Button type="submit">
          <FiSearch size={20} />
        </Button>
      </Content>
    </Form>
  );
}

export default InputSearch;

InputSearch.propTypes = {
  fetchItem: PropTypes.func.isRequired,
};
