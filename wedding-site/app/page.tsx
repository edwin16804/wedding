'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from '../components/Hero';

interface WeddingDetail {
  title: string;
  date: string;
  time: string;
  location: string;
}

interface EngagementDetail {
  title: string;
  date: string;
  time: string;
  location: string;
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const weddingDetails: WeddingDetail[] = [
    {
      title: 'Ceremony',
      date: 'August 4, 2023',
      time: '4:00 PM',
      location: 'The Grand Palace',
    },
    {
      title: 'Reception',
      date: 'August 4, 2023',
      time: '7:00 PM',
      location: 'Royal Gardens',
    },
    {
      title: 'Dress Code',
      date: 'Formal Attire',
      time: 'Royal Colors',
      location: 'Purple & Gold Theme',
    },
  ];

  const EngagementDetails: EngagementDetail[] = [
    {
      title: 'Engagement',
      date: 'August 4, 2023',
      time: '4:00 PM',
      location: 'The Grand Palace',
    },
    {
      title: 'Reception',
      date: 'August 4, 2023',
      time: '7:00 PM',
      location: 'Royal Gardens',
    },
    {
      title: 'Dress Code',
      date: 'Formal Attire',
      time: 'Royal Colors',
      location: 'Purple & Gold Theme',
    },
  ];


  return (
    <main>
      <motion.div style={{ opacity }}>
        <Hero />
      </motion.div>

      {/* Our story Section */}
      <section
        style={{
          minHeight: '100vh',
          padding: '100px 50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(to bottom, rgba(245, 240, 224, 0.5), rgba(255, 248, 231, 0.8))',
        }}
      >

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{
            maxWidth: '900px',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              marginBottom: '50px',
              color: '#D4AF37',
              fontWeight: '400',
              letterSpacing: '0.1em',
            }}
          >
            Our Story
          </h2>
          <p
            style={{
              fontSize: 'clamp(1.2rem, 2vw, 1.8rem)',
              lineHeight: '2',
              color: '#B7B09F',
              fontWeight: '300',
            }}
          >
            Two hearts, two souls, united in love. Our journey began with a
            chance encounter that blossomed into a beautiful friendship, and
            eventually, a love that knew no bounds. Today, we celebrate not just
            our union, but the beginning of forever together.
          </p>
        </motion.div>
      </section>

      {/* Engagement details Section */}
      <section
        style={{
          minHeight: '100vh',
          padding: '100px 50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(to bottom, rgba(255, 248, 231, 0.3), rgba(245, 240, 224, 0.5))',
        }}
      >
          <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{
            maxWidth: '1200px',
            width: '100%',
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              marginBottom: '80px',
              color: '#D4AF37',
              fontWeight: '400',
              letterSpacing: '0.1em',
              textAlign: 'center',
            }}
          >
            Engagement Details
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '50px',
            }}
          >
            {EngagementDetails.map((EngagementDetail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                style={{
                  background: 'rgba(212, 175, 55, 0.1)',
                  border: '2px solid rgba(212, 175, 55, 0.3)',
                  borderRadius: '20px',
                  padding: '40px',
                  textAlign: 'center',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <h3
                  style={{
                    fontSize: '2rem',
                    color: '#D4AF37',
                    marginBottom: '20px',
                    fontWeight: '600',
                  }}
                >
                  {EngagementDetail.title}
                </h3>
                <p
                  style={{
                    fontSize: '1.3rem',
                    color: '#B7B09F',
                    marginBottom: '10px',
                  }}
                >
                  {EngagementDetail.date}
                </p>
                <p
                  style={{
                    fontSize: '1.3rem',
                    color: '#B7B09F',
                    marginBottom: '10px',
                  }}
                >
                  {EngagementDetail.time}
                </p>
                <p
                  style={{
                    fontSize: '1.3rem',
                    color: '#B7B09F',
                  }}
                >
                  {EngagementDetail.location}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Wedding details Section */}
      <section
        style={{
          minHeight: '100vh',
          padding: '100px 50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(to bottom, rgba(255, 248, 231, 0.3), rgba(245, 240, 224, 0.5))',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{
            maxWidth: '1200px',
            width: '100%',
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              marginBottom: '80px',
              color: '#D4AF37',
              fontWeight: '400',
              letterSpacing: '0.1em',
              textAlign: 'center',
            }}
          >
            Wedding Details
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '50px',
            }}
          >
            {weddingDetails.map((detail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                style={{
                  background: 'rgba(212, 175, 55, 0.1)',
                  border: '2px solid rgba(212, 175, 55, 0.3)',
                  borderRadius: '20px',
                  padding: '40px',
                  textAlign: 'center',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <h3
                  style={{
                    fontSize: '2rem',
                    color: '#D4AF37',
                    marginBottom: '20px',
                    fontWeight: '600',
                  }}
                >
                  {detail.title}
                </h3>
                <p
                  style={{
                    fontSize: '1.3rem',
                    color: '#B7B09F',
                    marginBottom: '10px',
                  }}
                >
                  {detail.date}
                </p>
                <p
                  style={{
                    fontSize: '1.3rem',
                    color: '#B7B09F',
                    marginBottom: '10px',
                  }}
                >
                  {detail.time}
                </p>
                <p
                  style={{
                    fontSize: '1.3rem',
                    color: '#B7B09F',
                  }}
                >
                  {detail.location}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* RSVP Section */}
      <section
        style={{
          minHeight: '100vh',
          padding: '100px 50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(to bottom, rgba(255, 248, 231, 0.3), rgba(245, 240, 224, 0.5))',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{
            maxWidth: '800px',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              marginBottom: '50px',
              color: '#D4AF37',
              fontWeight: '400',
              letterSpacing: '0.1em',
            }}
          >
            Join Our Celebration
          </h2>
          <p
            style={{
              fontSize: 'clamp(1.2rem, 2vw, 1.8rem)',
              lineHeight: '2',
              color: '#B7B09F',
              marginBottom: '50px',
              fontWeight: '300',
            }}
          >
            Your presence would make our special day complete.
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: '50px',
          textAlign: 'center',
          background: 'rgba(0, 0, 0, 0.5)',
          borderTop: '1px solid rgba(212, 175, 55, 0.3)',
        }}
      >
        <p
          style={{
            fontSize: '1.2rem',
            color: '#D4AF37',
            letterSpacing: '0.2em',
          }}
        >
          WITH LOVE, ANISHA & AKASH
        </p>
        <p
          style={{
            fontSize: '1rem',
            color: '#FFF8E7',
            marginTop: '20px',
            opacity: 0.7,
          }}
        >
          August 4, 2023
        </p>
      </footer>
    </main>
  );
}