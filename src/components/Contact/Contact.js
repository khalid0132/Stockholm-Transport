import { faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Contact = () => {
    return (
        <div className="text-center">
        <h4 className="mt-5"> Contact person: </h4>
        <h5>Khalid Saifullah</h5>
        <p>Phone: +46737139307</p>
        <footer className="footer mt-3 pt-3">
            <a style = {{fontSize: '40px', paddingRight: '20px'}} href="https://www.facebook.com/khalid.saifullah1"><FontAwesomeIcon icon={faFacebook}/></a>
            <a style = {{fontSize: '40px'}} href="https://github.com/khalid0132"><FontAwesomeIcon icon={faGithub}/></a>
           
            <p>All Rights reserved by Khalid</p>
        </footer>
    </div>
    );
};

export default Contact;