import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";



const firebaseConfig = {
  
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


//---------------------------------------------------------------------------------------

// 데이터 추가
$("#addBtn").click(async function () {

  // title_input, comment_input, image_input id를 가진 HTML 요소에서 값을 가져와서 title, comment, image 변수에 저장해 주세요.

  let image = $("#floatingInput").val();
  let title = $("#foodTitle").val();
  let star = $("#inputGroupSelect03").val();
  let comment = $("#floatingTextarea").val();

  try {
    const docRef = await addDoc(collection(db, "foods"), {

      // 각각 담은 변수를 컬렉션 필드에 title, comment, image에 각각 넣어주세요.
      'image': image,
      'title': title,
      'star': star,
      'comment': comment
    });
    alert("음식이 추가 되었습니다!");
    window.location.reload();
  } catch (e) {
    console.error("Error adding document: ", e);
  }
});



// 데이터 읽기 및 카드 생성
$(".row-cols-3").empty();
const querySnapshot = await getDocs(collection(db, "foods"));

querySnapshot.forEach((doc) => {

  let title = doc.data().title;
  let comment = doc.data().comment;
  let star = "⭐".repeat(doc.data().star);
  let image = doc.data().image;

  // 문서의 title, comment, image, star 필드에서 데이터를 추출한 변수명을 갖고,
  // tempHtml 문자열에 각 데이터를 포함한 카드의 HTML 코드를 생성하세요.
  let tempHtml = `
            <div class="col">
                <div class="card h-100">
                    <img src="${image}"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h4 class="card-title">${title}</h4>
                        <p class="card-text">${comment}</p>
                        <p>${"⭐".repeat(star)}</p>
                        <button class="card-button">주문하기</button>
                    </div>
                </div>
            </div>`

  $(".row-cols-3").append(tempHtml);
});
