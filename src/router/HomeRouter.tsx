import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SideProject from '../pages/SideProject';

const HomeRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<SideProject />} />
      <Route path="/SideProject/*" element={<SideProject />} />
    </Routes>
  );
};

export default HomeRouter;
