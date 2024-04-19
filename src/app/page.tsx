import { sortPost } from '@/lib/utils'
import { posts } from '#site/content'
import { PostItem } from '@/components/post-item'
import Image from 'next/image'

export default function Home() {
  const latestPost = sortPost(posts).slice(0, 5)

  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:flex-row md:pb-12 md:mt-10 lg:py-32">
        <div className="container max-w-4xl flex flex-col gap-4 text-center items-center md:flex-row md:justify-between md:text-left">
          <div>
            <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-balance">
              Olá, eu sou o <br />
              <span className="bg-gradient-to-r from-[#FF00F5] via-purple-500 to-[#0FEFFD] bg-[length:100%_6px] bg-no-repeat bg-bottom rounded-b-lg rounded-t-lg">
                Randys
              </span>
              👋
            </h1>

            <p className="max-w-[42rem] mx-auto text-muted-foreground mt-5 sm:text-xl text-balance">
              Bem vindo ao meu blog
            </p>
          </div>

          <div>
            <Image
              src="/images/avatar.svg"
              alt="Randys Machado"
              width={300}
              height={300}
              sizes="100vh"
              className="w-60 h-60"
              priority
            />
          </div>
        </div>
      </section>

      <section className="container max-w-4xl flex flex-col space-y-6 mt-20 md:mt-32 lg:py-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">
          Posts Recentes
        </h2>

        <ul className="flex flex-col">
          {latestPost.map((post) => (
            <li key={post.slug} className="first:border-t first:border-border">
              <PostItem
                slug={post.slug}
                title={post.title}
                description={post.description}
                date={post.date}
                tags={post.tags}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
