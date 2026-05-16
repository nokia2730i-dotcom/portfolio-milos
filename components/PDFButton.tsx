'use client'
import { useState } from 'react'
import { downloadPDF } from './PDFExport'

const style: React.CSSProperties = {
  fontFamily: 'var(--font-syne), Syne, sans-serif',
  fontSize: 10,
  fontWeight: 700,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  padding: '5px 14px',
  borderRadius: 2,
  border: '1px solid #c0392b',
  background: '#c0392b',
  color: '#fff',
  flexShrink: 0,
  transition: 'opacity 0.2s',
}

export default function PDFButton() {
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    if (loading) return
    setLoading(true)
    try {
      await downloadPDF()
    } catch (err) {
      console.error('PDF generation failed:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      style={{ ...style, opacity: loading ? 0.7 : 1, cursor: loading ? 'wait' : 'pointer' }}
    >
      {loading ? 'Generišem...' : 'PDF ↓'}
    </button>
  )
}
