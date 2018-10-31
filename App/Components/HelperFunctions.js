export function removeQuotes(name) {
  return name
  .replace('&#8220;', '"')
  .replace('&#8221;', '"')
  .replace('&#8243;', '"')
  .replace('&#8217;', "'")
}