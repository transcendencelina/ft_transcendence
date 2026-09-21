import { useEffect, useState } from 'react'

type Status = 'loading' | 'ok' | 'down'

// Placeholder home page: proves that frontend -> nginx -> backend works.
// Replace it with the real feed once the app is built.
export default function Home() {
  const [status, setStatus] = useState<Status>('loading')

  useEffect(() => {
    fetch('/api/health')
      .then((res) => setStatus(res.ok ? 'ok' : 'down'))
      .catch(() => setStatus('down'))
  }, [])

  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">ft_transcendence</h1>
      <p className="text-slate-600">Project skeleton is running.</p>
      <p>
        Backend status:{' '}
        <span
          className={
            status === 'ok'
              ? 'font-semibold text-green-600'
              : status === 'down'
                ? 'font-semibold text-red-600'
                : 'text-slate-500'
          }
        >
          {status}
        </span>
      </p>
    </section>
  )
}
