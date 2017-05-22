import * as React from 'react';

interface Props extends React.Props<RadioButton> {
  label: string;
  style?: any;
}

export default class RadioButton extends React.Component<Props, {}> {
  public render() {
    const {label, style} = this.props;
    const inputElm = (<input type="radio" />);
    const labelElm = (
            <label>
                {label}
            </label>
        );
    return (
      <div>
        {inputElm}
          <div>
            {labelElm}
          </div>
      </div>
    );
  }
}
