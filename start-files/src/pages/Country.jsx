import { Section, Container, Loader } from 'components';
import {
  selectCountryIsLoading,
  selectcountryData,
  selectedCountryError,
} from 'redux/selectirs';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchCountryData } from 'redux/country';

export const Country = () => {
  const dispatch = useDispatch();
  const { countryName } = useParams();

  const countryData = useSelector(selectcountryData);
  const isLoading = useSelector(selectCountryIsLoading);
  const error = useSelector(selectedCountryError);

  useEffect(() => {
    dispatch(fetchCountryData(countryName));
  }, [dispatch, countryName]);

  return (
    <Section>
      <Container>
        {isLoading === true && <Loader />}
        {error !== null && <p>{error}</p>}
        {countryData !== null && (
          <section>
            <img
              src={countryData[0].flags.png}
              alt={countryData[0].name.common}
            />
            <h1>{countryData[0].name.common}</h1>
            <p>{countryData[0].capital[0]}</p>
            <p>{countryData[0].population}</p>
          </section>
        )}
      </Container>
    </Section>
  );
};
