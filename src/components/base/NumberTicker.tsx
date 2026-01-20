import { cn } from '~/lib/utils'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { getGithubRepoStats } from '~/lib/github'

interface NumberTickerProps {
  value: number
  direction?: 'up' | 'down'
  className?: string
  label?: string
  delay?: number // delay in seconds
  play?: boolean
  githubRepo?: string
  githubType?: 'stars' | 'forks'
}

export default function NumberTicker({
  value: initialValue,
  direction = 'up',
  delay = 0,
  className,
  label,
  play = true,
  githubRepo,
  githubType,
}: NumberTickerProps) {
  const [value, setValue] = useState(initialValue)
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(direction === 'down' ? value : 0)
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 1000,
  })

  useEffect(() => {
    let isMounted = true

    const fetchData = async () => {
      if (githubRepo && githubType) {
        const parts = githubRepo.split('/')
        if (parts.length === 2) {
          const stats = await getGithubRepoStats(parts[0], parts[1])
          if (isMounted && stats) {
            setValue(githubType === 'stars' ? stats.stars : stats.forks)
          }
        }
      }
    }

    fetchData()

    return () => {
      isMounted = false
    }
  }, [githubRepo, githubType])

  useEffect(() => {
    if (!play) return

    const timer = setTimeout(() => {
      motionValue.set(direction === 'down' ? 0 : value)
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [motionValue, play, delay, value, direction])

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = `${Intl.NumberFormat('en-US').format(Number.parseInt(latest.toFixed(0)))} ${label ? label : ''}`
      }
    })

    return () => unsubscribe()
  }, [springValue, label])

  return <motion.span className={cn('inline-block tabular-nums', className)} ref={ref} />
}
