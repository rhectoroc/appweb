"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import styles from "./AboutSection.module.css";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function AboutSection() {
    const { language } = useLanguage();
    const t = translations[language].about;

    return (
        <section id="nosotros" className={styles.section}>
            <div className={`container ${styles.container}`}>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={styles.content}
                >
                    <span className={styles.badge}>{t.badge}</span>
                    <h2 className={styles.title}>
                        {t.title}
                    </h2>
                    <p className={styles.description}>
                        {t.description}
                    </p>

                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>{t.years}</span>
                            <span className={styles.statLabel}>{t.yearsLabel}</span>
                        </div>
                    </div>

                    <div className={styles.values}>
                        {t.values.map((value, index) => (
                            <div key={index} className={styles.valueItem}>
                                <div className={styles.checkIcon}>
                                    <CheckCircle size={20} />
                                </div>
                                <div>
                                    <h4 className={styles.valueTitle}>
                                        {value.title}
                                    </h4>
                                    <p className={styles.valueDesc}>
                                        {value.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className={styles.imageWrapper}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <video
                        src="/server.mp4"
                        className={styles.image}
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                    <div className={styles.experienceCard}>
                        <span className={styles.expNumber}>{t.years}</span>
                        <span className={styles.expText}>{t.yearsLabel}</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
