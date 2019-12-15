# flex.box

## Installation

You can simply install this Repo via `npm`. It requires you to use `styled-components` and `react` (they are listed as peer dependencies of this project).

`npm install @fewhnhouse/flex.box`

`yarn add @fewhnhouse/flex.box`

## Usage

The module exposes two Styled Components, `FlexParent` and `FlexChild`. Together, they allow the combination of all flex props, converted in a simple API:

```
interface IFlexChildProps {
  grow?: number
  shrink?: number
  order?: number
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
  basis?: number | 'auto'
  style?: React.CSSProperties
}

interface IFlexParentProps {
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'
  align?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline'
  alignContent?: 'flex-start' | 'flex-end' | 'center' | 'space-around' | 'space-between' | 'strech'
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  style?: React.CSSProperties
}
```

The components can then simply be used like this:

```
const App = () => {
    return (
    <FlexParent direction="column justify="space-between" align="center">
        <FlexChild>First Child</FlexChild>
        <FlexChild>Second Child</FlexChild>
        <FlexChild>Third Child</FlexChild>
      </FlexParent>

    )
}
```

## Example

The `example` folder provides a react-app using this module as example. Feel free to take a look.
