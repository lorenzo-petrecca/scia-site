// Provide MDX components without pulling in the client-only @mdx-js/react runtime.
export function useMDXComponents(components) {
  return {
    ...components,
  };
}
