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
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        {t.title}
                    </h2>
                    <p className={styles.subtitle}>
                        {t.subtitle}
                    </p>
                </div>

                <div className={styles.infoCenter}>
                    <div className={styles.info}>
                        <div className={styles.infoCard}>
                            <div className={styles.iconBox}>
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4>{t.email}</h4>
                                <a href="mailto:info@adrielssystems.com" className={styles.link}>info@adrielssystems.com</a>
                            </div>
                        </div>

                        <div className={styles.infoCard}>
                            <div className={styles.iconBox}>
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4>{t.phone}</h4>
                                <a href="tel:+584128507810" className={styles.link}>+58 412-8507810</a>
                            </div>
                        </div>

                        <div className={styles.infoCard}>
                            <div className={styles.iconBox}>
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4>{t.location}</h4>
                                <p>{t.locationText}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
