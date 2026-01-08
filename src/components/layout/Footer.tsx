"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Mail, Phone, MapPin, Code2, Github, Linkedin, Twitter } from "lucide-react";
import styles from "./Footer.module.css";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function Footer() {
    const { language } = useLanguage();
    const t = translations[language].footer;
    const contactT = translations[language].contact;

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.mainGrid}>
                    <div>
                        <div className={styles.logo}>
                            <Code2 size={32} className={styles.logoIcon} color="#0070f3" style={{ marginBottom: '1rem' }} />
                        </div>
                        <p className={styles.brandDesc}>
                            {t.desc}
                        </p>
                        <div className={styles.socials}>
                            <a href="#" className={styles.socialLink}><Github size={20} /></a>
                            <a href="#" className={styles.socialLink}><Linkedin size={20} /></a>
                            <a href="#" className={styles.socialLink}><Twitter size={20} /></a>
                        </div>
                    </div>

                    <div className={styles.links}>
                        <h4 className={styles.footerTitle}>{t.links}</h4>
                        <a href="#inicio">{translations[language].navbar.items[0].name}</a>
                        <a href="#servicios">{translations[language].navbar.items[2].name}</a>
                        <a href="#planes">{translations[language].navbar.items[3].name}</a>
                        <a href="#contacto">{translations[language].navbar.items[4].name}</a>
                    </div>

                    <div className={styles.links}>
                        <h4 className={styles.footerTitle}>{t.legal}</h4>
                        <a href="#">{t.terms}</a>
                        <a href="#">{t.privacy}</a>
                        <a href="#">{t.cookies}</a>
                        <a href="#">Security</a>
                    </div>

                    <div className={styles.contact}>
                        <h4 className={styles.footerTitle}>{t.contact}</h4>
                        <div className={styles.contactItem}>
                            <Mail size={18} />
                            <span>info@adrielssystems.com</span>
                        </div>
                        <div className={styles.contactItem}>
                            <Phone size={18} />
                            <span>+58 412-8507810</span>
                        </div>
                        <div className={styles.contactItem}>
                            <MapPin size={18} />
                            <span>{contactT.locationText}</span>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Adriel's Systems. {t.rights}</p>
                    <p className={styles.signature}>
                        Developed by <strong>Adriel's Systems</strong> | The Engine of Your Global Software Solutions
                    </p>
                </div>
            </div>
        </footer>
    );
}
