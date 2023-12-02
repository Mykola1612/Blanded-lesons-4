export const selectSelectedRegion = state => state.countrySearch.selectedRegion;
export const selectCountries = state => state.countrySearch.countryArray;
export const selectRegionIsLoading = state => state.countrySearch.isLoading;
export const selectedRegionError = state => state.countrySearch.error;

export const selectcountryData = state => state.country.countryData;
export const selectCountryIsLoading = state => state.country.isLoading;
export const selectedCountryError = state => state.country.error;
