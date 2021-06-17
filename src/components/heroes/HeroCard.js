import React from 'react'
import { Link } from 'react-router-dom'
import { heroImages } from '../../helpers/heroImages'

const HeroCard = ({hero}) => {
    return (
        <div className="card" style={ { maxWidth: 540 } }>
            <div className="row no-gutters">
                <div className="com-md-4">
                    <img src={ heroImages(hero.id)} alt={hero.id} className="card-img"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{hero.superhero}</h5>
                        <p className="card-text">{hero.alter_ego}</p>
                        {
                            (hero.alter_ego !== hero.characters) 
                            && <p className="card-text">{hero.characters}</p>
                        }
                        <p className="card-text">
                            <small className="text-muted">{hero.first_appearance}</small>
                        </p>
                        <Link to={`./hero/${hero.id}`}>
                            Ver más...
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroCard
