import { createFileRoute, redirect } from '@tanstack/react-router'
import { Login } from '@/components/Login'
// import { ApiBaseUrl } from '@/utils/utils';

export const Route = createFileRoute('/login')({
  // beforeLoad: async () => {
  //   const res = await fetch(`localhost:5025/api/employees/me`, {
  //     credentials: 'include',
  //   })
  //   if (res.ok) {
  //     console.log('Already Logged in, redirecting to /calendar')
  //     // throw redirect({
  //     // 	to: '/calendar',
  //     // });
  //   }
  // },
  component: LoginPage,
})

function LoginPage() {
  return <Login />
}
