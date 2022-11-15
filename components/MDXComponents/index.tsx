const MDXComponents: import("mdx/types").MDXComponents = {
  h1: (props) => (
    <h1 {...props} className="text-5xl text-gray-900 mt-8 mb-12" />
  ),
  h2: (props) => <h2 {...props} className="text-4xl text-gray-900 mt-8 mb-4" />,
  h3: (props) => <h3 {...props} className="text-3xl text-gray-900 mt-8 mb-4" />,
  h4: (props) => <h4 {...props} className="text-2xl text-gray-900 mt-8 mb-4" />,
  h5: (props) => <h5 {...props} className="text-xl text-gray-900 mt-8 mb-4" />,
  h6: (props) => <h6 {...props} className="text-lg text-gray-900 mt-8 mb-4" />,
  p: (props) => <p {...props} className="text-lg text-gray-600 my-4" />,
  ul: (props) => (
    <ul {...props} className="text-lg text-gray-600 my-4 pl-8 list-disc" />
  ),
  li: (props) => <li {...props} className="text-lg text-gray-600 my-4 pl-4" />,
  a: (props) => <a {...props} className="text-lg underline text-blue-600" />,
};

export default MDXComponents;
