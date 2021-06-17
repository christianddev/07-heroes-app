import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { heroImages } from '../../helpers/heroImages';
import { getHeroesById } from '../../selectors/getHeroById';
//  import batman from '../../assets/heroes/dc-batman.jpg';  static source
// const heroImages = require.context('../../assets/heroes', true);

const HeroScreen = ({history}) => {

    const {heroId} = useParams();
    
    const hero = useMemo(() => getHeroesById(heroId), [heroId]);
    
    if (! hero) {
        return <Redirect to="/"/>
    }

    const handleReturn = () => {
        if(history.length <= 2){
            history.push('/');
        } else {
            history.goBack();
        }
    };
    
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                
                    // src={ `../assets/heroes/${ heroId }.jpg` } public assets
                    // src={ batman } static source
                    src={ heroImages(heroId) }
                    alt={ heroId }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8 animate__animated animate__fadeIn">
                <h3> { hero.superhero } </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Alter ego: </b> { hero.alter_ego } </li>
                    <li className="list-group-item"> <b> Publisher: </b> { hero.publisher } </li>
                    <li className="list-group-item"> <b> First appearance: </b> { hero.first_appearance } </li>
                </ul>

                <h5> Characters </h5>
                <p> { hero.characters } </p>

                <button 
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                >
                    Return
                </button>

            </div>

        </div>
    )
}

export default HeroScreen;
