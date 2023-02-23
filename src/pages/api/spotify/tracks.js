import { topTracks } from '../../../lib/spotify'

export default async function handler(req, res) {
  const response = await topTracks()
  const { items } = await response.json()

  const tracks = items.map((track) => ({
    title: track.name,
    artist: track.artists.map((_artist) => _artist.name),
    url: track.external_urls.spotify,
    image: track.album.images[1]
  }))

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=43200'
  )

  return res.json(tracks)
}
