'use client'

import { Star } from 'lucide-react';
import { motion, Variants } from 'motion/react';

const GStars = ({ maxRating, rating }: { maxRating: number, rating: number }) => {
    const starVariants: Variants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: (i: number) => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: 0.2 + i * 0.1, // Staggered delay for each star
                duration: 0.4,
                ease: 'easeOut',
            },
        }),
    };

    return <div className="flex items-center gap-1" aria-label={`Rating: ${rating} out of ${maxRating}`}>
        {Array.from({ length: maxRating }, (_, i) => (
            <motion.div key={i} custom={i} variants={starVariants} initial="hidden" animate="visible">
                <Star
                    className={`size-4 ${rating >= i + 1 ? 'text-yellow-400' : 'text-white/50'}`}
                    fill="currentColor"
                />
            </motion.div>
        ))}
    </div>
}


export default GStars