import * as React from 'react';

import RadioButton from './radio-button';

interface Props extends React.Props<RadioButtonGroup> {
  name: string;
  children?: any;
  defaultSelected?: string;
}

export default class RadioButtonGroup extends React.Component<Props, {}> {
  public render() {
       
    const {name, children, defaultSelected} = this.props;

    return (
        <div>        
            {
                React.Children.map(this.props.children, child => {
                    const {label, value} = (child as any).props;
                    return (
                        <RadioButton 
                            name={name} 
                            value={value} 
                            label={label} 
                            selected={value === defaultSelected} />
                    );
                })
            }
        </div>
    );
  }
}
