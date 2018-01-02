function getUrlParams(data) {
  let str = '?'
  for (var key in data) {
    str = str + key + '=' + data[key] + '&'
  }
  return str.substr(0, str.length - 1)
}
export default {
  getUrlParams
}
