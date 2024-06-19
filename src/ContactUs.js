import React from 'react';
import './ContactUs.css';
import contactImage from './contact-image.jpg'; 
import facebookIcon from './facebook.png';
import twitterIcon from './twitter.png';
import instagramIcon from './instagram.png';
import linkedinIcon from './linkedin.png';

const ContactUs = () => {
    return (
        <div className="container">
            <header>
                <h1>Contact Us - McDonald's</h1>
            </header>
            <section className="image-section">
                <img src={contactImage} alt="McDonald's Contact Us" />
            </section>
            <section className="general-inquiries">
                <h2>General Inquiries</h2>
                <p>For general questions about McDonald's, including menu items, store locations, and nutrition information, please visit our <a href="https://www.mcdonalds.com/us/en-us/contact-us.html">Help Center</a>.</p>
            </section>
            <section className="customer-support">
                <h2>Customer Support</h2>
                <p>If you need assistance with your McDonald's order or have any feedback, our customer support team is here to help.</p>
                <h3>Contact Options</h3>
                <ul>
                    <li><strong>Phone Support</strong>: 1-800-244-6227</li>
                    <li><strong>Email</strong>: <a href="mailto:contact.privacy@us.mcd.com">contact.privacy@us.mcd.com</a></li>
                    <li><strong>Live Chat</strong>: Click <a href="https://www.mcdonalds.com/us/en-us/contact-us.html">here</a> to start a live chat with a customer support representative.</li>
                </ul>
            </section>
            <section className="feedback">
                <h2>Feedback and Suggestions</h2>
                <p>We value your feedback and suggestions to help us improve your McDonald's experience. Please share your thoughts with us by filling out our <a href="https://www.mcdonalds.com/us/en-us/feedback.html">Feedback Form</a>.</p>
            </section>
            <section className="corporate-information">
                <h2>Corporate Information</h2>
                <ul>
                    <li><strong>Media Relations</strong>: <a href="mailto:media.relations@us.mcd.com">media.relations@us.mcd.com</a></li>
                    <li><strong>Investor Relations</strong>: <a href="mailto:investor.relations@us.mcd.com">investor.relations@us.mcd.com</a></li>
                    <li><strong>Partnership Opportunities</strong>: <a href="mailto:partnerships@us.mcd.com">partnerships@us.mcd.com</a></li>
                </ul>
            </section>
            <section className="mailing-address">
                <h2>Mailing Address</h2>
                <p>
                    McDonald's Corporation<br />
                    110 N. Carpenter Street<br />
                    Chicago, IL 60607<br />
                    United States
                </p>
            </section>
            <section className="social-media">
                <h2>Social Media</h2>
                <p>Stay connected with us through our social media channels:</p>
                <ul>
                    <li><a href="https://www.facebook.com/McDonalds" target="_blank" rel="noopener noreferrer">
                    <img src={facebookIcon} alt="Facebook" height="15px" width="20px" />Facebook</a></li>
                    <li><a href="https://twitter.com/McDonalds" target="_blank" rel="noopener noreferrer">
                    <img src={twitterIcon} alt="Twitter" height="15px" width="20px"/> Twitter</a></li>
                    <li><a href="https://www.instagram.com/McDonalds" target="_blank" rel="noopener noreferrer">
                    <img src={instagramIcon} alt="Instagram"height="15px" width="20px" />Instagram</a></li>
                    <li><a href="https://www.linkedin.com/company/mcdonalds" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="LinkedIn"height="15px" width="20px" />LinkedIn</a></li>
                </ul>
            </section>
            <footer>
                <p>For quick answers to common questions, please visit our <a href="https://www.mcdonalds.com/us/en-us/faq.html">FAQ</a> page.</p>
            </footer>
        </div>
    );
};

export default ContactUs;