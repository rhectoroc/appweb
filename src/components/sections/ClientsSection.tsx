"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import styles from "./ClientsSection.module.css";

const clients = [
    {
        name: "Autana Group RD",
        url: "https://autanagrouprd.com/en/",
        description: "Venta de propiedades inmobiliarias",
        category: "Inmobiliaria",
        logo: "/logos/LogoAutanagrouprd.png"
    },
    {
        name: "Ocean Construction",
        url: "https://oceanconstruction.us",
        description: "Remodelación y construcción profesional",
        category: "Construcción",
        logo: "/logos/LogoOcean.png"
    },
    {
        name: "Gente Pro 80",
        url: "https://gentepro80.com",
        description: "Educación y coaching profesional",
        category: "Educación",
        logo: "/logos/Logogentepro80.jpg"
    },
    {
        name: "Sushi Higuerote",
        url: "https://sushihiguerote.com/en/",
        description: "Experiencia gastronómica única",
        category: "Restaurante",
        logo: "/logos/LogoSushihiguerote.png"
    },
    {
        name: "Cal Miranda",
        url: "https://calmiranda.com",
        description: "Venta de materiales de construcción",
        category: "Materiales",
        logo: "/logos/LogoCalmiranda.png"
    },
    {
        name: "MotorX",
        url: null,
        description: "Compra de vehículos",
        category: "Automotriz",
        logo: "/logos/LogoMotorx.jpeg"
    }
];

export default function ClientsSection() {
    return (
        <section id="clientes" className={styles.clients}>
            <div className="container">
                <div className={styles.header}>
                    <motion.span
                        className={styles.badge}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Nuestro Portafolio
                    </motion.span>
                    <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Experiencia de <span className={styles.highlight}>Nuestros Clientes</span>
                    </motion.h2>
                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Proyectos que transforman negocios y crean experiencias memorables
                    </motion.p>
                </div>

                <div className={styles.grid}>
                    {clients.map((client, index) => {
                        const CardWrapper = client.url ? motion.a : motion.div;
                        const cardProps = client.url ? {
                            href: client.url,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        } : {};

                        return (
                            <CardWrapper
                                key={client.name}
                                {...cardProps}
                                className={styles.card}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                            >
                                <div className={styles.cardInner}>
                                    <div className={styles.cardFront}>
                                        <div className={styles.categoryBadge}>{client.category}</div>
                                        <div className={styles.logoWrapper}>
                                            <img
                                                src={client.logo}
                                                alt={client.name}
                                                className={styles.logoImage}
                                            />
                                        </div>
                                        <div className={styles.cardContent}>
                                            <h3 className={styles.cardTitle}>{client.name}</h3>
                                            <p className={styles.cardDesc}>{client.description}</p>
                                            {client.url ? (
                                                <div className={styles.visitButton}>
                                                    <span>Visitar sitio</span>
                                                    <ExternalLink size={18} />
                                                </div>
                                            ) : (
                                                <div className={styles.comingSoon}>
                                                    Próximamente
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </CardWrapper>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
