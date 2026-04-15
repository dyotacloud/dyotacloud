import { useEffect, useState } from 'react'

export default function Loader() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 2200)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className={`page-loader ${hidden ? 'hidden' : ''}`}>
      <div className="loader-logo">
        <img src="/logo.png" alt="Dyota Cloud" style={{ width: 56, height: 56, objectFit: 'contain' }} />
        Dyota<strong>Cloud</strong>
      </div>
      <div className="loader-bar">
        <div className="loader-bar-fill" />
      </div>
      <p style={{ color: 'var(--primary-light)', fontSize: 13, marginTop: 16 }}>Loading amazing things...</p>
    </div>
  )
}
