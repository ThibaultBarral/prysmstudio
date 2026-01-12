import MentionsLegalesContent from '../components/MentionsLegalesContent'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Mentions Légales",
  description: "Mentions légales de l'agence web Pryzm à Bordeaux. Informations légales et conditions d'utilisation.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://pryzm.agency/mentions-legales",
  },
};

export default function MentionsLegales() {
    return (
        <>
            <MentionsLegalesContent />
        </>
    )
} 