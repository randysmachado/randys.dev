import { remark } from 'remark'
import html from 'remark-html'

export async function toHTML(markdown) {
  const result = await remark().use(html).process(markdown)

  return result.toString()
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { toHTML }
