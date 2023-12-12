import { getErrorMessage } from '../utils/errorUtils'

export default async function sendServerRequest(method: string, path: string, body?: unknown) {
  try {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }
    
    const response = await fetch(path, options)

    if (!response.ok || response.status !== 200) {
      return response
    }

    return response.json()
  } catch(error) {
    throw new Error(getErrorMessage(error))
  }
}
