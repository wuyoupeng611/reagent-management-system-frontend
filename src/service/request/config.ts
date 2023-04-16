let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://127.0.0.1:8080'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'https://wyp2.com/prod'
} else {
  BASE_URL = 'https://wyp3.com/test'
}

export { BASE_URL, TIME_OUT }
