import Header from "../../header/header";
import "./page.css"
import { Link, Outlet } from 'react-router-dom';

export function Labpage() {
  return (
    <body>

      <div>
        <Header />
        <section class="py-5 text-center ">
          <div class="py-lg-5">
            <div class="col-lg-6 col-md-8 mx-auto">
              <h1 class="title display-1">實驗室介紹</h1>
            </div>
          </div>
        </section>
        <div class="d-md-flex flex-md-equal w-100  ps-md-3 justify-content-center">
          <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-3 px-md-5 text-left overflow-hidden col-md-8">
            <div class="row featurette">

              <div class="col-md-7 ">
                <p class="display-5 mt-md-5">簡介 .</p>
                <p class="dp5 display-5 justify-content-center mt-md-5">智慧資訊科技與多媒體應用實驗室由國立高雄科技大學智慧商務系廖奕雯副教授主持，本實驗室致力於發展創新智慧計算技術，整合人工智慧、大數據分析與物聯網於智慧商務、智慧教育與智慧醫療等相關領域應用。</p>
              </div>
              <div class="col-md-5 bd-placeholder-img">
                <img src={require("../img/lab.jpg")} ></img>
              </div>

              <div class="col mt-md-5">
                <div class="card shadow-sm">
                  <img class="img2" src={require("../img/ic.jpg")} ></img>
                  <div class="card-body">
                    <p class="dp5 ">智慧商務 .</p>
                    <p class="dp5 display-5 justify-content-center">整合物聯網、資料探勘與推薦技術於實體商務與電子商務之應用。</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">

                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div class="col mt-md-5">
                <div class="card shadow-sm">
                  <img class="img2" src={require("../img/ie.jpg")} ></img>
                  <div class="card-body">
                    <p class="dp5 ">智慧教育 .</p>
                    <p class="dp5 display-5 justify-content-center">整合機器學習與大數據分析於ESG 環境永續教育、商管教育、資訊教育及科普教育應用。</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">

                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div class="col mt-md-5">
                <div class="card shadow-sm">
                  <img class="img2" src={require("../img/im.jpg")} ></img>
                  <div class="card-body">
                    <p class="dp5 ">智慧醫療 .</p>
                    <p class="dp5 display-5 justify-content-center">整合影像辨識、資訊擷取以及大數據分析於風險評估與疾病偵測。</p>

                  </div>
                </div>
              </div>
             

            </div>

          </div>

        </div>

      </div>
      <div class="aa">
      </div>

    </body>

  );
}
export function Teacherpage() {
  return (
    <body>

      <div>
        <Header />
        <section class="py-5 text-center ">
          <div class="py-lg-5">
            <div class="col-lg-6 col-md-8 mx-auto">
              <h1 class="title display-1">指導老師</h1>
            </div>
          </div>
        </section>
        
        <div class="d-md-flex flex-md-equal w-100  ps-md-3 justify-content-center ">
          <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-3 px-md-5 text-left overflow-hidden col-md-8">
            <div class="row featurette">

              <div class="col-md-7 ">
                <p class="display-5 mt-md-5">Yi-wen Liao 廖奕雯.</p>
                <p class="display-6 ">Associate Professor.</p>
                <p class="dp5 display-5 justify-content-center mt-md-5">於國立中山大學及國立彰化師範大學資訊管理系取得博士級碩士學位，目前於高雄科技大學智慧商務系擔任副教授一職，致力於發展創新智慧計算技術，整合人工智慧、大數據分析與物聯網於智慧商務、智慧教育與智慧醫療等相關領域應用。</p>
                <p class="display-6 justify-content-center mt-md-5">Working as an associate professor in the Intelligent Commerce Department of Kaohsiung University of Science and Technology, committed to the development of innovative smart computing technology, integrating artificial intelligence, big data analysis and Internet of Things in smart business, smart education and smart medical</p>
              </div>
              <div class="col-md-5 bd-placeholder-img">
                <img class="teacher" src={require("../img/teacher.jpg")} ></img>
              </div>
            </div>
          </div>
        </div>
        <div class="d-md-flex flex-md-equal w-100  ps-md-3 justify-content-center ">
          <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-3 px-md-5 text-left overflow-hidden col-md-8">
            <div class="row featurette">
              <div >
                <p class="display-5 mt-md-5">經歷</p>
                <table class="table table-striped table-sm col-md-6">
                  <tbody >
                    <tr>
                      <td>台灣商業教育與管理學會</td>
                      <td>
                        <tr>秘書長</tr>
                        <tr>監事</tr>
                      </td>
                    </tr>
                    <tr>
                      <td>中華民國資訊管理學會</td>
                      <td>後補監事</td>

                    </tr>
                    <tr>
                      <td>正修科技大學</td>
                      <td>
                        <tr>教授兼管理學院院長</tr>
                        <tr>教授兼圖書資訊處/副處長</tr>
                        <tr>教授兼研究發展處/新創及技轉中心主任</tr>
                        <tr>副教授兼研究發展處/新創及技轉中心主任</tr>
                        <tr>資訊管理系所，副教授</tr>
                      </td>
                    </tr>
                    <tr>
                      <td>嘉南藥理大學</td>
                      <td>
                        <tr>資訊管理系所，副教授</tr>
                        <tr>資訊管理系，助理教授</tr>
                      </td>

                    </tr>
                    <tr>
                      <td>國立彰化師範大學</td>
                      <td>資訊管理系所，博士後研究</td>

                    </tr>
                    <tr>
                      <td>國立豐原高商</td>
                      <td>資料處理科，實習教師</td>

                    </tr>

                  </tbody>
                </table>
                
              </div>

            </div>
            
          </div>
          
        </div>
        <div class="aa"></div>
        
        
      </div>
   

    </body>

  );
}
