"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Headphones } from "lucide-react";
import styles from "./PricingSection.module.css";

const plans = [
    {
        name: "Plan Emprendedor",
        price: "350",
        subtitle: "La puerta de entrada al mundo digital",
        description: "Ideal para nuevos proyectos que buscan establecer su presencia online.",
        features: [
            "Página web One Page informativa",
            "Registro de dominio incluido",
            "Hosting básico + CPanel",
            "Certificado SSL",
            "1 correo corporativo"
        ],
        popular: false,
        oneTime: true
    },
    {
        name: "Plan Profesional",
        price: "650",
        subtitle: "Estructura detallada y profesional",
        description: "Para empresas que requieren mayor comunicación y presencia.",
        features: [
            "Sitio web multi-página (5 secciones)",
            "Registro de dominio incluido",
            "Hosting de alto rendimiento",
            "Certificado SSL",
            "Hasta 5 correos corporativos"
        ],
        popular: true,
        oneTime: true
    },
    {
        name: "Plan Business Plus",
        price: "1,500",
        subtitle: "Potencia máxima para tu negocio",
        description: "Solución completa para E-commerce o gestión empresarial.",
        features: [
            "Web avanzada con E-commerce",
            "Integración con sistemas (HealthCore)",
            "Registro de dominio + Hosting premium",
            "Certificado SSL",
            "Hasta 20 correos corporativos"
        ],
        popular: false,
        oneTime: true
    }
];

export default function PricingSection() {
    return (
        <section id="planes" className={styles.pricing}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Ofertas <span className={styles.highlight}>Especiales</span></h2>
                    <p className={styles.subtitle}>Soluciones diseñadas para impulsar tu negocio al siguiente nivel.</p>
                </div>

                <div className={styles.grid}>
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            className={`${styles.card} ${plan.popular ? styles.popular : ""}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            {plan.popular && <span className={styles.popularBadge}>Más Popular</span>}
                            <h3 className={styles.planName}>{plan.name}</h3>
                            <p className={styles.planSubtitle}>{plan.subtitle}</p>
                            <div className={styles.priceWrapper}>
                                <span className={styles.currency}>$</span>
                                <span className={styles.price}>{plan.price}</span>
                                {plan.oneTime && <span className={styles.period}>inversión única</span>}
                            </div>
                            <p className={styles.planDescription}>{plan.description}</p>
                            <ul className={styles.features}>
                                {plan.features.map((feat) => (
                                    <li key={feat} className={styles.featItem}>
                                        <Check size={18} className={styles.check} />
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                            <button
                                className={styles.selectBtn}
                                onClick={() => {
                                    window.dispatchEvent(new CustomEvent("chatbot:send", {
                                        detail: { message: `Saludos me interesa contratar el ${plan.name}` }
                                    }));
                                }}
                            >
                                Solicitar
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Support Section */}
                <motion.div
                    className={styles.supportSection}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <div className={styles.supportCard}>
                        <div className={styles.supportIcon}>
                            <Headphones size={40} />
                        </div>
                        <div className={styles.supportContent}>
                            <h3 className={styles.supportTitle}>Gestión y Soporte Técnico</h3>
                            <p className={styles.supportText}>
                                En Adriel's Systems nos encargamos de que tu plataforma siempre esté operativa.
                                Ofrecemos la administración integral de tus servicios según tus requerimientos específicos.
                            </p>
                            <div className={styles.supportPricing}>
                                <span className={styles.supportLabel}>Tarifa mensual:</span>
                                <span className={styles.supportRange}>Desde $30 hasta $200</span>
                                <span className={styles.supportNote}>Escalable según complejidad</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
