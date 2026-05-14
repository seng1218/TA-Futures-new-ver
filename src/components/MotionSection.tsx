'use client';

import { motion } from 'framer-motion';

export default function MotionSection({
 children,
 className = "",
}: {
 children: React.ReactNode;
 className?: string;
}) {
 return (
 <motion.section
 initial={{ opacity: 0, y: 30, rotateX: 10, scale: 0.98 }}
 whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
 viewport={{ once: true, amount: 0.15 }}
 transition={{ duration: 0.75, ease: "easeOut" }}
 style={{ transformOrigin: 'bottom center', perspective: '1200px', transformStyle: 'preserve-3d' }}
 className={className}
 >
 {children}
 </motion.section>
 );
}
