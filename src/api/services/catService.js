function catsRandom(number) {
    const url = 'https://catfact.ninja/fact'
    const urls = [];
    for (let i = 0; i < number; i++) {
        urls.push(url);
    }
    return Promise.all(
      urls.map(url => fetch(url)
        .then(r => r.json())
        .then(data => ({ data, url }))
        .catch(error => ({ error, url }))
      )
    )
  }

  export default catsRandom;