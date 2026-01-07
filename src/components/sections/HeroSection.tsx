"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
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
                    className={styles.textWrapper}
                >
                    <motion.span
                        className={styles.badge}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Líderes en Innovación Digital
                    </motion.span>

                    <motion.div
                        className={styles.brandReveal}
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.08, delayChildren: 0.5 }
                            }
                        }}
                    >
                        {"Adriel's Systems".split("").map((char, i) => (
                            <motion.span
                                key={i}
                                variants={{
                                    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                                    visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                                }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </motion.div>

                    <h1 className={styles.title}>
                        Soluciones <span className={styles.highlight}>Tecnológicas</span> <br />
                        a tu Medida
                    </h1>

                    <p className={styles.subtitle}>
                        Transformamos tus ideas en realidades digitales de alto impacto.
                        Más de 20 años impulsando el éxito de nuestros clientes a nivel global.
                    </p>

                    <div className={styles.ctaWrapper}>
                        <Link href="#planes">
                            <button className={styles.primaryBtn}>Nuestras Ofertas</button>
                        </Link>
                        <Link href="#nosotros">
                            <button className={styles.secondaryBtn}>Saber Más</button>
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
