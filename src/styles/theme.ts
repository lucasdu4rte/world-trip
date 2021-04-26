import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  colors: {
    gray: {
      50: '#F5F8FA',
      100: '#DADADA',
    },
    yellow: {
      500: '#FFBA08'
    }
  },
  styles: {
    global: {
      body: {
        paddingBottom: '1rem',
        minH: '110vh',
      }
    }
  },
})
