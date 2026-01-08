"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import styles from "./ContactSection.module.css";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function ContactSection() {
    const { language } = useLanguage();
    const t = translations[language].contact;

    return (
        <section id="contacto" className={styles.contact}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.info}>
                        <h2 className={styles.title}>
                            {t.title}
                        </h2>
                        <p className={styles.subtitle}>
                            {t.subtitle}
                        </p>

                        <div className={styles.details}>
                            <div className={styles.detailItem}>
                                <Mail size={24} className={styles.icon} />
                                <div>
                                    <span className={styles.label}>{t.email}</span>
                                    <a href="mailto:info@adrielssystems.com" className={styles.link}>info@adrielssystems.com</a>
                                </div>
                            </div>
                            <div className={styles.detailItem}>
                                <Phone size={24} className={styles.icon} />
                                <div>
                                    <span className={styles.label}>{t.phone}</span>
                                    <a href="tel:+584128507810" className={styles.link}>+58 412-8507810</a>
                                </div>
                            </div>
                            <div className={styles.detailItem}>
                                <MapPin size={24} className={styles.icon} />
                                <div>
                                    <span className={styles.label}>{t.location}</span>
                                    <p className={styles.text}>{t.locationText}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.mapWrapper}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125586.20818228198!2d-63.95764835619379!3d10.995964955734268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c318c64d26b527b%3A0x62a4d943537a7b!2sIsla%20de%20Margarita!5e0!3m2!1ses!2sve!4v1709420000000!5m2!1ses!2sve"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
