import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';

import { Container, ProductDiv } from './styles'

interface Cart {
  id: string;
  title: string;
  image: string;
  price: string;
}

export default function Home() {

  const [cart, setCart] = useState<Cart>({
    id: '',
    title: '',
    image: '',
    price: '',
  })
  const [totalItens, setTotalItens] = useState('')

  const userName = localStorage.getItem("user")

  let array : Array<Cart> = []

  useEffect(() =>{
    setTotalItens(String(array.length));
  },[array])

  useEffect(() => {
    array.push(cart)
    console.log(array)
  }, [cart])

  const DATA =[
    {
      id: "1",
      productName: "Estojo",
      price: "11,80",
      image: "http://d3ugyf2ht6aenh.cloudfront.net/stores/996/374/products/preto-fechado1-d1cb168bf1df9de4fe16168746866408-640-0.jpg"
    },
    {
      id: "2",
      productName: "Tesoura",
      price: "4,20",
      image: "https://images.tcdn.com.br/img/img_prod/712104/tesoura_escalope_profissional_artesanato_tecido_papel_eva_227_1_7a1567be292ab5063b8e6d3f99177797.jpg"
    },
    {
      id: "3",
      productName: "Mochila",
      price: "89,90",
      image: "https://static.dafiti.com.br/p/Selten-Mochila-Escolar-Espa%C3%A7osa-Selten-Preta-1715-5763265-1-zoom.jpg"
    },
    {
      id: "4",
      productName: "Caderno",
      price: "55,00",
      image: "https://cdn.shopify.com/s/files/1/0019/4035/7209/products/DISCOSM_079_b0ac92cd-a1e4-4d35-a5fe-febaac9780c5_1024x1024.jpg?v=1589943368"
    },
    {
      id: "5",
      productName: "Caneta 8 cores",
      price: "65,45",
      image: "https://cf.shopee.com.br/file/f0b6e6d48116b1a43a0515d129907f58"
    },
    {
      id: "6",
      productName: "Caneta 4 cores",
      price: "47,73",
      image: "https://costaatacado.vteximg.com.br/arquivos/ids/181520-500-500/Caneta-Esferografica-Bic-4-Cores.jpg?v=636548072953870000"
    },
    {
      id: "7",
      productName: "Labis artistico",
      price: "10,00",
      image: "https://www.artcamargo.com.br/media/catalog/product/cache/1/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/k/i/kit-lapis-caran-dache-technograph-12-.png"
    },
    {
      id: "8",
      productName: "Labis de cor 32 cores",
      price: "99,99",
      image: "https://http2.mlstatic.com/D_NQ_NP_929936-MLB43244039491_082020-O.jpg"
    },
    {
      id: "9",
      productName: "Cola",
      price: "56,99",
      image: "https://img.kalunga.com.br/fotosdeprodutos/214599z.jpg"
    },
    {
      id: "10",
      productName: "Borracha 30 unid",
      price: "31,50",
      image: "https://img.kalunga.com.br/fotosdeprodutos/068654z_1.jpg"
    },
  ]

  return (
    <Container>
      <header>
        <div>
          <h1>Bem vindo a TopStore {userName}</h1>
          <h1>total de itens em seu carrinho: {totalItens}</h1>
        </div>
      </header>
      <ProductDiv>
      { DATA.length > 0 &&       
          DATA.map((prod) =>(
            <ProductCard id={prod.id} title={prod.productName} image={prod.image} price={prod.price} setCart={setCart}/>
            )
          )  
        }
      </ProductDiv>

    </Container>
  );
}
