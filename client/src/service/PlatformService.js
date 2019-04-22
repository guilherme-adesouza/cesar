import Service from './Service';

class PlatformService {
  static create = async(data) => {
    return await Service.postJSON('/api/platform', data);
  }

  static update = async(id, data) => {
    return await Service.put(`/api/platform/${id}`, data);
  }

  static delete = async(id) => {
    return await Service.delete(`/api/platform/${id}`);
  }

  static getAll = async() => {
    return await Service.getJSON('/api/platform');
  }

  static getOne = async(id) => {
    return await Service.getJSON(`/api/platform/${id}`);
  }
}

export default PlatformService;
