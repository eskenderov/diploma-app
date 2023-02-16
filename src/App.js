import Injections from 'pages/Injections/Injections';
import NotFound from 'pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import Layout from 'shared/Layout';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Injections />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
