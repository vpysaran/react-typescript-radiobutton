import * as React from 'react';

import RadioButton from './radio-button/radio-button';

interface Props extends React.Props<App> {
}
const styles = {
  block: {
    maxWidth: 250
  },
  checkbox: {
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
          <RadioButton label="Simple" style={styles.checkbox}/>
        </div>
      </div>
    );
  }
}
