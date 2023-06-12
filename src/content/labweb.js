import { Home, About, Lab, Teacher, Published, Patent, Thesis, PopularScience, Plan, Compete, Activity } from "./page";
import { Error404 } from './page/404';
import { Routes, Route, Navigate, } from "react-router-dom";

function LabWeb() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="IITMweb" />} />
      <Route path="/IITMweb" element={<Home />}> </Route>
        <Route path="Lab" element={<Lab />}></Route>
        <Route path="Teacher" element={<Teacher />}></Route>
        <Route path="patent" element={<Patent />}></Route>
        <Route path="thesis" element={<Thesis />}></Route>
        <Route path="popularScience" element={<PopularScience />}></Route>
        <Route path="plan" element={<Plan />}></Route>
        <Route path="compete" element={<Compete />}></Route>
        <Route path="activity" element={<Activity />}></Route>
     
      <Route path="*" element={<Error404 />}></Route>
    </Routes>
  )
}
export default LabWeb;