

import { Link, Outlet } from 'react-router-dom';


import './header.css';


function Header() {
  return (
    <div>
      
      <div class="nav navbar-default navbar-fixed-top ">
        <div class="container-fluid ">
          <div>


          </div>
          <header class="d-flex flex-wrap justify-content-center py-3  ">
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none ">
              {/* <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg> */}
              <span class="fs-2">IITM Lab website</span>
            </a>

            <ul class="drop-down-menu nav ">
              <li class="nav-item"><a href="/IITMweb" class="nav-link active" aria-current="page">首頁</a></li>
              <li class=" nav-item"><a href="/lab" class="nav-link">介紹</a>
                <ul>
                  <li><a href="/lab">實驗室</a>
                  </li>

                  <li><a href="/teacher">指導老師</a>
                  </li>

                </ul>
              </li>

              <li class="nav-item"><a href="/thesis" class="nav-link">發表</a>
                <ul>
                <li><a href="/thesis">論文</a>
                  </li>
                  <li><a href="/patent">專利</a>
                  </li>

                  <li><a href="/popularscience">科普活動</a>
                  </li>
                  <li><a href="/plan">計畫</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item"><a href="/compete" class="nav-link">競賽</a>
               
              </li>
              <li class="nav-item"><a href="/activity" class="nav-link">活動</a>


              
              </li>
            </ul>
          </header>
        </div>
      </div>
    </div>

  );
}

export default Header;
