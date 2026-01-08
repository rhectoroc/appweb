"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Briefcase } from "lucide-react";
import styles from "./ClientsSection.module.css";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function ClientsSection() {
    const { language } = useLanguage();
    const t = translations[language].clients;

    const clients = [
        {
            name: "Inmobiliaria Mar Azul",
            logo: "/clients/inmobiliaria.png",
            desc: t.items[0].description,
            category: t.items[0].category,
            url: "https://inmobiliariamarazul.com",
            bgImage: "/clients/bg-realestate.jpg"
        },
        {
            name: "Constructora Global",
            logo: "/clients/constructora.png",
            desc: t.items[1].description,
            category: t.items[1].category,
            url: null,
            bgImage: "/clients/bg-construction.jpg"
        },
        {
            name: "EduTeam Pro",
            logo: "/clients/eduteam.png",
            desc: t.items[2].description,
            category: t.items[2].category,
            url: "https://eduteampro.com",
            bgImage: "/clients/bg-education.jpg"
        },
        {
            name: "Gourmet Experience",
            logo: "/clients/gourmet.png",
            desc: t.items[3].description,
            category: t.items[3].category,
            url: null,
            bgImage: "/clients/bg-restaurant.jpg"
        },
        {
            name: "Materiales del Caribe",
            logo: "/clients/materiales.png",
            desc: t.items[4].description,
            category: t.items[4].category,
            url: null,
            bgImage: "/clients/bg-materials.jpg"
        },
        {
            name: "AutoMarket",
            logo: "/clients/automarket.png",
            desc: t.items[5].description,
            category: t.items[5].category,
            url: null,
            bgImage: "/clients/bg-automotive.jpg"
        }
    ];

    return (
        <section id="clientes" className={styles.clients}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.header}
                >
                    <span className={styles.badge}>{t.badge}</span>
                    <h2 className={styles.title}>
                        {t.title}
                    </h2>
                    <p className={styles.subtitle}>
                        {t.subtitle}
                    </p>
                </motion.div>

                <div className={styles.grid}>
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
                            </CardWrapper >
                        );
})}
                </div >
            </div >
        </section >
    );
}
