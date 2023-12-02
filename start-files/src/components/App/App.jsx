import { Header } from 'components';
import { CountrySearch, Home, Country } from 'pages';
import { Routes, Route } from 'react-router-dom';
import { routes } from 'routes';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.COUNTRY} element={<CountrySearch />} />
        <Route path={routes.COUNTRY_ID} element={<Country />} />
      </Routes>
      ;
    </>
  );
};
