"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
    return (
        <section id="contacto" className={styles.contact}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Hablemos de tu <span className={styles.highlight}>Próximo Proyecto</span></h2>
                    <p className={styles.subtitle}>Estamos listos para llevar tu infraestructura al siguiente nivel.</p>
                </div>

                <div className={styles.infoCenter}>
                    <motion.div
                        className={styles.info}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.infoCard}>
                            <div className={styles.iconBox}><Mail size={24} /></div>
                            <div>
                                <h4>Email</h4>
                                <p>cotizaciones@adrielssystems.com</p>
                            </div>
                        </div>
                        <div className={styles.infoCard}>
                            <div className={styles.iconBox}><Phone size={24} /></div>
                            <div>
                                <h4>Teléfono</h4>
                                <p>+584222476127</p>
                            </div>
                        </div>
                        <div className={styles.infoCard}>
                            <div className={styles.iconBox}><MapPin size={24} /></div>
                            <div>
                                <h4>Ubicación</h4>
                                <p>Nueva Esparta, Isla de Margarita, Venezuela</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
