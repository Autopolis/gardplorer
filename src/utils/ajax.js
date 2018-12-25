import axios from 'axios';

const baseURL = 'https://www.gardplorer.io/testnet';

export default axios.create({ baseURL });
