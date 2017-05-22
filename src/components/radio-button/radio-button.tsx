import * as React from 'react';

interface Props extends React.Props<RadioButton> {
  name?: string;
  label: string;
  value: string;
}

export default class RadioButton extends React.Component<Props, {}> {
  public render() {
    const {name, label, value} = this.props;
    const inputElm = (<label><input type="radio" name={name} label={label} value={value} />{label}</label>);
    return (
      <div>
        {inputElm}         
      </div>
    );
  }
}
