"use client"
import { Github } from 'lucide-react'
import Link from 'next/link'

export function GithubButton() {

  return (
    <Link href={'https://github.com/marcielfelipe/fordev.dev'} target='_blank'>
      <button
        className="border rounded-md w-6 h-6 flex items-center justify-center">
        <span className="sr-only">GitHub</span>
        <Github size={14}/>
      </button>
    </Link>
  )
}
