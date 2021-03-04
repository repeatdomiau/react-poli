
const Card = ({ professor }) => {

    const { img, nome, bio, ies } = professor;

    return (
        <div className="card">
            <img src={img} alt={nome} />
            <h4>{nome}</h4>
            <p>{bio}</p>
            <p>{ies}</p>
        </div>
    )
};

export default Card;