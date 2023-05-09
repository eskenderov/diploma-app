import { Route, Routes } from 'react-router-dom';
import Layout from 'shared/Layout';
import Injections from 'pages/Injections/Injections';
import NotFound from 'pages/NotFound';
import Xss from 'pages/Xss/Xss';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Injections />} />
          <Route path="xss" element={<Xss />} />
          <Route path="xss/:product" element={<Xss />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
