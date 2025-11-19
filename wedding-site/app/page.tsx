'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from '../components/Hero';

interface WeddingDetail {
  title: string;
  date: string;
  time: string;
  location: string;
  link: string;

}

interface EngagementDetail {
  title: string;
  date: string;
  time: string;
  location: string;
  link: string;
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const weddingDetails: WeddingDetail[] = [
    {
      title: 'Ceremony',
      date: 'January 3, 2025',
      time: '4:00 PM',
      location: 'Christ the King Church, Loyola College Campus, Chennai',
      link: 'https://maps.app.goo.gl/aLC3diKvXpkGUPhW9?g_st=ipc',
    },
    {
      title: 'Reception',
      date: 'January 3, 2025',
      time: '6:30 PM onwards',
      location: 'Hotel Savera, Chennai',
      link: 'https://maps.app.goo.gl/2YjCgDSzJSBhfaB66?g_st=ipc',
    },
  ];

  const EngagementDetails: EngagementDetail[] = [
    {
      title: 'Pre-Engagement',
      date: 'December 27, 2025',
      time: '7:30 PM',
      location: 'Courtyard by Marriott, Vadodara',
      link: 'https://maps.app.goo.gl/11G1jhafShfnhNFQ7?g_st=ipc',
    },
    {
      title: 'Engagement',
      date: 'December 28, 2025',
      time: '3:30 PM',
      location: 'Rosary Cathedral Church, Vadodara',
      link: 'https://maps.app.goo.gl/9XEx2nmzeKjuvQ1cA?g_st=ipc',
    },
    {
      title: 'Reception',
      date: 'December 28, 2025',
      time: '7:30 PM onwards',
      location: 'Laxmi Vilas Palace, Vadodara',
      link: 'https://maps.app.goo.gl/STCSp5pAQFiB7w5v7?g_st=ipc',
    }
  ];


  return (
    <main>
      <motion.div style={{ opacity }}>
        <Hero />
      </motion.div>

      {/* Welcome Section */}
      <section
        style={{
          minHeight: '100vh',
          padding: '100px 50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: `
      linear-gradient(to bottom, rgba(255, 248, 231, 0.6), rgba(245, 240, 224, 0.8)),
      url('/couple.jpg')
    `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
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
              color: '#000000',
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
              color: '#000000',
              marginBottom: '50px',
              fontWeight: '300',
            }}
          >
            Your presence would make our special day complete
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
                    textAlign: 'center', // Center the title
                  }}
                >
                  {EngagementDetail.title}
                </h3>

                {/* Date */}
                <p
                  style={{
                    fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
                    color: '#B7B09F',
                    marginBottom: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', // Center the content
                    gap: 'clamp(6px, 1.5vw, 8px)',
                    flexWrap: 'wrap',
                  }}
                >
                  {/* Calendar Icon */}
                  <svg 
                    width="clamp(16px, 4vw, 18px)" 
                    height="clamp(16px, 4vw, 18px)" 
                    fill="none" 
                    stroke="#B7B09F" 
                    viewBox="0 0 24 24" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    style={{ flexShrink: 0 }}
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  {EngagementDetail.date}
                </p>

                {/* Time */}
                <p
                  style={{
                    fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
                    color: '#B7B09F',
                    marginBottom: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', // Center the content
                    gap: 'clamp(6px, 1.5vw, 8px)',
                    flexWrap: 'wrap',
                  }}
                >
                  {/* Clock Icon */}
                  <svg 
                    width="clamp(16px, 4vw, 18px)" 
                    height="clamp(16px, 4vw, 18px)" 
                    fill="none" 
                    stroke="#B7B09F" 
                    viewBox="0 0 24 24" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    style={{ flexShrink: 0 }}
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {EngagementDetail.time}
                </p>

                {/* Plain Location Text */}
                <p
                  style={{
                    fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
                    color: '#B7B09F',
                    marginBottom: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 'clamp(6px, 1.5vw, 8px)',
                    lineHeight: '1.4',
                    maxWidth: '100%', // Ensure it doesn't exceed container width
                  }}
                >
                  {/* Pin Icon */}
                  <svg 
                    width="clamp(16px, 4vw, 18px)" 
                    height="clamp(16px, 4vw, 18px)" 
                    fill="none" 
                    stroke="#B7B09F" 
                    viewBox="0 0 24 24" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    style={{ flexShrink: 0 }}
                  >
                    <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span 
                    style={{ 
                      wordBreak: 'break-word',
                      overflowWrap: 'break-word',
                    }}
                  >
                    {EngagementDetail.location}
                  </span>
                </p>

                {/* Link */}
                <p
                  style={{
                    fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
                    color: '#B7B09F',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', // Center the content
                    gap: 'clamp(6px, 1.5vw, 8px)',
                    flexWrap: 'wrap',
                  }}
                >
                  {/* Link Icon */}
                  <svg 
                    width="clamp(16px, 4vw, 18px)" 
                    height="clamp(16px, 4vw, 18px)" 
                    fill="none" 
                    stroke="#B7B09F" 
                    viewBox="0 0 24 24" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    style={{ flexShrink: 0 }}
                  >
                    <path d="M10 13a5 5 0 0 1 7-7l1 1" />
                    <path d="M14 11a5 5 0 0 1-7 7l-1-1" />
                    <line x1="8" y1="16" x2="16" y2="8" />
                  </svg>

                  <a
                    href={EngagementDetail.link}
                    target="_blank"
                    style={{ 
                      color: '#B7B09F', 
                      textDecoration: 'underline',
                      wordBreak: 'break-word'
                    }}
                  >
                    Location
                  </a>
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
            {weddingDetails.map((WeddingDetail, index) => (
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
                    textAlign: 'center', // Center the title
                  }}
                >
                  {WeddingDetail.title}
                </h3>

                {/* Date */}
                <p
                  style={{
                    fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
                    color: '#B7B09F',
                    marginBottom: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', // Center the content
                    gap: 'clamp(6px, 1.5vw, 8px)',
                    flexWrap: 'wrap',
                  }}
                >
                  {/* Calendar Icon */}
                  <svg 
                    width="clamp(16px, 4vw, 18px)" 
                    height="clamp(16px, 4vw, 18px)" 
                    fill="none" 
                    stroke="#B7B09F" 
                    viewBox="0 0 24 24" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    style={{ flexShrink: 0 }}
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  {WeddingDetail.date}
                </p>

                {/* Time */}
                <p
                  style={{
                    fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
                    color: '#B7B09F',
                    marginBottom: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', // Center the content
                    gap: 'clamp(6px, 1.5vw, 8px)',
                    flexWrap: 'wrap',
                  }}
                >
                  {/* Clock Icon */}
                  <svg 
                    width="clamp(16px, 4vw, 18px)" 
                    height="clamp(16px, 4vw, 18px)" 
                    fill="none" 
                    stroke="#B7B09F" 
                    viewBox="0 0 24 24" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    style={{ flexShrink: 0 }}
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {WeddingDetail.time}
                </p>

                {/* Plain Location Text */}
                <p
                  style={{
                    fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
                    color: '#B7B09F',
                    marginBottom: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 'clamp(6px, 1.5vw, 8px)',
                    lineHeight: '1.4',
                    maxWidth: '100%', // Ensure it doesn't exceed container width
                  }}
                >
                  {/* Pin Icon */}
                  <svg 
                    width="clamp(16px, 4vw, 18px)" 
                    height="clamp(16px, 4vw, 18px)" 
                    fill="none" 
                    stroke="#B7B09F" 
                    viewBox="0 0 24 24" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    style={{ flexShrink: 0 }}
                  >
                    <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span 
                    style={{ 
                      wordBreak: 'break-word',
                      overflowWrap: 'break-word',
                    }}
                  >
                    {WeddingDetail.location}
                  </span>
                </p>

                {/* Link */}
                <p
                  style={{
                    fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
                    color: '#B7B09F',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', // Center the content
                    gap: 'clamp(6px, 1.5vw, 8px)',
                    flexWrap: 'wrap',
                  }}
                >
                  {/* Link Icon */}
                  <svg 
                    width="clamp(16px, 4vw, 18px)" 
                    height="clamp(16px, 4vw, 18px)" 
                    fill="none" 
                    stroke="#B7B09F" 
                    viewBox="0 0 24 24" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    style={{ flexShrink: 0 }}
                  >
                    <path d="M10 13a5 5 0 0 1 7-7l1 1" />
                    <path d="M14 11a5 5 0 0 1-7 7l-1-1" />
                    <line x1="8" y1="16" x2="16" y2="8" />
                  </svg>

                  <a
                    href={WeddingDetail.link}
                    target="_blank"
                    style={{ 
                      color: '#B7B09F', 
                      textDecoration: 'underline',
                      wordBreak: 'break-word'
                    }}
                  >
                    Location
                  </a>
                </p>
              </motion.div>
            ))}
          </div>
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
      </footer>
    </main>
  );
}