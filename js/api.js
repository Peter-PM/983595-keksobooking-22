const END_POINT = 'https://22.javascript.pages.academy/keksobooking';
const Method = {
  GET: 'GET',
  POST: 'POST',
}

const load = ({url, method = Method.GET, headers = new Headers(), body = null }) => {
  return fetch(`${END_POINT}${url}`, {
    method,
    headers,
    body,
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('`${response.status}: ${response.statusText}`');
    });
}

const getData = (onSuccess, onError) => {
  return load({url: '/data'})
    .then(onSuccess)
    .catch(onError)
}

const postData = (onSuccess, onError, data) => {
  return load({url: '', method: Method.POST, body: data})
    .then(onSuccess)
    .catch(onError)
};

export {getData, postData};
