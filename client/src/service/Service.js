import React, {Component} from 'react';

class Service {

  static fetch = async(url, options, cb) => {
    return await fetch(url, options)
    .then(async (response) => {
      if(!!cb){
        return cb(response);
      } else {
        return response;
      }
    })
    .catch(error => {
      console.error('error trying to fetch ', url, error);

      return error;
    });
  }

  static postJSON = async(url, data) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    return await Service.fetch(url, options, async (response) => {
      const json = await response.json();
      if(response.status < 300){
        return json;
      } else {
        throw Error(json.message);
      }
    })
  }

  static postFormData = async(url, formData) => {
    const options = {
      method: "POST",
      body: formData,
    };

    return await Service.fetch(url, options, async (response) => {
      const json = await response.json();
      if(response.status > 300){
        return json;
      } else {
        throw Error(json.message);
      }
    });
  }

  static getJSON = async(url) => {
    return await Service.fetch(url, null, async (response) => {
      return await response.json();
    });
  }

  static get = async(url) => {
    return await Service.fetch(url, null, async (response) => {
      return await response;
    });
  }

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
  }

  static put = async(url, data) => {
    const options = {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    return await Service.fetch(url, options, async (response) => {
      return await response.json();
    });
  }


}

export default Service;
