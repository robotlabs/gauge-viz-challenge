export const gaugeApi = (parser) => {
  return fetch('https://widgister.herokuapp.com/challenge/frontend')
    .then(response => {
      return response.json().then(json => {
        return response.ok ? parser(json) : Promise.reject(json);
      });
    });
}

