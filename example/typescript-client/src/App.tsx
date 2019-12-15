import React from 'react'
import './App.css'
import { FlexParent, FlexChild } from '@fewhnhouse/flex.box'
import styled from 'styled-components'

const StyledFlexParent = styled(FlexParent)`
  width: 100vw;
  height: 100vh;
`
const App: React.FC = () => {
  return (
    <div className="App">
      <StyledFlexParent direction="column" justify="space-between">
        <FlexChild>1</FlexChild>
        <FlexChild>2</FlexChild>
        <FlexChild>3</FlexChild>
      </StyledFlexParent>
    </div>
  )
}

export default App
