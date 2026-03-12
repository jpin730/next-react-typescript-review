'use client'

import { useState } from 'react'

import { Button } from './components/Button'
import { Link } from './components/Link'
import { log } from './utils/log'

interface User {
  id: number
  name: string
  email: string
  password: string
}

type UserWithoutPassword = Omit<User, 'password'>

type UpdateUser = Partial<UserWithoutPassword>

type UserProfile = Pick<UpdateUser, 'name' | 'email'>

type Status = 'active' | 'inactive' | 'pending' | 'suspended'

type AllowedStatus = Exclude<Status, 'suspended' | 'pending' | 'inactive'>

interface ApiResponse<T> {
  data: T
  message: string
}

const Page = () => {
  const [user, setUser] = useState<UserProfile | null>(null)

  setTimeout(() => {
    const response: ApiResponse<UserProfile> = {
      data: {
        name: 'John Doe',
        email: 'john.doe@example.com',
      },
      message: 'User profile fetched successfully',
    }
    setUser(response.data)
    log('User profile already set!')
  }, 2000)

  const status: AllowedStatus = 'active'

  return (
    <div className="flex h-dvh w-dvw">
      <span className="m-auto flex max-w-full shrink-0 flex-wrap items-center justify-center gap-2">
        <Button
          text={'Click me!'}
          backgroundColor="blue"
          style={{ textDecoration: 'underline' }}
          onClick={() => alert('Button clicked!')}
        />

        <Button onClick={() => alert('Another button clicked!')}>
          <span className="me-2 text-lg font-semibold">Another Button</span>
          <span className="inline-block h-2 w-2 animate-ping rounded-full bg-white"></span>
        </Button>

        <Link href="https://www.google.com" target="_blank" rel="noopener noreferrer">
          Primary Link
        </Link>

        <Link
          href="https://www.example.com"
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
        >
          Secondary Link
        </Link>
        <p>{user ? `User: ${user.name} (${user.email})` : 'Loading user...'}</p>
        <p>Status: {status.toUpperCase()}</p>
      </span>
    </div>
  )
}

export default Page
