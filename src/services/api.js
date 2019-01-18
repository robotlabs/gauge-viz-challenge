export async function gaugeApi(parser) {
  const response = await fetch('https://widgister.herokuapp.com/challenge/frontend');
  return responseParser(response, parser);
}
async function responseParser(response, parser) {
  const json = await response.json();
  return response.ok ? parser(json) : Promise.reject(json);
}

