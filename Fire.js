import * as firebase from "firebase";

//Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBuD004lDVjigZTXeQCReXi5o66C9xH5_Y",
  authDomain: "desafio-sotreq.firebaseapp.com",
  databaseURL: "https://desafio-sotreq.firebaseio.com",
  projectId: "desafio-sotreq",
  storageBucket: "desafio-sotreq.appspot.com",
  messagingSenderId: "330632799451",
  appId: "1:330632799451:web:691f286fdf32d4062618fe",
  measurementId: "G-5DLDMF4DDW",
};

class Fire {
  constructor() {
    this.init();
    this.checkAuth();
  }

  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
      //console.log("Initialized");
    }
  };

  checkAuth = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        //firebase.auth().signInAnonymously();
      }
    });
  };

  send = (messages) => {
    messages.forEach((item) => {
      const message = {
        text: item.text,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        user: item.user,
      };
      this.db.push(message);
    });
  };

  parse = (message) => {
    const { user, text, timestamp } = message.val();
    const { key: _id } = message;
    const createdAt = new Date(timestamp);

    return {
      _id,
      createdAt,
      text,
      user,
    };
  };

  get = (callback) => {
    this.db.on("child_added", (snapshot) => callback(this.parse(snapshot)));
  };

  off() {
    this.db.off();
  }

  get db() {
    return firebase.database().ref("messages");
  }

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }
}

export default new Fire();
