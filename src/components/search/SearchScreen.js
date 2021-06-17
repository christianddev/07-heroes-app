import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
// import { heroes } from '../../data/heroes';
import { useForm } from "../../hook/useForm";
import HeroCard from "../heroes/HeroCard";
import { getHeroesBySuperhero } from "../../selectors/getHeroByIdSuperhero";
// import { heroes } from '../../data/heroes';

const SearchScreen = ({ history }) => {
  const location = useLocation();
  const { queryName = "" } = queryString.parse(location.search);

  const [{ name }, handleInputChange] = useForm({ name: queryName });

  const heroesFiltered = useMemo(
    () => getHeroesBySuperhero(queryName),
    [queryName]
  );
  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?queryName=${name}`);
  };

  return (
    <div>
      <h1>SearchScreen</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              className="form-control"
              autoComplete="off"
              onChange={handleInputChange}
            />
            <button type="submit" className="btn btn-primary m-1">
              Search
            </button>
          </form>
        </div>
        <div className="col-7  animate__animated animate__fadeInLeft">
          <h4>Results:</h4>
          <hr />
          {
            queryName === "" && 
            <div className="alert alert-info">Search a hero</div>
          }
          {
            queryName !== "" && heroesFiltered.length === 0 &&
            <div className="alert alert-danger">THre is no a hero with</div>
          }
          {
            heroesFiltered.map((hero) => (
                <HeroCard key={hero.id} hero={hero} />
              )
            )
          }
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
