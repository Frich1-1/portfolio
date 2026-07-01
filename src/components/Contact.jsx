import { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Github, Linkedin } from './BrandIcons';
import './Contact.css';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [captchaValue, setCaptchaValue] = useState(null);

  // Replace with your Formspree form ID once created
  const FORMSPREE_FORM_ID = 'mzdqondp'; 

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formState,
          'g-recaptcha-response': captchaValue
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormState({ name: '', email: '', subject: '', message: '' });
        setCaptchaValue(null);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="contact__container split-showcase animate-in">
        
        {/* Left Side Content */}
        <div className="split-showcase__left">
          <span className="section-label">Contact</span>
          <h2 className="split-showcase__title">Get In<br />Touch</h2>
          
          <p className="split-showcase__desc">
            Have a project in mind, a job opportunity, or just want to connect? Drop me a message or find me on socials!
          </p>

          <div className="contact__socials-box">
            <div className="contact__cards">
              <a href="mailto:richiewong110107@gmail.com" className="contact__card">
                <div className="contact__card-icon">
                  <Mail size={18} />
                </div>
                <div className="contact__card-details">
                  <span className="contact__card-label">Email</span>
                  <span className="contact__card-value">richiewong110107@gmail.com</span>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/richiewong1101" target="_blank" rel="noopener noreferrer" className="contact__card">
                <div className="contact__card-icon">
                  <Linkedin size={18} />
                </div>
                <div className="contact__card-details">
                  <span className="contact__card-label">LinkedIn</span>
                  <span className="contact__card-value">linkedin.com/in/richiewong1101</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side Content: Skewed Form Wrapper */}
        <div className="split-showcase__right">
          <div className="split-showcase__skewed-wrapper">
            <div className="split-showcase__skewed-backdrop split-showcase__skewed-backdrop--top"></div>
            <div className="split-showcase__skewed-backdrop split-showcase__skewed-backdrop--bottom"></div>
            
            <div className="contact__form-wrapper">
              <form onSubmit={handleSubmit} className="contact__form">
                <div className="contact__form-group">
                  <label htmlFor="name" className="contact__form-label">Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="John Doe" 
                    className="contact__form-input" 
                    required 
                  />
                </div>

                <div className="contact__form-group">
                  <label htmlFor="email" className="contact__form-label">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="john@example.com" 
                    className="contact__form-input" 
                    required 
                  />
                </div>

                <div className="contact__form-group">
                  <label htmlFor="subject" className="contact__form-label">Subject</label>
                  <input 
                    type="text" 
                    name="subject" 
                    id="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry" 
                    className="contact__form-input" 
                    required 
                  />
                </div>

                <div className="contact__form-group">
                  <label htmlFor="message" className="contact__form-label">Your Message</label>
                  <textarea 
                    name="message" 
                    id="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows="4" 
                    placeholder="Describe your project, ideas, or message here..." 
                    className="contact__form-input contact__form-input--textarea" 
                    required
                  />
                </div>

                <div className="contact__form-group">
                  <ReCAPTCHA
                    sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'}
                    onChange={(val) => setCaptchaValue(val)}
                    theme="dark"
                  />
                </div>

                <button 
                  type="submit" 
                  className="contact__submit-btn"
                  disabled={isSubmitting || !captchaValue}
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  <Send size={15} />
                </button>

                {submitStatus === 'success' && (
                  <div className="contact__status contact__status--success">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="contact__status contact__status--error">
                    Oops! Something went wrong. You can also contact me directly.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
