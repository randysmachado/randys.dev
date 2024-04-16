import { NextRequest } from 'next/server'
import { ImageResponse } from 'next/og'

import { siteConfig } from '@/config/site'

export const runtime = 'edge'

const interRegular = fetch(
  new URL('../../../assets/fonts/Inter-Regular.ttf', import.meta.url)
).then((res) => res.arrayBuffer())

export async function GET(req: NextRequest) {
  try {
    const fontRegular = await interRegular

    const { searchParams } = req.nextUrl
    const title = searchParams.get('title')

    if (!title) {
      return new Response('Nenhum título foi fornecido', { status: 500 })
    }

    const heading = title.length > 140 ? `${title.substring(0, 140)}...` : title

    return new ImageResponse(
      (
        <div tw="flex relative flex-col p-12 w-full h-full items-start text-[#d1d5db] border border-slate-50 bg-[#09090B]">
          <div tw="flex items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1.645"
                y="1.645"
                width="20.71"
                height="20.71"
                rx="10.355"
                stroke="url(#paint0_linear_1857_5)"
                stroke-width="3.29"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1857_5"
                  x1="0.609272"
                  y1="-4.65951e-07"
                  x2="23.7396"
                  y2="23.8458"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#0FEFFD" />
                  <stop offset="0.515718" stop-color="#FF00F5" />
                  <stop
                    offset="0.776042"
                    stop-color="#0FEFFD"
                    stop-opacity="0"
                  />
                </linearGradient>
              </defs>
            </svg>

            <p tw="ml-2 font-bold text-2xl">Randys Machado</p>
          </div>
          <div tw="flex flex-col flex-1 w-full items-center justify-center">
            <h1 tw="text-6xl font-bold text-center leading-tight">{heading}</h1>
          </div>
          <div tw="flex items-center w-full justify-between">
            <div tw="flex text-lg">{siteConfig.url}</div>
            <div tw="flex items-center text-lg">
              <div tw="flex ml-2">{siteConfig.links.github}</div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Inter',
            data: fontRegular,
            style: 'normal',
            weight: 400
          }
        ]
      }
    )
  } catch (error) {
    return new Response('Falha ao gerar imagem', { status: 500 })
  }
}
