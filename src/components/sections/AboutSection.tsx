"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Zap, TrendingUp } from "lucide-react";
import styles from "./AboutSection.module.css";

const values = [
    {
        title: "Tranquilidad y Seguridad",
        description: "Protegemos tu infraestructura con los más altos estándares.",
        icon: <Shield size={32} />
    },
    {
        title: "Innovación Constante",
        description: "Implementamos las últimas tecnologías para mantenerte a la vanguardia.",
        icon: <Zap size={32} />
    },
    {
        title: "Éxito del Cliente",
        description: "Tu crecimiento es nuestro principal objetivo y motor.",
        icon: <TrendingUp size={32} />
    }
];

export default function AboutSection() {
    return (
        <section id="nosotros" className={styles.about}>
            <div className="container">
                <div className={styles.grid}>
                    <motion.div
                        className={styles.textContent}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className={styles.sectionBadge}>Sobre Nosotros</span>
                        <h2 className={styles.title}>Más de 20 años <br /> <span className={styles.highlight}>Liderando el Mercado</span></h2>
                        <p className={styles.description}>
                            Adriel's Systems nació con la visión de simplificar la tecnología para las empresas.
                            Hoy somos un referente internacional en soluciones de infraestructura, desarrollo
                            y automatización, ayudando a cientos de clientes a escalar sus negocios en la era digital.
                        </p>

                        <div className={styles.valuesGrid}>
                            {values.map((val, idx) => (
                                <div key={idx} className={styles.valueItem}>
                                    <span className={styles.valueIcon}>{val.icon}</span>
                                    <div>
                                        <h4 className={styles.valueTitle}>{val.title}</h4>
                                        <p className={styles.valueText}>{val.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.imageContent}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className={styles.imageWrapper}>
                            <video
                                src="/server.mp4"
                                className={styles.mainImage}
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                            <div className={styles.imageOverlay}></div>
                            <div className={styles.floatingCard}>
                                <span className={styles.cardNumber}>20+</span>
                                <span className={styles.cardLabel}>Años de Experiencia</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
