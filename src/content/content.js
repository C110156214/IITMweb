import "./content.css";
import Header from "../header/header";


function Content() {
  return (
<body>


<main>
  
  <div class="contents mc position-relative overflow-hidden p-3  text-light text-center ">
  <Header />
  
    <div class="col-md-5 p-lg-5 mx-auto my-5 ">
      <h1 class="display-1 fw-normal ">智慧資訊科技</h1>
      <h1 class="display-1 fw-normal ">多媒體應用實驗室</h1>
      
    </div>
    
    
</div>

   


  <div class="d-md-flex flex-md-equal w-100  ps-md-3 justify-content-center ">
    <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-3 px-md-5 text-center overflow-hidden col-md-4 mt-md-3">
      <div class="my-5 p-3 ">
      <img class="cimg" src={require("./img/research.png")} ></img>
        <h2 class=" display-5">研究內容</h2>
        <p class="display-6">智慧教育：整合機器學習與大數據分析於教育應用</p>
        <p class="display-6">智慧商務：整合物聯網、資料探勘與推薦技術於商務之應用</p>
        <p class="display-6">智慧醫療：整合影像辨識、資訊擷取與大數據分析於風險評估與疾病偵測</p>
        <button class="btn"><a href="/about/lab">實驗室介紹</a></button>
      </div>
      
    </div>
    <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-3 px-md-5 text-center overflow-hidden col-md-4 mt-md-3">
      <div class="my-5 py-3">
      <img class="cimg" src={require("./img/thesis.png")} ></img>
        <h2 class="display-5">論文發表</h2>
        <p class="display-6">期刊論文共計25篇</p>
        <p class="display-6">國際研討會論文共計41篇</p>
        <p class="display-6">國內研討會論文共計53篇</p>
        <button class="btn"><a href="/published/thesis">論文發表</a></button>
      </div>
      
    </div>
  </div>
  <div class="d-md-flex flex-md-equal w-100  ps-md-3 justify-content-center">
    <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-3 px-md-5 text-center overflow-hidden col-md-4">
      <div class="my-5 p-3">
      <img class="cimg" src={require("./img/reward.png")} ></img>
        <h2 class="display-5">獲獎紀錄</h2>
        <p class="display-6">於2011年積極參與各校各級賽事</p>
        <p class="display-6">至今已取得上百份獎項</p>
        <button class="btn"><a href="/compete">獲獎紀錄</a></button>
      </div>
      
    </div>
    <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-3 px-md-5 text-center overflow-hidden col-md-4">
      <div class="my-5 py-3">
      <img class="cimg" src={require("./img/meeting.png")} ></img>
        <h2 class="display-5">內部活動</h2>
        <p class="display-6">從實驗室剛建立初期至今</p>
        <p class="display-6">期間所進行過大大小小的活動</p>
        <button class="btn"><a href="/activity/meet">內部活動</a></button>
      </div>
      
    </div>
  </div>
  <div class="d-md-flex flex-md-equal w-100  ps-md-3 justify-content-center">
  <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-3 px-md-5 text-center overflow-hidden col-md-4">
      <div class="my-5 py-3">
      <img class="cimg" src={require("./img/contact.png")} ></img>
        <h2 class="display-5">聯繫方式</h2>
        <p class="display-6">聯絡資訊：yiwen923@nkust.edu.tw</p>
        <p class="display-6">實驗室地點：國立高雄科技大學燕巢校區管院大樓MA316</p>
      </div>
      
    </div>
    
  </div>

</main>
<div class="aa">
  </div>
</body>

  );
}

export default Content;
