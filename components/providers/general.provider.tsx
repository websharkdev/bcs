import { NextIntlClientProvider } from 'next-intl'
import React from 'react'
import { GFooter, GHeader } from '../general'
import { Toaster } from 'sonner'

const PGeneral = ({children}: {children: Readonly<React.ReactNode>}) => {
  return (
    <NextIntlClientProvider>
        <main>
            <GHeader/>
            {children}
            <GFooter/>
            <Toaster />
        </main>
    </NextIntlClientProvider>
  )
}

export default PGeneral