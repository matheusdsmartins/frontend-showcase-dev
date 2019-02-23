export const humanizeCamelCase = string => {
  return string.replace(/([a-z]+)_/g, (r, p1) => `${p1} `)
}
