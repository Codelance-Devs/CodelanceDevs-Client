/**
 * Application Configuration
 */

// Dependencies

export const isProduction = process.env.NODE_ENV === 'production';

export const CODELANCE_DEVS_SERVER_BASE_URL = isProduction
	? 'https://api.codelancedevs.com'
	: `http://localhost:5000`;
