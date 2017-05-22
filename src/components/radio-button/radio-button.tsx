import * as React from 'react';

interface Props extends React.Props<RadioButton> {
  name?: string;
  label: string;
  value: string;  
}

export default class RadioButton extends React.Component<Props, {}> {
  public render() {
    const {label, value, name} = this.props;
    const inputElm = (<label><input name={name} type="radio" label={label} value={value} />{label}</label>);
    return (
      <div>
        {inputElm}
      </div>
    );
  }
}
