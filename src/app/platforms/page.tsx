import type { Metadata } from 'next';
import PlatformsContent from './PlatformsContent';

export const metadata: Metadata = {
 title: "Trading Platforms | TA Futures",
 description: "Discover our suite of advanced trading platforms for both mobile and desktop execution.",
};

export default function PlatformsPage() {
 return <PlatformsContent />;
}
