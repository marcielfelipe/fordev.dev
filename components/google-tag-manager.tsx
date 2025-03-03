'use client'
import { GoogleTagManager } from '@next/third-parties/google'

export default function GoogleTM() {
  if(!process.env.NEXT_PUBLIC_GTM_ID)return null
  return (
    <>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
    </>
  )
}
