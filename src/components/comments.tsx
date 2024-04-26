'use client'

import Giscus, { GiscusProps } from '@giscus/react'

export function Comments({ repo, repoId, category, categoryId }: GiscusProps) {
  return (
    <div className="border-t border-border">
      <h3 className="text-3xl">Comentários</h3>
      <Giscus
        id="comments"
        repo={repo}
        repoId={repoId}
        category={category}
        categoryId={categoryId}
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="preferred_color_scheme"
        lang="pt"
        loading="lazy"
      />
    </div>
  )
}
