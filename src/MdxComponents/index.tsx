/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */

import { Code } from '../components/Code'
import { MdxHeader1 } from './MdxHeader1'
import { MdxHeader2 } from './MdxHeader2'
import { InlineCode } from '../components/InlineCode'

export const MdxComponents = {
  pre: (props: { children: { props: any } }) => (
    <Code {...props.children.props} />
  ),
  h1: MdxHeader1,
  h2: MdxHeader2,
  inlineCode: InlineCode,
}
