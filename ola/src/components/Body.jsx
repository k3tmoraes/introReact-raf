import './Body.css';
function Body(props) {
  console.log(props.caracters);

  return (
    <div className='body'>
      {props.characters.map((character) =>(
        <div className='card'>
          {character.image()}
          <img src={character.image} alt={character.name} />
          <div className='noImage'>Imagem indisponível</div>
          <h2>personagem</h2>
          <p>
            <strong>Casa:</strong>Desconhecida
          </p>
        </div>
      ))}
    </div>
  )}
    
export default Body