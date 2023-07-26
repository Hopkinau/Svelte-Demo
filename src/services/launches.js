import axios from 'axios';
import { SPACEX_API_URL } from '../config';

export async function loadLaunches(queryLaunches) {
  try {
    const res = await axios.post(SPACEX_API_URL, {
      query: queryLaunches,
    });
    return res.data.data.launches;
  } catch (error) {
    console.log(error);
  }
}
