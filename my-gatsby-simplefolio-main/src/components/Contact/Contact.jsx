import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { title, cta, btn, email } = contact;

  return (
    <section id="contact" className="even-section">
      <Container>
        <Title title={title || 'Contact'} />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="even-section-wrapper">
            <p className="even-section-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
            </p>
            {email && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn cta-btn--resume"
                href={email || 'https://github.com/cobidev/react-simplefolio'}
              >
                {btn || "Let's Talk"}
              </a>
            )}
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
