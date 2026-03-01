import { NextIntlClientProvider } from 'next-intl'
import React from 'react'
import { GHeader } from '../general'

const PGeneral = ({children}: {children: Readonly<React.ReactNode>}) => {
  return (
    <NextIntlClientProvider>
        <main>
            <GHeader/>
            {children}
        </main>
    </NextIntlClientProvider>
  )
}

export default PGeneral