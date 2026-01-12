import CallContent from '../components/CallContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Réserver un Appel Gratuit",
    description: "Réservez un appel gratuit de 30 minutes avec notre équipe pour discuter de votre projet web. Agence web à Bordeaux.",
    openGraph: {
        title: "Réserver un Appel Gratuit | Pryzm",
        description: "Réservez un appel gratuit de 30 minutes avec notre équipe pour discuter de votre projet web.",
        url: "https://pryzm.agency/call",
    },
    alternates: {
        canonical: "https://pryzm.agency/call",
    },
};

export default function CallPage() {
    return <CallContent />;
} 