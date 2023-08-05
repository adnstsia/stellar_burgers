import React from "react";

class SmallText extends React.Component {
  render() {
    const { text } = this.props;

    return <p className="text text_type_main-small">{text}</p>;
  }
}

class LargeText extends React.Component {
  render() {
    const { text } = this.props;

    return <p className="text text_type_main-large">{text}</p>;
  }
}

class MediumText extends React.Component {
  render() {
    const { text } = this.props;

    return <p className="text text_type_main-medium">{text}</p>;
  }
}

class DigitsMedium extends React.Component {
  render() {
    const { text } = this.props;

    return <p className="text text_type_digits-medium">{text}</p>;
  }
}

export { SmallText, LargeText, MediumText, DigitsMedium };
