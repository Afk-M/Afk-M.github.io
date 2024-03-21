import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
    return (
        <footer>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <br></br>
            <div style={{marginTop: '10px'}}>
                <span style={{ fontSize: '12px' }}>© 2024 matt n.i.</span>
                <a style={{ fontSize: '12px' }} href="https://example.com">this site is open-source</a>
            </div>
        </footer>
    );
};

export default Footer;
