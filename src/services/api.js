import {fetchRequest} from './utils'
export const gaugeApi = (parser) => {
  return fetchRequest('https://widgister.herokuapp.com/challenge/frontend')
  .then((data) => {
    return parser(data);
  })
}