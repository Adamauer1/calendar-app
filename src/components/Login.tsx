import {
  Anchor,
  Button,
  Container,
  Group,
  Paper,
  PasswordInput,
  TextInput,
  Title,
} from '@mantine/core'
import { useRouter } from '@tanstack/react-router'
import { useState } from 'react'
// import { loginFn } from '@/routes/_authed'
import { useForm } from '@tanstack/react-form'
import z from 'zod'
// import { ApiBaseUrl } from '@/utils/utils';

export function Login() {
  const router = useRouter()

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    validators: {
      onSubmitAsync: async ({ value }) => {
        const res = await fetch(`localhost:5025/api/authentication/login`, {
          method: 'POST',
          credentials: 'include',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: value.email,
            password: value.password,
          }),
        })

        if (!res.ok) {
          console.log('Login failed')
          form.resetField('password')
          return { fields: { email: 'Invalid email or password' } }
        }
      },
    },
    onSubmit: async ({ value }) => {
      console.log('handleSignIn called')
      const res = await fetch(`localhost:5025/api/authentication/login`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: value.email, password: value.password }),
      })

      if (!res.ok) {
        console.log('Login failed due to non-ok response')
        // form.setErrorMap({ email: ["Invalid email or password"], password: [] });
        form.resetField('password')
        return
      }
      // router.navigate({ to: '/calendar' });
    },
  })

  return (
    <Container size={420} py={40}>
      <Title ta={'center'}>App</Title>
      <Paper withBorder shadow={'sm'} p={22} mt={30} radius={'md'}>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            e.stopPropagation()
            //  form.handleSubmit(e);
          }}
        >
          <form.Field
            name="email"
            validators={{
              onSubmit: ({ value }) => {
                const result = z.email('Invalid email address').safeParse(value)
                return result.success ? null : result.error.issues[0].message
              },
            }}
          >
            {({ state, handleChange, handleBlur }) => {
              return (
                <TextInput
                  label={'E-mail'}
                  required
                  radius={'md'}
                  value={state.value}
                  onBlur={handleBlur}
                  error={
                    state.meta.errors.length != 0 ? state.meta.errors : null
                  }
                  onChange={(event) => handleChange(event.target.value)}
                />
              )
            }}
          </form.Field>
          <form.Field
            name="password"
            validators={{
              onSubmit: ({ value }) => {
                return value.length <= 0 ? 'Password Required' : null
              },
            }}
          >
            {({ state, handleChange, handleBlur }) => {
              return (
                <PasswordInput
                  label={'Password'}
                  required
                  mt={'md'}
                  radius={'md'}
                  value={state.value}
                  onBlur={handleBlur}
                  error={
                    state.meta.errors.length == 0 ? null : state.meta.errors
                  }
                  onChange={(event) => handleChange(event.target.value)}
                />
              )
            }}
          </form.Field>
        </form>
        <Group justify={'justify-between'} mt={'lg'}>
          <Anchor
            // component={"button"}
            size={'sm'}
            href={'/forgotPassword'}
          >
            Forgot Password?
          </Anchor>
        </Group>
        <Button fullWidth mt={'xl'} radius={'md'} onClick={form.handleSubmit}>
          Sign In
        </Button>
      </Paper>
    </Container>
  )
}
