'use client';

import { motion } from 'framer-motion';

export default function ScrollIndicator() {
  const handleScroll = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      style={{
        position: 'absolute',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        cursor: 'pointer',
      }}
      onClick={handleScroll}
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        style={{
          width: '2px',
          height: '50px',
          background: 'linear-gradient(to bottom, transparent, #D4AF37)',
        }}
      />
      <motion.svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#D4AF37"
        strokeWidth="2"
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
      </motion.svg>
    </motion.div>
  );
}