/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */

import { Code } from '../components/Code'

export const MdxComponents = {
  pre: (props: { children: { props: any } }) => (
    <Code {...props.children.props} />
  ),
  h1: (props) => <h2 className="mdx-header" {...props} />,
  h2: (props) => <h3 className="mdx-header" {...props} />,
  h3: (props) => <h4 className="mdx-header" {...props} />,
  h4: (props) => <h5 className="mdx-header" {...props} />,
  h5: (props) => <h6 className="mdx-header" {...props} />,
  h6: (props) => <h6 className="mdx-header" {...props} />,
}
