import React from 'react'
import { Form } from 'semantic-ui-react'

const CreateRecipeForm = (props) => {
  return (
    <>
      <Form id="create-recipe-form">
        <Form.Group widths='equal'>
          <Form.Input
            fluid
            id="create-title"
            label='Title'
            placeholder='Add title'
            name="title"
            onChange={props.inputHandler}
          />
        </Form.Group>
        <Form.TextArea
          label='Ingredients'
          id="create-ingredients"
          placeholder='Add ingredients'
          name="ingredients"
          onChange={props.inputHandler}
        />
        <Form.TextArea
          label='Description'
          id="create-description"
          placeholder='Add description'
          name="description"
          onChange={props.inputHandler}
        />
        <Form.Button
          id="submit-create-form"
          onClick={props.submitRecipeHandler}
        >
          Submit
          </Form.Button>
      </Form>
    </>
  )
}

export default CreateRecipeForm
