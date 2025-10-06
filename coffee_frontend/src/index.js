import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NotesDeleteAfterReading from './pages/NotesDeleteAfterReading';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Temporary top-level nav for discovery */}
      <a href="#page" style={{ position: 'absolute', left: -9999, top: 'auto' }} className="visually-hidden">Skip to main content</a>
      <nav style={{ padding: '8px 12px', background: '#f3f4f6' }}>
        <Link to="/" style={{ marginRight: 12 }}>Home</Link>
        <Link to="/notes-delete-after-reading">Notes (Delete after reading)</Link>
      </nav>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/notes-delete-after-reading" element={<NotesDeleteAfterReading />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
