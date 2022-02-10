import React, { useState } from 'react'

import { Container, Form } from './styled'

export default function InputForm() {

  const [value, setValue] = useState('');

  function handleSubmit() {

  }
  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input type="text" value={value} onChange={() => setValue} />
      </label>
      <input type="submit" value="Enviar" />
    </Form>
  )
}
