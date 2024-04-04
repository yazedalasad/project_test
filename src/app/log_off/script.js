
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, ref, set} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
const firebaseConfig = {
                apiKey: "AIzaSyB5mbtcA0Z7dTZ33K-F6ArrON7INXNXi4c",
                authDomain: "e-karaouine.firebaseapp.com",
                databaseURL: "https://e-karaouine-default-rtdb.firebaseio.com",
                projectId: "e-karaouine",
                storageBucket: "e-karaouine.appspot.com",
                messagingSenderId: "540602084562",
                appId: "1:540602084562:web:b9009921a91f3c6204110b"
            };

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

             document.getElementById("submit").addEventListener('click', function(e){
              e.preventDefault();
              set(ref(db, 'users/' + document.getElementById("username").value),
              {
   
                username: document.getElementById("username").value,
                email: document.getElementById("email").value,
                PhoneNumber: document.getElementById("phone").value

              });
                alert("Login Sucessfull  !");
             })