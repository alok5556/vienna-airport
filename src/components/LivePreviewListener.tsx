'use client'

import { LivePreviewListener as PayloadLivePreviewListener } from '@payloadcms/live-preview-react'

export const LivePreviewListener = () => {
  return <PayloadLivePreviewListener serverURL={process.env.NEXT_PUBLIC_PAYLOAD_URL || ''} />
}
