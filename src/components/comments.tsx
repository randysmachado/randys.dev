'use client'

import Giscus, { GiscusProps } from '@giscus/react'

export function Comments({ repo, repoId, category, categoryId }: GiscusProps) {
  return (
    <Giscus
      id="comments"
      repo={repo}
      repoId={repoId}
      category={category}
      categoryId={categoryId}
      mapping="specific"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="preferred_color_scheme"
      lang="pt"
      loading="lazy"
    />
  )
}
