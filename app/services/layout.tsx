import React from 'react'
import ScrollColorChange from '../components/ScrollColorChange'
import Services from './page'

export default function ServiceLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
        <ScrollColorChange pageTitle='Services'>
          {children}
        </ScrollColorChange>
    </div>
  )
}
