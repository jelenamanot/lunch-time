import Axios from 'axios';

const url = 'https://api.myjson.com/bins/yqnqh';

class LunchService {
  getAllData() {
    return Axios({
      method: 'get',
      url
    });
  }
}

export default new LunchService();