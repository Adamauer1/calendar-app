import { createFileRoute, useNavigate, useRouter } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const router = useRouter()
  const state = Route.useLoaderData()
  const navigator = useNavigate()
  useEffect(() => {
    navigator({ to: '/login' })
  }, [navigator])
  return <></>
}
