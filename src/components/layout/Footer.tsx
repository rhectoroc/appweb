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

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.brand}>
                        <div className={styles.logo}>
                            <Code2 size={24} className={styles.logoIcon} />
                            <span>Adriel's Systems</span>
                        </div>
                        <p className={styles.desc}>
                            {t.desc}
                        </p>
                        <div className={styles.social}>
                            <a href="#" className={styles.socialLink}><Github size={20} /></a>
                            <a href="#" className={styles.socialLink}><Linkedin size={20} /></a>
                            <a href="#" className={styles.socialLink}><Twitter size={20} /></a>
                        </div>
                    </div>

                    <div className={styles.links}>
                        <h4 className={styles.linkTitle}>{t.links}</h4>
                        <ul>
                            <li><a href="#inicio">Inicio</a></li>
                            <li><a href="#servicios">Servicios</a></li>
                            <li><a href="#planes">Planes</a></li>
                            <li><a href="#contacto">Contacto</a></li>
                        </ul>
                    </div>

                    <div className={styles.links}>
                        <h4 className={styles.linkTitle}>{t.legal}</h4>
                        <ul>
                            <li><a href="#">{t.terms}</a></li>
                            <li><a href="#">{t.privacy}</a></li>
                            <li><a href="#">{t.cookies}</a></li>
                        </ul>
                    </div>

                    <div className={styles.links}>
                        <h4 className={styles.linkTitle}>{t.contact}</h4>
                        <ul className={styles.contactList}>
                            <li>info@adrielssystems.com</li>
                            <li>+58 412 8507810</li>
                        </ul>
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
