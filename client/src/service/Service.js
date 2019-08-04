function checkStatus(response) {
  if(response.status < 300) {
    return response;
  }
  throw Error(response.statusText);
}

function handleError(error){
  console.error(error);
  throw Error(error);
}

class Service {

  static fetch = async(url, options, cb) => {
    return await fetch(url, options)
    .then(checkStatus)
    .then((response) => {
      if(!!cb){
        return cb(response);
      }
      return response;
    })
  };

  static postJSON = async(url, data) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    return await Service.fetch(url, options, async (response) => {
      return await response.json();
    })
  };

  static postFormData = async(url, formData) => {
    const options = {
      method: "POST",
      body: formData,
    };

    return await Service.fetch(url, options, async (response) => {
      return await response.json();
    });
  };

  static getJSON = async(url) => {
    return await Service.fetch(url, null, async (response) => {
      return await response.json();
    });
  };

  static get = async(url) => {
    return await Service.fetch(url, null, async (response) => {
      return await response;
    });
  };

  static delete = async(url, data) => {
    const options = {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    return await Service.fetch(url, options, async (response) => {
      return await response;
    });
  };

  static put = async(url, data) => {
    const options = {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    return await Service.fetch(url, options, async (response) => {
      return await response;
    });
  }

}

export default Service;
