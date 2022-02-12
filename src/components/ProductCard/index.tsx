
import { Container, ButtonRemove, ButtonAdd } from './styles';

interface CartProps {
  id: string;
  title: string;
  image: string;
  price: string;
}

interface Props {
  id: string;
  title: string;
  image: string;
  price: string;
  setCart : (cart: CartProps) => void;
}

export default function ProductCard({id, title, image, price, setCart}: Props){

  function handleClick( newCart : CartProps){
    setCart(newCart);
  }

  return (
    <Container key={id}>
      <div>
        <header>
          <h2>{title}</h2>
          <img src={image} alt={title} />
        </header>
        <strong>R$ {price}</strong>
        <ButtonAdd onClick={() => handleClick({id, title, image, price})} >
          <p>Adicionar ao carrinho</p>
          </ButtonAdd>
        <ButtonRemove>
          <p>Remover do carrinho</p>
        </ButtonRemove>
      </div>
    </Container>
  )
}
