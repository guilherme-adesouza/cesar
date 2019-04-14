import Service from './Service';

class FileService {
  static upload = async(data) => {
    let form = new FormData();
    for (var key in data) {
      if(typeof data[key] === "object"){
        form.append( key, data[key][0]);
      }
    }
    return await Service.postFormData('/api/upload', form);
  }
}

export default FileService;
