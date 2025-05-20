import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { BusinessDashboard } from './pages/dashboard/BusinessDashboard';
import { LogisticsDashboard } from './pages/dashboard/LogisticsDashboard';
import { AdminDashboard } from './pages/admin/AdminDashboard';
export function App() {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/business/*" element={<BusinessDashboard />} />
        <Route path="/logistics/*" element={<LogisticsDashboard />} />
        <Route path="/admin/*" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>;
}