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
      550: '#999999',
      700: '#47585B'
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
        bg: 'gray.50',
        color: 'gray.700'
      },
      ".swiper-button-prev::after": {
        color: 'yellow.500'
      },
      ".swiper-button-next::after": {
        color: 'yellow.500'
      },
      ".swiper-button-disabled::after": {
        pointerEvents: 'visible'
      },
      ".swiper-pagination-bullet": {
        bg: 'gray.550',
        width: '1rem',
        height: '1rem',
        opacity: '0.8'
      },
      ".swiper-pagination-bullet-active": {
        bg: 'yellow.500',
      }
    },
  },
})
