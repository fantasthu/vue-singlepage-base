import 'whatwg-fetch'
import U from './utils'
export function get(url, params) {
  url = url + U.getUrlParams(params)
  return fetch(url, {
    method: 'get'
  })
    .then(_ => _.json())
    .then(_ => {
      if (_.status === '0') {
        return _.data
      } else {
        return _
      }
    })
    .catch(_ => {
      console.log(
        `%c${url}  请求报错`,
        'color: #FD858C; font-size: 18px; font-family: sans-serif'
      )
      console.log(
        `%c报错内容:  ${_}`,
        'color: #FB3838; font-size: 20px; font-family: sans-serif'
      )
      return _
    })
}

export function post(url, params) {
  return fetch(url, {
    method: 'post',
    body: JSON.stringify(params)
  })
    .then(_ => _.json())
    .then(_ => {
      if (_.status === '0') {
        return _.data
      } else {
        return _
      }
    })
    .catch(_ => {
      console.log(
        `%c${url}  请求报错`,
        'color: #FD858C; font-size: 18px; font-family: sans-serif'
      )
      console.log(
        `%c报错内容:  ${_}`,
        'color: #FB3838; font-size: 20px; font-family: sans-serif'
      )
      return _
    })
}
