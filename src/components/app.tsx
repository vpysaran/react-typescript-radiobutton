import * as React from 'react';

import RadioButtonGroup from './radio-button/radio-button-group';
import RadioButton from './radio-button/radio-button';

interface Props extends React.Props<App> {
}
const styles = {
  block: {
    maxWidth: 250
  },
  radiobutton: {
    marginBottom: 16
  }
};

export default class App extends React.Component<Props, {}> {
  public render() {
    return (
      <div>
        <h1>React Components in Typescript</h1>
        <h2>Radio Button</h2>
        <div style={styles.block}>
          <RadioButtonGroup name="shipSpeed">
            <RadioButton label="Male" value="male" />
            <RadioButton label="Female" value="female" />
          </RadioButtonGroup>
        </div>
      </div>
    );
  }
}
