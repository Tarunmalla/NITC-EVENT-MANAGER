import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/StudentLogin';
import HomePage from './components/StudentHome';
import RequestForm from './components/StudentForm';
import Requests from './components/StudentRequest';
import History from './components/History';
import FacultyLogin from './components/FacultyLogin';
import FacultyHome from './components/FacultyHome';
import FacultyRequests from './components/FacultyRequests';
import DetailedView from './components/DetailedView';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/student-login" element={<LoginPage />} />
        <Route path="/student-home" element={<HomePage />} />
        <Route path="/student-request" element={<RequestForm />} />
        <Route path="/student-pending-requests" element={<Requests />} />
        <Route path="/history" element={<History />} />
        <Route path="/faculty-login" element={<FacultyLogin />} />
        <Route path="/faculty-home" element={<FacultyHome />} />
        <Route path="/faculty-request" element={<FacultyRequests />} />
        <Route path="/detailedview" element={<DetailedView/>} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App; 