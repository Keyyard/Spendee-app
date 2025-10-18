import Constants from 'expo-constants';

const API = Constants.expoConfig?.extra?.API_URL || 'http://192.168.1.107:8000';

export const testUrl = `${API}/test`;
export const transactionsUrl = `${API}/transactions`;
export const categoriesUrl = `${API}/categories`;
export const aiUrl = `${API}/insight`;