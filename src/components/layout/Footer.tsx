import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.mainGrid}>
                    <div className={styles.brand}>
                        <div className={styles.logo}>
                            <Image
                                src="/logofinal2.png"
                                alt="Adriel's Systems"
                                width={180}
                                height={45}
                                className={styles.footerLogo}
                            />
                        </div>
                        <p className={styles.brandDesc}>
                            Más de dos décadas transformando el panorama tecnológico global con
                            soluciones innovadoras y soporte de clase mundial.
                        </p>
                        <div className={styles.socials}>
                            <Link href="#" className={styles.socialLink}><Facebook size={20} /></Link>
                            <Link href="#" className={styles.socialLink}><Instagram size={20} /></Link>
                        </div>
                    </div>

                    <div className={styles.links}>
                        <h4 className={styles.footerTitle}>Enlaces</h4>
                        <Link href="#inicio">Inicio</Link>
                        <Link href="#nosotros">Nosotros</Link>
                        <Link href="#servicios">Servicios</Link>
                        <Link href="#planes">Ofertas</Link>
                    </div>

                    <div className={styles.links}>
                        <h4 className={styles.footerTitle}>Legal</h4>
                        <Link href="#">Términos</Link>
                        <Link href="#">Privacidad</Link>
                        <Link href="#">Cookies</Link>
                    </div>

                    <div className={styles.contact}>
                        <h4 className={styles.footerTitle}>Contacto</h4>
                        <div className={styles.contactItem}>
                            <Mail size={18} />
                            <span>cotizaciones@adrielssystems.com</span>
                        </div>
                        <div className={styles.contactItem}>
                            <Phone size={18} />
                            <span>+584222476127</span>
                        </div>
                        <div className={styles.contactItem}>
                            <MapPin size={18} />
                            <span>Nueva Esparta, Isla de Margarita, Venezuela</span>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>© {new Date().getFullYear()} Adriel's Systems. Todos los derechos reservados.</p>
                    <p className={styles.signature}>
                        Developed by <strong>Adriel's Systems</strong> | The Engine of Your Global Software Solutions
                    </p>
                </div>
            </div>
        </footer>
    );
}
