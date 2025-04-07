import React from "react";
import { LanguageProvider } from "../contexts/Language";
import Head from "../components/Head";
import Footer from "../components/Footer";
import LanguageSelector from "../components/LanguageSelector";

export default function Layout({ children }) {
    return (
        <LanguageProvider>
            <main className="font-barlow bg-darkred text-white">
                <Head />
                <LanguageSelector />
                {children}
                <Footer />
            </main>
        </LanguageProvider >
    );
}
