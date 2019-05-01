import Service from './Service';

class FileService {
  static upload = async(data) => {
    let form = new FormData();
    for (var key in data) {
      form.append(key, data[key]);
    }
    return await Service.postFormData('/api/upload', form);
  }
}

export default FileService;
