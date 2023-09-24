import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, child, push } from "firebase/database";

class FirebaseHandler {
  constructor() {
    const firebaseConfig = {
        apiKey: "AIzaSyCCLXKg7Ru5p5dtgyRs28-qg8LQaG69yME",
        authDomain: "friendly-sensor-137111.firebaseapp.com",
        databaseURL: "https://friendly-sensor-137111-default-rtdb.firebaseio.com",
        projectId: "friendly-sensor-137111",
        storageBucket: "friendly-sensor-137111.appspot.com",
        messagingSenderId: "824581584416",
        appId: "1:824581584416:web:fdd5462dd85230d8caae45",
        measurementId: "G-2HYJ96RDLV"
      };
    this.app = initializeApp(firebaseConfig);
    this.db = getDatabase(this.app);
  }

  writeData(path, data) {
    const dbRef = ref(this.db, path);
    return set(dbRef, data);
  }

  async  readData(path) {
    const dbRef = ref(this.db, path);
    return get(dbRef).then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        throw new Error('No data available at the specified path');
      }
    });
  }

  // 添加其他您需要的方法，比如更新數據、刪除數據等。
}


export default FirebaseHandler;
