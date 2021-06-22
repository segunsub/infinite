import '../index.css';

function Cards({cards}) {
    return (
        <div className="info">
                <img src={cards.images['736x'].url} alt='pinImage' className='images'/>
            
            <div className='details'>
                <h2>{cards.title}</h2>
                <h3>{cards.description}</h3>
                <a href={cards.link} target='_blank' rel="noreferrer">Link</a>
            </div>
        </div>
    )
}

export default Cards
