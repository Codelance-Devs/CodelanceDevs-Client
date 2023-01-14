/**
 * Codelance Devs API
 */

// Dependencies
import axios from 'axios';
import { CODELANCE_DEVS_SERVER_BASE_URL } from '../config';

const api = axios.create({
	baseURL: CODELANCE_DEVS_SERVER_BASE_URL,
});

export default api;
