import React, { Component } from 'react'
import styled from 'styled-components'

export default styled.button`
  background-color: ${props => (props.primary ? "#3d2e3c" : "#fff")};
  color: ${props => (props.primary ? "#fff" : "#3d2e3c")};
  border: 2px solid #3d2e3c;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  text-align: center;
  text-decoration: none;
  font-size: 1rem;
  margin: 1rem;
  text-transform: uppercase;
  cursor: pointer;
`
