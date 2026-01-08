"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import styles from "./HeroSection.module.css";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function HeroSection() {
    const { language } = useLanguage();
    const t = translations[language].hero;

    return (
        <section id="inicio" className={styles.hero}>
            <div className={styles.dynamicBg}>
                <div className={styles.blob}></div>
                <div className={styles.blob}></div>
            </div>
            <div className={styles.overlay}></div>
            <div className={styles.gridOverlay}></div>

            <div className={`container ${styles.content}`}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className={styles.contentInner}
                >
                    <div className={styles.brandTitle}>
                        Adriel's Systems
                    </div>

                    <h1 className={styles.title}>
                        {t.title}
                    </h1>


                    <motion.span
                        className={styles.badge}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        {t.badge}
                    </motion.span>

                    <div className={styles.ctaWrapper}>
                        <Link href="#planes">
                            <button className={styles.primaryBtn}>{t.ctaPrimary}</button>
                        </Link>
                        <Link href="#nosotros">
                            <button className={styles.secondaryBtn}>{t.ctaSecondary}</button>
                        </Link>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className={styles.scrollIndicator}
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <ChevronDown size={32} />
            </motion.div>
        </section>
    );
}
