"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Globe, Server, Cpu, ShieldCheck, Database, Bot } from "lucide-react";
import styles from "./ServicesSection.module.css";

const services = [
    {
        id: "web",
        title: "Diseño y Desarrollo Web",
        desc: "Creamos sitios web de alto impacto, optimizados para conversión y velocidad.",
        icon: <Globe size={32} />,
        features: ["Frontend Moderno", "PWA Ready", "SEO Optimizado", "Diseño UI/UX"]
    },
    {
        id: "hosting",
        title: "Hosting Premium",
        desc: "Alojamiento ultra rápido con soporte 24/7 y seguridad integrada.",
        icon: <Server size={32} />,
        features: ["Certificados SSL", "Backups diarios", "99.9% Uptime", "Panel de control"]
    },
    {
        id: "vps",
        title: "Servidores VPS",
        desc: "Potencia elástica para tus aplicaciones más exigentes.",
        icon: <Cpu size={32} />,
        features: ["Recursos dedicados", "Escalabilidad", "Root access", "Discos NVMe"]
    },
    {
        id: "automation",
        title: "Automatización e IA",
        desc: "Soluciones inteligentes de automatización con chatbots, asistentes virtuales y flujos de trabajo personalizados. Infraestructura completa con N8N, Redis, PostgreSQL y APIs de Meta.",
        icon: <Bot size={32} />,
        features: ["Chatbots Web", "Agendadores de Citas", "Asistentes Empresariales", "Asistentes de Ventas"]
    }
];

export default function ServicesSection() {
    const [activeTab, setActiveTab] = useState(services[0].id);

    return (
        <section id="servicios" className={styles.services}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Nuestros <span className={styles.highlight}>Servicios</span></h2>
                    <p className={styles.subtitle}>Soluciones integrales para llevar tu negocio al siguiente nivel.</p>
                </div>

                <div className={styles.contentGrid}>
                    <div className={styles.tabsMenu}>
                        {services.map((s) => (
                            <button
                                key={s.id}
                                className={`${styles.tabItem} ${activeTab === s.id ? styles.active : ""}`}
                                onClick={() => setActiveTab(s.id)}
                            >
                                <span className={styles.iconWrapper}>{s.icon}</span>
                                <span className={styles.tabTitle}>{s.title}</span>
                            </button>
                        ))}
                    </div>

                    <div className={styles.displayArea}>
                        <AnimatePresence mode="wait">
                            {services.map((s) => s.id === activeTab && (
                                <motion.div
                                    key={s.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4 }}
                                    className={styles.serviceCard}
                                >
                                    <h3 className={styles.cardTitle}>{s.title}</h3>
                                    <p className={styles.cardDesc}>{s.desc}</p>
                                    <div className={styles.featuresList}>
                                        {s.features.map((f, i) => (
                                            <div key={i} className={styles.featureItem}>
                                                <ShieldCheck size={20} className={styles.checkIcon} />
                                                <span>{f}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <button
                                        className={styles.saberMasBtn}
                                        onClick={() => {
                                            window.dispatchEvent(new CustomEvent("chatbot:send", {
                                                detail: { message: `Saludos, me gustaría recibir más información sobre ${s.title}` }
                                            }));
                                        }}
                                    >
                                        Saber Más
                                    </button>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
