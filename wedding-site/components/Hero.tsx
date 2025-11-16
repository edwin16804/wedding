'use client';

import { motion } from 'framer-motion';
// import Logo3D from './Logo3D';
import ScrollIndicator from './ScrollIndicator';

export default function Hero() {
  return (
    <section
      style={{
        height: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Animated background elements */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.1,
          background: 'radial-gradient(circle at 20% 50%, #D4AF37 0%, transparent 50%), radial-gradient(circle at 80% 50%, #D4AF37 0%, transparent 50%)',
        }}
      />

      {/* 3D Logo */}
      {/* <div
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          top: '50%',
          left: '15%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
        }}
      >
        <Logo3D />
      </div> */}

      {/* Names */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          marginLeft: '0%',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <motion.h1
          style={{
            fontSize: 'clamp(6rem, 17vw, 15rem)',
            fontWeight: '400',
            letterSpacing: '0.1em',
            marginBottom: '0',
            textTransform: 'uppercase',
            color: '#D4AF37',
            position: 'absolute',
            left: '2vw',
            top: '3vh',
            textAlign: 'left',
            lineHeight: 0.85,
          }}
        >
          ANISHA
        </motion.h1>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            fontSize: 'clamp(8rem, 12vw, 15rem)',
            margin: '20px 0',
            color: '#D4AF37',
            position: 'absolute',
            left: '45vw',
            top: '30vh',
            zIndex: 2,
          }}
        >
          &
        </motion.div>

        <motion.h1
          style={{
            fontSize: 'clamp(6rem, 17vw, 15rem)',
            fontWeight: '400',
            letterSpacing: '0.1em',
            marginTop: '0',
            marginBottom: '10',
            textTransform: 'uppercase',
            color: '#D4AF37',
            position: 'absolute',
            right: '2vw',
            bottom: '6vh',
            textAlign: 'right',
            lineHeight: 0.85,
          }}
        >
          AKASH
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          style={{
            marginTop: '40px',
            fontSize: 'clamp(1rem, 2vw, 1.5rem)',
            letterSpacing: '0.3em',
            color: '#D4AF37',
            fontWeight: '300',
          }}
        >
        
        </motion.div>
      </motion.div>

      {/* <ScrollIndicator /> */}
    </section>
  );
}

