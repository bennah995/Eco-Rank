import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div style={{ fontFamily: 'sans-serif', minHeight: '100vh', backgroundColor: '#f9fafb' }}>

      {/* Hero Section */}
      <div style={{ textAlign: 'center', padding: '3rem 2rem 2rem' }}>

        {/* Logo */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '2rem' }}>
          <div style={{
            width: '44px', height: '44px', borderRadius: '12px',
            backgroundColor: '#1D9E75', display: 'flex',
            alignItems: 'center', justifyContent: 'center'
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2C7 2 3 7 3 12c0 3 1.5 5.5 4 7l1-3c-1.5-1-2.5-2.5-2.5-4C5.5 8 8.5 5 12 5c4.5 0 8 3.5 8 7.5S16.5 20 12 20v-3l-4 4 4 3v-3c5.5 0 10-4.5 10-10S17.5 2 12 2z"
                fill="white"
              />
            </svg>
          </div>
          <span style={{ fontSize: '22px', fontWeight: '500', letterSpacing: '-0.5px', color: '#111' }}>
            Eco<span style={{ color: '#1D9E75' }}>Rank</span>
          </span>
        </div>

        {/* Pill */}
        <div style={{ marginBottom: '1.5rem' }}>
          <span style={{
            display: 'inline-block', backgroundColor: '#E1F5EE',
            color: '#0F6E56', fontSize: '12px', fontWeight: '500',
            padding: '4px 14px', borderRadius: '999px', letterSpacing: '0.5px'
          }}>
            Earth Day Hackathon 2026
          </span>
        </div>

        {/* Heading */}
        <h1 style={{ fontSize: '28px', fontWeight: '500', lineHeight: '1.3', margin: '0 0 1rem', color: '#111' }}>
          Act on the planet. <br />
          <span style={{ color: '#1D9E75' }}>Earn points. Lead the change.</span>
        </h1>

        {/* Description */}
        <p style={{
          fontSize: '15px', color: '#555', lineHeight: '1.7',
          maxWidth: '480px', margin: '0 auto 2.5rem'
        }}>
          EcoRank turns everyday eco-friendly actions into a rewarding, competitive experience.
          Report litter, dispose of e-waste responsibly, complete daily challenges — and compete
          with your community on a live leaderboard.
        </p>

        {/* Feature Cards */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '12px', maxWidth: '520px', margin: '0 auto 2.5rem'
        }}>
          {/* Report */}
          <div style={{
            backgroundColor: '#fff', border: '0.5px solid #e5e7eb',
            borderRadius: '8px', padding: '14px 12px', textAlign: 'center'
          }}>
            <div style={{
              width: '32px', height: '32px', borderRadius: '8px',
              backgroundColor: '#E1F5EE', margin: '0 auto 8px',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6" stroke="#1D9E75" strokeWidth="1.5" />
                <path d="M5 8l2 2 4-4" stroke="#1D9E75" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <div style={{ fontSize: '15px', fontWeight: '500', color: '#111', marginBottom: '2px' }}>Report</div>
            <div style={{ fontSize: '12px', color: '#888', lineHeight: '1.4' }}>Spot & resolve problems</div>
          </div>

          {/* Earn */}
          <div style={{
            backgroundColor: '#fff', border: '0.5px solid #e5e7eb',
            borderRadius: '8px', padding: '14px 12px', textAlign: 'center'
          }}>
            <div style={{
              width: '32px', height: '32px', borderRadius: '8px',
              backgroundColor: '#FAEEDA', margin: '0 auto 8px',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <polygon
                  points="8,2 10,6 14,6.5 11,9.5 11.5,14 8,12 4.5,14 5,9.5 2,6.5 6,6"
                  stroke="#BA7517" strokeWidth="1.5" fill="none" strokeLinejoin="round"
                />
              </svg>
            </div>
            <div style={{ fontSize: '15px', fontWeight: '500', color: '#111', marginBottom: '2px' }}>Earn</div>
            <div style={{ fontSize: '12px', color: '#888', lineHeight: '1.4' }}>Points for every action</div>
          </div>

          {/* Compete */}
          <div style={{
            backgroundColor: '#fff', border: '0.5px solid #e5e7eb',
            borderRadius: '8px', padding: '14px 12px', textAlign: 'center'
          }}>
            <div style={{
              width: '32px', height: '32px', borderRadius: '8px',
              backgroundColor: '#E6F1FB', margin: '0 auto 8px',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="10" width="3" height="4" rx="1" fill="#378ADD" />
                <rect x="6.5" y="7" width="3" height="7" rx="1" fill="#378ADD" />
                <rect x="11" y="4" width="3" height="10" rx="1" fill="#378ADD" />
              </svg>
            </div>
            <div style={{ fontSize: '15px', fontWeight: '500', color: '#111', marginBottom: '2px' }}>Compete</div>
            <div style={{ fontSize: '12px', color: '#888', lineHeight: '1.4' }}>Weekly leaderboards</div>
          </div>
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
          <button
            onClick={() => navigate('/register')}
            style={{
              backgroundColor: '#1D9E75', color: '#fff', border: 'none',
              borderRadius: '8px', padding: '12px 36px', fontSize: '15px',
              fontWeight: '500', cursor: 'pointer'
            }}
          >
            Create account
          </button>
          <button
            onClick={() => navigate('/login')}
            style={{
              backgroundColor: '#fff', color: '#111',
              border: '0.5px solid #d1d5db', borderRadius: '8px',
              padding: '12px 36px', fontSize: '15px',
              fontWeight: '500', cursor: 'pointer'
            }}
          >
            Log in
          </button>
        </div>
      </div>

      {/* Divider */}
      <hr style={{ border: 'none', borderTop: '0.5px solid #e5e7eb', margin: '0 2rem 2rem' }} />

      {/* How It Works */}
      <div style={{ padding: '0 2rem 2.5rem', textAlign: 'center' }}>
        <div style={{ fontSize: '13px', color: '#aaa', marginBottom: '1.25rem', letterSpacing: '0.5px' }}>
          HOW IT WORKS
        </div>

        <div style={{
          display: 'flex', alignItems: 'flex-start',
          justifyContent: 'center', maxWidth: '480px', margin: '0 auto'
        }}>
          {[
            { step: '1', label: 'Spot a problem' },
            { step: '2', label: 'Photo & resolve' },
            { step: '3', label: 'Earn points' },
            { step: '4', label: 'Climb the rank', active: true },
          ].map(({ step, label, active }, index, arr) => (
            <div key={step} style={{ flex: 1, textAlign: 'center', position: 'relative' }}>
              {index < arr.length - 1 && (
                <div style={{
                  position: 'absolute', top: '16px', left: '50%',
                  width: '100%', height: '1px', backgroundColor: '#e5e7eb', zIndex: 0
                }} />
              )}
              <div style={{
                width: '32px', height: '32px', borderRadius: '50%',
                margin: '0 auto 8px',
                backgroundColor: active ? '#1D9E75' : '#E1F5EE',
                color: active ? '#fff' : '#0F6E56',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '13px', fontWeight: '500',
                position: 'relative', zIndex: 1
              }}>
                {step}
              </div>
              <div style={{ fontSize: '11px', color: '#888', lineHeight: '1.4' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ fontSize: '12px', color: '#bbb', textAlign: 'center', paddingBottom: '1.5rem' }}>
        Built for Nairobi. Powered by community action.
      </div>

    </div>
  )
}

export default Home