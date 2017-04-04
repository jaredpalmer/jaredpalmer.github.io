import React, { Component, PropTypes } from 'react';

export default class TrianglifyComponent extends Component {
  constructor(props) {
    super(props);
    this.animate = this.animate.bind(this);
    (this.SEPARATION = 50), (this.AMOUNTX = 40), (this.AMOUNTY = 40);
    this.SEPARATION = 20;
  }

  componentDidMount() {
    this.count = 0.05;
    this.animate();
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.animationFrame);
  }

  animate() {
    this.container.width = window.innerWidth;
    this.container.height = window.innerHeight;

    this.context = this.container.getContext('2d');
    this.context.clearRect(0, 0, window.innerWidth, window.innerHeight);

    this.context.webkitImageSmoothingEnabled = true;

    for (let iz = 1; iz < 30; iz++) {
      for (let ix = 0; ix < this.AMOUNTX; ix++) {
        const xSpacing = this.SEPARATION + iz * 3;
        const ySpacing = (this.SEPARATION + iz) / 4;
        const xOffset = window.innerWidth - this.AMOUNTX * xSpacing;
        const amplitude = 2.5 * (30 - iz);

        const x = xOffset / 2.4 + xSpacing * ix;
        const verticalWave = Math.sin((ix / 2 + iz + this.count / 2) * 0.3);
        const horizontalWave = Math.sin(ix / 2 + this.count / 4) * 0.3;
        const y = iz * ySpacing +
          amplitude * verticalWave +
          5 * iz * horizontalWave;

        const radius = (2 - verticalWave) * iz / 20;

        this.context.beginPath();
        this.context.arc(
          x,
          y + window.innerHeight * 0.7,
          radius,
          0,
          Math.PI * 2,
          false
        );
        this.context.fillStyle = '#111';
        this.context.fill();
      }
    }
    this.count += 0.05;
    requestAnimationFrame(this.animate);
  }

  render() {
    const width = window.innerWidth; // canvas width
    const height = window.innerHeight; // canvas height

    return (
      <canvas
        id={'canvas-pattern'}
        style={{ position: 'fixed', bottom: '0' }}
        ref={ref => {
          this.container = ref;
        }}
      />
    );
  }
}
