import React from 'react';
import './style/index.scss';

export default class LandingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      works: [
        {
          id: 1,
          text: 'Splash Transition',
          imgSrc: 'splashTransition.gif',
          link: 'https://hideinbush.github.io/demo-collections/src/views/copycat/splashTransition/index.html',
        },
        {
          id: 2,
          text: 'Slice Revealer',
          imgSrc: 'sliceRevealer.gif',
          link: 'https://hideinbush.github.io/demo-collections/src/views/copycat/sliceRevealer/index.html',
        },
        {
          id: 3,
          text: 'Ripple',
          imgSrc: 'ripple.gif',
          link: 'https://hideinbush.github.io/demo-collections/src/views/copycat/ripple/index.html',
        },
      ],
    };

    this.onWorkItemClick = this.onWorkItemClick.bind(this);
  }

  onWorkItemClick(event) {
    const link = event.target.getAttribute('data-link');
    if (link) {
      window.open(link);
    }
  }

  render() {
    const { works } = this.state;

    return (
      <div className="landingPage">
        <div
          role="none"
          className="workContainer"
          onClick={this.onWorkItemClick}
        >
          {
            works.map(work =>
              <div
                className="work-item"
                key={work.id}
                data-link={work.link}
                title={work.text}
              >
                <img src={require(`../../assets/image/${work.imgSrc}`)} />
                <span>{work.text}</span>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}