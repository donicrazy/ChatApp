import {
  loginUserService,
  singUpUserService,
  refreshTokenService,
  getAuthHeaders,
} from './authServices'
import {
  getUserDataService,
} from './userDataService'
import {
  getDialogsDataService,
  getMessagesInDialogService,
} from './ChatServices/dialogsServices'

let BASE_URL
if(process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://localhost:8000'
}

if(process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://localhost:8000'
}

export {
  BASE_URL as default,

  loginUserService,
  singUpUserService,
  refreshTokenService,
  getAuthHeaders,

  getUserDataService,

  getDialogsDataService,
  getMessagesInDialogService,
}