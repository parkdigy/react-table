export default function stripUseClient() {
  return {
    name: 'strip-use-client',
    transform(code, id) {
      if (id.includes('node_modules') && /['"]use client['"]/.test(code)) {
        return {
          code: code.replace(/['"]use client['"];\s*/, ''),
          map: null,
        };
      }
    },
  };
}
