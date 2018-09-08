import React from 'react'
import {compose} from 'recompose'
import { Form, FormGroup, Label, Input } from 'reactstrap'

const Search = compose((props) =>
  <Form>
    <FormGroup>
      <Label>Input Place</Label>
      <Input />
    </FormGroup>
  </Form>
);

export default Search;
