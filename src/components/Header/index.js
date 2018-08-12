import React from 'react';
import userConfig from '../../../config';

import Container from '../Container';
import HeaderImage from '../HeaderImage';
import Social from '../Social';
import H1 from '../H1';
import P from './P';
import Link from './Link';
import Wrapper from './Wrapper';
import Typist from 'react-typist';
import '../../../node_modules/react-typist/dist/Typist.css';
import './style.css';

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Wrapper>
          {userConfig.showHeaderImage && (
            <HeaderImage/>
          )}
          <H1><Link to="/">{this.props.config.author}</Link></H1>
          <Typist className='tagline' avgTypingSpeed={40}>{this.props.config.tagline}</Typist>

          {this.props.config.social &&
            <Social
              github={this.props.config.social.github}
              twitter={this.props.config.social.twitter}
              linkedin={this.props.config.social.linkedin}
            />
          }
        </Wrapper>
      </Container>
    );
  }
}

// function Header({ config }) {
//   const { author, tagline, social } = config;
//
//   return (
//     <Container>
//       <Wrapper>
//         {userConfig.showHeaderImage && (
//           <HeaderImage/>
//         )}
//         <H1><Link to="/">{author}</Link></H1>
//         <Typist className='tagline' avgTypingSpeed={40}>{tagline}</Typist>
//         {social &&
//           <Social
//             github={social.github}
//             twitter={social.twitter}
//             linkedin={social.linkedin}
//           />
//         }
//       </Wrapper>
//     </Container>
//   );
// }

export default Header;
