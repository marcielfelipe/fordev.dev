import Link from "next/link"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { ModeToggle } from "@/components/mode-toggle"
import { GithubButton } from '@/components/github-button'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "fordev.dev | Blog",
  description: "Blog for devs",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-2xl mx-auto pb-10 px-4">
            <header>
              <div className='pb-5 flex items-baseline justify-between'>
                <Link href={'/'}>
                  <h1 className='text-xl'>
                    fordev<span className='text-fuchsia-800 text-5xl'>.</span><strong>dev</strong>
                  </h1>
                </Link>
                <div className="flex space-x-2">
                  <GithubButton/>
                  <ModeToggle />
                </div>
              </div>
              <div className="flex items-center">
                <nav className="ml-auto text-sm font-medium space-x-6">
                  <Link href="/">Home</Link>
                  {/* <Link href="/about">About</Link>
                  <Link href="/about">Contact</Link>
                  <Link href="/about">Sign up</Link> */}
                </nav>
              </div>
            </header>
            <main>{children}</main>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
