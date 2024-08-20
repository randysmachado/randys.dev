import Image from 'next/image'
import * as runtime from 'react/jsx-runtime'

import { Callout } from './callout'
import { CustomLink } from './custom-link'

const useMDXComponent = (code: string) => {
  const fn = new Function(code)

  return fn({ ...runtime }).default
}

const components = {
  Image,
  Callout,
  a: CustomLink
}
const componentsNote = {
  Image
}

interface MdxProps {
  code: string
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return <Component components={components} />
}

export function MDXContentNote({ code }: MdxProps) {
  const ComponentNote = useMDXComponent(code)

  return <ComponentNote componentsNote={componentsNote} />
}
