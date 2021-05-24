import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import HeroCard from './HeroCard';

const HeroList = ({publisher}) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <div className="card-columns animate__animated animate__fadeInLeft">
            {
                heroes.map(hero => <HeroCard key={hero.id} hero={hero}/>)            
            }
        </div>
    )
}

export default HeroList;
