class Service {
  static postJSON = async(url, data) => {
    return await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(async (response) => {
      const json = await response.json();
      if(response.status === 200){
        return json;
      } else {
        throw Error(json.message);
      }
    })
    .catch(error => {
        console.error('error trying to fetch ', url, error);
    });
  }

  static getJSON = async(url) => {
    return await fetch(url)
    .then(async (response) => {
      return await response.json();
    })
    .catch(error => {
        console.error('error trying to fetch ', url, error);
    });
  }

  static get = async(url) => {
    return await fetch(url)
    .then(async (response) => {
      return response;
    })
    .catch(error => {
        console.error('error trying to fetch ', url, error);
    });
  }
}

export default Service;
