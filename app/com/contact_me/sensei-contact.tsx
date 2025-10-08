import React, { JSX } from 'react';
import styles from './sensei-contact.module.css';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faUserSecret, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";


//**
// @Author Ahmed Sensei106
// @Description A responsive contact me component with a menu that highlights the active section of the page.
//**


/**
 * @function SenseiContact
 * @description A functional component that renders the contact me section
 * @returns {JSX.Element} The JSX Element for the contact me section
 * @example
 * <SenseiContact />
 */
const SenseiContact = (): JSX.Element => {
    return (
        <section className={styles['Contact-Me-section']} id="Contact">
            <div className={styles['header-section']}>
                <h2 className={styles.title}>
                    {/* A title with a Japanese and English string */}
                    <span lang="ja">連絡先 •</span>
                    <span lang="en"> Contact Me</span>
                </h2>
                <footer className={styles.footer}>
                    <div className={styles.container}>
                        <div className={styles['contact-me']}>
                            <div className={styles['info-me']}>
                                <a
                                    className={styles['link-me']}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="mailto:ahmedemadeldeen77@gmail.com?subject=Hello Ahmed: "
                                >
                                    AhmedEmadeldeen77@gmail.com
                                </a>
                                <div className={styles.social}>
                                    <p className={styles.meon}>Me on Social Network</p>
                                    <a
                                        aria-label="Go to WhatsApp"
                                        href="https://wa.me/201013972690"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="WhatsApp"
                                    >
                                        <FontAwesomeIcon icon={faWhatsapp} />
                                    </a>

                                    <a
                                        aria-label="Go to Facebook"
                                        href="https://www.facebook.com/0x3omda?rdid=l8KHUhiFI83rvw3d&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BPFja34vU%2F"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fa-brands fa-square-facebook"></i>
                                    </a>
                                    <a
                                        aria-label="Go to Instagram"
                                        href="https://www.instagram.com/0x3omda?igsh=MW83cjR3aHJhNDlkZw%3D%3D"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {/* Instagram icon */}
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                    <a
                                        aria-label="Go to Linkedin"
                                        href="https://www.linkedin.com/in/0x3omda/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {/* LinkedIn icon */}
                                        <i className="fa-brands fa-linkedin"></i>
                                    </a>
                                    <a
                                        aria-label="Go to x"
                                        href="https://x.com/Ahmed3Emad77?t=XxokO68ZbNGpLJSmhQ4b3g&s=09"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {/* Telegram icon */}
                                        <i className="fa-brands fa-x-twitter"></i>
                                    </a>
                                    <a
                                        aria-label="Go to Telegram"
                                        href="https://t.me/Ox3omda"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="Telegram"
                                    >
                                        <FontAwesomeIcon icon={faTelegram} />
                                    </a>
                                    <a
                                        aria-label="Go to GitHub"
                                        href="https://github.com/Eng-Ahmed-Emad"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {/* GitHub icon */}
                                        <i className="fa-brands fa-github"></i>
                                    </a>
                                    <a
                                        aria-label="Go to Saraha"
                                        href="https://17833478947642.sarhne.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="Saraha"
                                    >
                                        <FontAwesomeIcon icon={faUserSecret} />
                                    </a>



                                </div>
                            </div>
                        </div>
                        {/* Copyright footer */}
                        <div className={styles.copyright}>

                            &copy; 2024 - {new Date().getFullYear()}{' '}
                            <span>
                                <a
                                    className={styles.Sensei_Name}
                                    href="https://github.com/Eng-Ahmed-Emad/AhmedEmad-Dev"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Ahmed Emad (˶˃ ᵕ ˂˶)
                                </a>
                            </span>{' '}
                            ALL Copyright Reserved.
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    );
};

export default SenseiContact;
