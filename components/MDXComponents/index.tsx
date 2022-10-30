const MDXComponents: import("mdx/types").MDXComponents = {
  h1: (props) => <h1 {...props} className="text-5xl text-gray-900 py-2" />,
  h2: (props) => <h2 {...props} className="text-4xl text-gray-900 py-2" />,
  h3: (props) => <h3 {...props} className="text-3xl text-gray-900 py-2" />,
  h4: (props) => <h4 {...props} className="text-2xl text-gray-900 py-2" />,
  h5: (props) => <h5 {...props} className="text-xl text-gray-900 py-2" />,
  h6: (props) => <h6 {...props} className="text-lg text-gray-900 py-2" />,
  p: (props) => <p {...props} className="text-base text-gray-800 py-2" />,
  a: (props) => <a {...props} className="text-base underline text-blue-600" />,
};

export default MDXComponents;
