import { getErrorMessage } from '../utils/errorUtils'
import sendServerRequest from './service'

export const userService = {
  login,
}

async function login(userData: { email: string, password: string }) {
  try {
    const response = await sendServerRequest('POST', 'http://localhost:3000/auth/login', userData)
    return response;
  } catch(error) {
    return {
      error: getErrorMessage(error),
    }
  }
}
