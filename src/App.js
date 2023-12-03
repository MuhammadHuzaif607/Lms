import React, { Fragment } from 'react';
import StudentDashboard from './components/student/StudentDashboard';
import SignIn from './components/Signinform/signin';
import { Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/student" element={<StudentDashboard />}></Route>
      </Routes>
    </Fragment>
  );
};

export default App;
