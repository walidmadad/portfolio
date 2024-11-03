import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-4">
            <div className="flex justify-center space-x-4">
                <a href="https://www.linkedin.com/in/walid-madad-610828200/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedin} className="text-2xl hover:text-blue-500 transition duration-200" />
                </a>
                <a href="https://github.com/walidmadad" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FontAwesomeIcon icon={faGithub} className="text-2xl hover:text-gray-400 transition duration-200" />
                </a>
                <a href="mailto:walidmadad@walid-madad.com" aria-label="Email">
                    <FontAwesomeIcon icon={faEnvelope} className="text-2xl hover:text-red-500 transition duration-200" />
                </a>
            </div>
            <p className="text-center mt-4">©2024 Walid Madad - All Rights Reserved</p>
        </footer>
    );
}

export default Footer;
