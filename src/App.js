import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/navbar.component';
import ExercisesList from './components/exercises-list.component';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EditExercise from './components/edit-exercise.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.component';

export default function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ExercisesList/>}/>
        </Routes>
        <Routes>
          <Route path="/edit/:id" element={<EditExercise/>}/>
        </Routes>
        <Routes>
          <Route path="/create" element={<CreateExercise/>} />
        </Routes>
        <Routes>
          <Route path="/user" element={<CreateUser/>} />
        </Routes>
      </div>
    </Router>
  );
}
