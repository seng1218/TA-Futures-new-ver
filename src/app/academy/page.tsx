import type { Metadata } from 'next';
import AcademyContent from './AcademyContent';

export const metadata: Metadata = {
 title: "Trading Academy | TA Futures",
 description: "Master the derivatives markets with our comprehensive educational resources and tutorials.",
};

export default function AcademyPage() {
 return <AcademyContent />;
}
