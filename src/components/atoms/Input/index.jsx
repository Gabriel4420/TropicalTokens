import React from 'react'
import { ContainerInput, InputBar } from './styles'

const Input = ({
  icon,
  type,
  text,
  name,
  placeholder,
  handleOnChange,
  value,
  multiple,
  children,
  mode,
}) => {
  return (
    <ContainerInput icon={icon}>
      {icon && <div>{children}</div>}
      {text && <label htmlFor={name}>{text}:</label>}

      <InputBar
        mode={mode}
        type={type}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
        name={name}
        id={name}
        {...(multiple ? { multiple } : '')}
      />
    </ContainerInput>
  )
}

export default Input
