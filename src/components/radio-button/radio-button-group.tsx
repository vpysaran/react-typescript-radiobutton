import * as React from 'react';

import RadioButton from './radio-button';

interface Props extends React.Props<RadioButtonGroup> {
  name: string;
  childern?: any;
  option?: any;
}

export default class RadioButtonGroup extends React.Component<Props, {}> {
  public render() {

    const {name, children} = this.props;

    const options = React.Children.map(children, (option) => {    
        const {label, value} = option.props;
        return (
            <RadioButton name={name} value={value} label={label}/>
        );
    }, this);

    return (
        <div>
            {options}
        </div>
    );
  }
}
