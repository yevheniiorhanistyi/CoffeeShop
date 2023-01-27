import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import { Footer, Spinner } from "./componets";

const Coffee = React.lazy(() => import('./pages/Coffee'));
const Goods = React.lazy(() => import('./pages/Goods'));
const About = React.lazy(() => import('./pages/About'));
const NotFound = React.lazy(() => import('./pages/NotFound'));


const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coffee" element={
          <Suspense fallback={<Spinner />}>
            <Coffee />
          </Suspense>} />
        <Route path="/coffee/:id" element={
          <Suspense fallback={<Spinner />}>
            <About />
          </Suspense>} />
        <Route path="/goods" element={
          <Suspense fallback={<Spinner />}>
            <Goods />
          </Suspense>} />
        <Route path="*" element={
          <Suspense fallback={<Spinner />}>
            <NotFound />
          </Suspense>} />
      </Routes>
      <Footer />
    </BrowserRouter >
  );
}

export default App;