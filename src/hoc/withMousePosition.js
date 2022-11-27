import React from "react";

const withMousePosition = (WrapperComponent) => {
  class Hoc extends React.Component {
    state = {
      x: 0,
      y: 0,
    };

    componentDidMount() {
      document.body.addEventListener("mousemove", this.updateMousePosition);
    }

    updateMousePosition = (e) => {
      this.setState({
        x: e.pageX,
        y: e.pageY,
      });
    };

    render() {
      return (
        <WrapperComponent
          {...this.props}
          mouseX={this.state.x}
          mouseY={this.state.y}
        />
      );
    }
  }
  return Hoc;
};

export default withMousePosition;
