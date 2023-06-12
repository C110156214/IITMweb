import Header from "../../header/header";
import "./page.css"

export function Patentpage() {
    return (
      <body>
  
        <div id="top">
          <Header />
          <section class="py-5 text-center ">
            <div class="py-lg-5">
              <div class="col-lg-6 col-md-8 mx-auto">
                <h1 class="title display-1" >專利</h1>
              </div>
            </div>
          </section>
        </div>
        <div class="d-md-flex flex-md-equal w-100  ps-md-3 justify-content-center ">
          <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-3 px-md-5 text-left overflow-hidden col-md-8">
            <div class="row featurette">
              <div >
                <p class="display-5 mt-md-5 " id="invent">發明專利</p>
                <p class="content mt-md-5 px-md-3">1. 中華民國專利核准：竊車行為偵測之影像辨識方法發明第I772174號。</p>
                <p class="content mt-md-5 px-md-3">2. 中華民國專利核准：結合影像辨識及語音辨識之智慧語言學習方法及其系統，發明第I771858號。</p>
                <p class="content mt-md-5 px-md-3">3. 中華民國專利核准：智能投票方法及其系統，發明第I752358號。</p>
                <p class="content mt-md-5 px-md-3">4. 中華民國專利核准：利用腦波訊號進行音樂搜尋之方法，發明I731676號。</p>
                <p class="content mt-md-5 px-md-3">5. 中華民國專利核准：智慧冰箱系統，發明第I717100號。</p>
                <p class="content mt-md-5 px-md-3">6. 中華民國專利核准：智能牙齒保健訓練方法及其系統，發明第I697011號。</p>
                <p class="content mt-md-5 px-md-3">7. 中華民國專利核准：智能鋼琴訓練系統，發明第I696986號。</p>
  
              </div>
  
            </div>
  
          </div>
          
        </div>
        <div class="d-md-flex flex-md-equal w-100  ps-md-3 justify-content-center ">
          <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-3 px-md-5 text-left overflow-hidden col-md-8">
            <div class="row featurette">
              <div >
                <p class="display-5 mt-md-5 "id="new">新型專利</p>
                <p class="content mt-md-5 px-md-3">1. 中華民國專利核准：智慧型醫療院所推薦系統及其方法，新型第M625920號。</p>
                <p class="content mt-md-5 px-md-3">2. 中華民國專利核准：智慧化影像診斷報告轉譯系統，新型第M623675號。</p>
                <p class="content mt-md-5 px-md-3">3. 中華民國專利核准：智慧型居家照護系統，新型第M610301號。</p>
                <p class="content mt-md-5 px-md-3">4. 中華民國專利核准：雨傘租借裝置，新型第M592670號。</p>
                <p class="content mt-md-5 px-md-3">5. 中華民國專利核准：智慧商場購物系統，新型第575571號。</p>
                <p class="content mt-md-5 px-md-3">6. 中華民國專利核准：移動式空氣品質檢測裝置及其系統，新型第M 568966號。</p>
                <p class="content mt-md-5 px-md-3">7. 中華民國專利核准：教學管理系統，新型第M 484761號。</p>
                <p class="content mt-md-5 px-md-3">8. 中華民國專利核准：健康自主管理系統，新型第M498358號。</p>
                <p class="content mt-md-5 px-md-3">9. 中華民國專利核准：電子書整合式教學系統，新型第M532634號。</p>
  
              </div>
  
            </div>
  
          </div>
          <div class="text-center" id="MyBlog">
        <p><a  href="#top">回頂部</a></p>
        <p><a  href="#invent">發明專利</a></p>
        <p><a  href="#new">新型專利</a></p>
      </div>
        </div>
        <div class="aa"></div>
      </body>
  
    );
  }