import './App.css';
import Header from '@/components/Header.tsx';

import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import Home from '@/components/Home.tsx';

function App() {
  return (
    <Main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/market" element={<p className="read-the-docs">market</p>} />
        <Route path="/rating" element={<p className="read-the-docs">rating</p>} />
        <Route path="/competitions" element={<p className="read-the-docs">competitions</p>} />
        <Route path="/org" element={<p className="read-the-docs">org</p>} />
        <Route path="/live" element={<p className="read-the-docs">live</p>} />
      </Routes>
    </Main>
  );
}

export default App;

const Main = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'center',
}));
