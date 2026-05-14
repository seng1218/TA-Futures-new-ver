import type { Metadata } from 'next';
import MarketsContent from './MarketsContent';

export const metadata: Metadata = {
 title: "Markets & Contract Specs | TA Futures",
 description: "Explore contract specifications and margin requirements for BMD and CME futures.",
};

export default function MarketsPage() {
 return <MarketsContent />;
}
