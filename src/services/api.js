import {fetchRequest} from './utils'
export const gaugeApi = (userId) => {
  return fetchRequest('https://widgister.herokuapp.com/challenge/frontend')
    .then(
      data => data
    )
}