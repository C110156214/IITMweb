import Header from "../../header/header";
import "./page.css"
export function Activitypage() {
  return (
    <body>

      <div>
        <Header />
        <section class="py-5 text-center ">
          <div class="py-lg-5">
            <div class="col-lg-6 col-md-8 mx-auto">
              <h1 class="title display-1">活動紀錄</h1>
            </div>
          </div>
        </section>

        <div class="d-md-flex flex-md-equal w-100  ps-md-3 justify-content-center ">
          <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-3 px-md-5 text-left overflow-hidden col-md-8">
            <p class="display-5">實體會議</p>
            <div class="box1 ">


              <div class="box2 "></div>
              <div class="div_l ">

                <img id="img1" src={require("../img/1.jpg")} alt=""></img>
                <img id="img2" src={require("../img/2.jpg")} alt=""></img>
                <img id="img3" src={require("../img/3.jpg")} alt=""></img>
                <img id="img4" src={require("../img/4.jpg")} alt=""></img>
                <img id="img5" src={require("../img/5.jpg")} alt=""></img>
                <img id="img6" src={require("../img/6.jpg")} alt=""></img>


              </div>
              <div class="div_r">

                <a href="#img1"><img src={require("../img/1.jpg")} alt=""></img></a>
                <a href="#img2"><img src={require("../img/2.jpg")} alt=""></img></a>
                <a href="#img3"><img src={require("../img/3.jpg")} alt=""></img></a>
                <a href="#img4"><img src={require("../img/4.jpg")} alt=""></img></a>
                <a href="#img5"><img src={require("../img/5.jpg")} alt=""></img></a>
                <a href="#img6"><img src={require("../img/6.jpg")} alt=""></img></a>


              </div>
            </div>
          </div>

        </div>

        <div class="aa"></div>
        <div class="d-md-flex flex-md-equal w-100  ps-md-3 justify-content-center ">
          <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-3 px-md-5 text-left overflow-hidden col-md-8">
            <p class="display-5">活動聚餐</p>
            <div class="box1 ">


              <div class="box2 "></div>
              <div class="div_l ">

                <img id="imga" src={require("../img/c.jpg")} alt=""></img>
                <img id="imgb" src={require("../img/b.jpg")} alt=""></img>
                <img id="imgc" src={require("../img/a.jpg")} alt=""></img>
                <img id="imgd" src={require("../img/d.jpg")} alt=""></img>
                <img id="imge" src={require("../img/e.jpg")} alt=""></img>
                <img id="imgf" src={require("../img/f.jpg")} alt=""></img>


              </div>
              <div class="div_r">

                <a href="#imga"><img src={require("../img/c.jpg")} alt=""></img></a>
                <a href="#imgb"><img src={require("../img/b.jpg")} alt=""></img></a>
                <a href="#imgc"><img src={require("../img/a.jpg")} alt=""></img></a>
                <a href="#imgd"><img src={require("../img/d.jpg")} alt=""></img></a>
                <a href="#imge"><img src={require("../img/e.jpg")} alt=""></img></a>
                <a href="#imgf"><img src={require("../img/f.jpg")} alt=""></img></a>


              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="aa"></div>
    </body>

  );
}
