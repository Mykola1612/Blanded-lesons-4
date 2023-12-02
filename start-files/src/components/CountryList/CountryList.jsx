import { Grid, GridItem, Loader } from 'components';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCountriesByRegion } from 'redux/countrySearchSlice';
import {
  selectCountries,
  selectRegionIsLoading,
  selectSelectedRegion,
  selectedRegionError,
} from 'redux/selectirs';

export const CountryList = () => {
  const dispatch = useDispatch();

  const region = useSelector(selectSelectedRegion);
  const countries = useSelector(selectCountries);
  const isLoading = useSelector(selectRegionIsLoading);
  const error = useSelector(selectedRegionError);

  useEffect(() => {
    if (region === null) {
      return;
    }
    dispatch(fetchCountriesByRegion(region));
  }, [region, dispatch]);

  return (
    <>
      {isLoading === true && <Loader />}
      {error !== null && <p>{error}</p>}

      {countries.length > 0 && <h2>CountryList</h2>}
      <ul>
        {countries.map(country => {
          return (
            <li key={country.area}>
              <Link to={`/country/${country.name.common}`}>
                <h3>{country.name.common}</h3>
                <p>{country.name.official}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
