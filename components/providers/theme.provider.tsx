import { ThemeProvider } from 'next-themes'

const PTheme = ({children}: {children: Readonly<React.ReactNode>}) => {
  return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
  )
}

export default PTheme