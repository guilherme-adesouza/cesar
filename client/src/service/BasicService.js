import Service from './Service';

class BasicService {

  constructor(url){
    this.url = '/api/'+url;
  }

  create = async(data) => {
    return await Service.postJSON(this.url, data);
  }

  update = async(id, data) => {
    return await Service.put(`${this.url}/${id}`, data);
  }

  delete = async(id) => {
    return await Service.delete(`${this.url}/${id}`);
  }

  getAll = async() => {
    return await Service.getJSON(this.url);
  }

  getOne = async(id) => {
    return await Service.getJSON(`${this.url}/${id}`);
  }
}

export default BasicService;
