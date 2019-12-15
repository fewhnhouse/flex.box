import React from 'react'
import { FlexParent, FlexChild } from '@fewhnhouse/flex.box'
import styled from 'styled-components'

const StyledFlexParent = styled(FlexParent)`
  width: 100vw;
  height: 100vh;
`

const StyledFlexChild = styled(FlexChild)`
  background: ${(props: { color: string }) => props.color};
  width: 100%;
  flex: 1;
  text-align: center;
`
const App: React.FC = () => {
  return (
    <div className="App">
      <StyledFlexParent direction="column" justify="space-between" align="center">
        <StyledFlexChild color="red"/>
        <StyledFlexChild color="green"/>
        <StyledFlexChild color="blue"/>
      </StyledFlexParent>
    </div>
  )
}

export default App
