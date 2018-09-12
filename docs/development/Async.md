# async/await

Thanks to `babel-regenerator-runtime` to make the developler life bester as providing the async transform tool to transform the async and await functions to Promise.
It make the code clearer and easier to read.

```javascript
//Transform from
function getDataFromServer() {
  return Promise((resolve, reject) => {
    loadDataFromServer()
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}

//To
async function getDataFromServer() {
  try {
    return await loadDataFromServer();
  } catch (error) {
    throw error;
  }
}
```
