import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import React from 'react';
import './App.scss';
import { HomePage } from './pages/HomePage';
import { PeoplePage } from './pages/PeoplePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Navbar } from './components/Navbar';

export const App: React.FC = () => {
  return (
    <div data-cy="app">

      <Navbar />
      <main className="section">
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={<HomePage />}
            />

            <Route
              path="/home"
              element={<Navigate to="/" replace />}
            />

            <Route
              path="/people"
              element={<PeoplePage />}
            />

            <Route path="/people">
              <Route index element={<PeoplePage />} />
              <Route path=":slug" element={<PeoplePage />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};