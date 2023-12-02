import {
  Container,
  SearchForm,
  Section,
  Heading,
  CountryList,
} from 'components';

export const CountrySearch = () => {
  return (
    <Section>
      <Container>
        <Heading>CountrySearch</Heading>
        <SearchForm />
        <CountryList />
      </Container>
    </Section>
  );
};
