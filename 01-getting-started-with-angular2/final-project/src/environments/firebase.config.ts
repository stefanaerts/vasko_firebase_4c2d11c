
import {AuthProviders, AuthMethods} from 'angularfire2';


export const firebaseConfig = {
   apiKey: "AIzaSyD5NsfbhxZf0Tsm99wxwhnSqGQeODRrCYA",
    authDomain: "final-project-recording-4a94a.firebaseapp.com",
    databaseURL: "https://final-project-recording-4a94a.firebaseio.com",
    storageBucket: "final-project-recording-4a94a.appspot.com",
};


export const authConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

