import querystring from 'querystring'

const basic = Buffer.from(
  `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
).toString('base64')
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`

export const getAccessToken = async () => {
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN

  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token
    })
  })

  return response.json()
}

export const topTracks = async () => {
  const { access_token } = await getAccessToken()

  const response = await fetch(
    'https://api.spotify.com/v1/me/top/tracks?limit=10',
    {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    }
  )
  const { items } = await response.json()
  console.log('items > ', items)

  return items
}

export const topArtists = async () => {
  const { access_token } = await getAccessToken()

  return fetch('https://api.spotify.com/v1/me/top/artists?limit=10', {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
}

export const currentlyPlayingSong = async () => {
  const { access_token } = await getAccessToken()

  return fetch('https://api.spotify.com/v1/me/player/currently-playing', {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
}
