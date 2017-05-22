# React Typescript RadioButton
This is a react based radio button component developed using Typescript.
Motivated from [Material-UI](http://callemall.github.io/material-ui/).

## Features
- [ ] Pass the Label Value
- [ ] Pass Custom Style's
- [ ] Customize Icon's in the form of SVG's
- [ ] Pass Default value
- [ ] Ripple Animation Effects
- [ ] Label position - Left/Right
- [ ] Pass disabled mode Styles

    interface Props extends React.Props<RadioButton> {
        label : string;
        style: any;
    };

## Usage
### Basic:
    const styles = {
      radiobutton: {
        marginBottom: 16
      }
    };
    <RadioButton label="Simple" style={styles.radiobutton}/>

### The above example demonstrates the following:
How to pass custom label
How to pass custom style
Shows the default checked, un-checked icons

### Further Customization
    const styles = {
      radiobutton: {
        marginBottom: 16
      }
    };
    <RadioButton label="Custom icon" style={styles.radiobutton} uncheckedIcon={} checkedIcon={} />

The above example demonstrates the following:
How to pass custom label
How to pass custom style
How to pass custom icon's
Can use any svg-image as icons for checked, un-checked icons

## To install dependencies
npm install

## To build the pages
npm start

## Contributing
Contributions are always welcome. Just send a pull request. Feel free to contact me GitHub.

## License
MIT License
