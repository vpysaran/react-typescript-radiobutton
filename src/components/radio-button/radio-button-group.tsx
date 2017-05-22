import * as React from 'react';

import RadioButton from './radio-button';

interface Props extends React.Props<RadioButtonGroup> {
  name: string;
  childern?: any;
}

export default class RadioButtonGroup extends React.Component<Props, {}> {
  public render() {
    console.log(this.props);
    const {name, children} = this.props;

    React.Children.map(children, (children.props): any => {
    
    return (
        <RadioButton
          value={children.props.value}
          label={children.props.label}
        />
      );
    }, this);

  }
}
