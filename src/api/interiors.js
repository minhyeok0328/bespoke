import axios from 'axios';

const getInteriors = () => axios.get('/interiors');

export default getInteriors;
