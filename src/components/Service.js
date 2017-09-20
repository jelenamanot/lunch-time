import Axios from 'axios';

const url = 'https://api.myjson.com/bins/1dwzy1';

class LunchService {
  getAllData() {
    return Axios({
      method: 'get',
      url
    });
  }
}

export default new LunchService();