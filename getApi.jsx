export const getApi = (method, body) => {
  fetch('http://localhost:3000/todo', {
    method: method,
    body: JSON.stringify({
      body,
    }),
  })
    .then((res) => res.json())
    .then((newPost) => console.log(newPost));
};
