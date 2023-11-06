const fetch = require('node-fetch')
import { schedule } from '@netlify/functions'

// This is sample build hook
const BUILD_HOOK = 'https://api.netlify.com/build_hooks/65484ee2df007542dc70095f'

// Schedules the handler function to run at midnight every day
const handler = schedule('0 0 * * *', async () => {
  await fetch(BUILD_HOOK, {
    method: 'POST'
  }).then(response => {
    console.log('Build hook response:', response)
  })

  return {
    statusCode: 200
  }
})

export { handler }
