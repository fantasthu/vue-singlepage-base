import { get } from './request'
export function TestQuery() {
  get(
    'https://easy-mock.com/mock/59b221b3e0dc663341a207cb/example_1504846259835/user',
    { name: 1 }
  ).then(res => {
    console.log('res===>', res)
  })
}
