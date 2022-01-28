import React, {useState} from 'react';
import Slider from 'react-slick';
import TextField, { Input} from '@material/react-text-field';
import Materialicon from '@material/react-material-icon';

import logo from '../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { Card, restauranteCard, Modal, Map, Loader, Skletion } from '@components/ImageCard/index';

import { Container, 
  Carousel, 
  Search, 
  Logo, 
  Wrapper, 
  Map, 
  CarouselTitle, 
  ModalTitle, 
  ModalContent } from './styles';

import { RestaurantCard } from '@components/index';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery]  = useState(null);
  const [placeId, setPlaceId] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);
  const [restaurante, restauranteSelected ]  = useSelector((state) => state.restaurante);

  const setting = {
    dots: false,
    infinite: true,
    autoplay:true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  function handlekeyPress(e) {
if (e.key === 'Enter'){
  setQuery(inputValue);
}

  }

  function handleOpenModal(placeId){
    setPlaceId(placeId);
    setModalOpened(true);
  }
  
          return(
            <Wrapper>
              <Container>
                <Search>
                <logo src={logo} alt="Logo do restaurante" />
              <TextField
              label="Pesquisar Restaurantes"
              outlined
              trailingIcon={<Materialicon role="button" icon="search"/> }
              >
                <Input value={inputValue} 
                onKeyPress={handlekeyPress} 
                onChange={(e) => setInputValue(e.target.value)}
                />
              </TextField>
              {restaurante.leng > 0 ? (
                  <>
                  <CarouselTitle> Na sua area </CarouselTitle>
            <Carousel {...setting}>
              {restaurante.map((restaurante) => (
              <Card 
              Key={restaurante.place_id}
              photo={restaurante.photo ? restaurante.photo[e].getUrl() : restaurante} 
              title={restaurante.name}
              />
              ))}
              
            </Carousel>
            </>
            ) : (
              <Loader />

              )}
            
          </Search>
          {restaurante.map ((restaurante) => (
            <RestaurantCard 
            onclick={() => handleOpenModal(restaurant.place_id)} 
            restaurant={restaurant}
            />
          ))}
          <RestaurantCard />
        </Container>
        <Map query={query} placeId={place_id} />
        <Modal open={modalOpened} onclose={() => setModalOpened(!modalOpened)} />
          {restauranteSelected ? (
            <>
          <ModalTitle>{restauranteSelected?.name}</ModalTitle>
          <ModalContent>{restauranteSelected?.formatted_phone_number}</ModalContent>
          <ModalContent>{restauranteSelected?.formatted_address}</ModalContent>
          <ModalContent>{restauranteSelected?.opening_hours?.open_now
          ? 'Aberto agora :-)'
          : 'Fechado neste momento : -('}
          </ModalContent>
          </>
          ) : (
            <>
            <Skletion width="10px" height="10px" />
            <Skletion width="10px" height="10px" />
            <Skletion width="10px" height="10px" />
            <Skletion width="10px" height="10px" />
            </>
          )};
          
         <Modal />
        </Wrapper>
       
    );
 };

export default Home;
