import * as React from 'react';

interface Props extends React.Props<RadioButton> {
  name?: string;
  label: string;
  value: string;
  selected?: boolean;
}

export default class RadioButton extends React.Component<Props, {}> {
  public render() {
    const {name, label, value, selected} = this.props;
    const inputElm = (<label><input type="radio" name={name} label={label} value={value} defaultChecked={selected} />{label}</label>);
    return (
      <div>
        {inputElm}         
      </div>
    );
  }
}
