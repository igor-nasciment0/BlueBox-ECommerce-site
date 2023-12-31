import './index.scss';

import Cabecalho from '../../components/cabecalho/';
import FaixaCategorias from '../../components/faixa-categorias/';
import Rodape from '../../components/rodape/'
import CardProduto from '../../components/cardProduto';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useContext, useEffect, useState } from 'react';
import { TemaContext } from '../../theme';
import { buscarProdutos } from '../../api/produtoAPI';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { useMediaQuery } from '@mui/material';

export default function Landpage() {
    let context = useContext(TemaContext);
    let tema = context.tema;

    const [destaques, setDestaques] = useState([]);

    async function buscarDestaques() {
        try {
            let dest = await buscarProdutos('', 'promoData');

            dest = dest.slice(0, 8)

            setDestaques(dest);

        } catch (error) {
            console.log(error);
        }
    }

    function useSlidesVisiveis() {
        let px900 = useMediaQuery('(max-width: 900px)');
        let px400 = useMediaQuery('(max-width: 450px)');

        if(px900) {
            if(px400) {
                return 1
            } else {
                return 2
            }
        } else {
            return 4
        }
    }

    useEffect(() => {
        buscarDestaques();
    }, []);

    return (
        <div className={"pagina-landpage " + tema}>
            <Cabecalho />
            <FaixaCategorias />

            <main>
                <section className='sec01-hogwarts'>
                    <div className='sec01-container-tela'>
                        <div>
                            <div className='gradient'></div>

                            <div className='container-texto'>
                                <h1>Seus Jogos Favoritos. Na BlueBox.</h1>

                                <div className='container-beneficios'>
                                    <div className='ben-cima'>
                                        <div>
                                            <img src='/assets/images/icons/truck.svg' alt="Caminhão de entregas" />
                                            <h3>Entrega rápida</h3>
                                            <h4>Em toda a cidade de são Paulo</h4>
                                        </div>

                                        <div>
                                            <img src='/assets/images/icons/money.svg' alt="Dinheiro economizado" />
                                            <h3>Ótimo custo-benefício</h3>
                                            <h4>Em todos os produtos da loja</h4>
                                        </div>
                                    </div>

                                    <div className='ben-baixo'>
                                        <div>
                                            <img src='/assets/images/icons/box.svg' alt="Pacote entregue" />
                                            <h3>Seu produto em<br />bom estado</h3>
                                            <h4>Ou seu dinheiro de volta</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='sec02-cards'>
                    <div className='container-cards'>
                        <div className='card-mk'>
                            <div className='card-text'>
                                <h2>Aproveite<br />nossos<br />descontos</h2>
                                <Link to={'/pesquisa'} state={{ordem: "promoData"}}>Confira</Link>
                            </div>
                        </div>

                        <div className='card-fifa'>
                            <div className='card-text'>
                                <h2>Deseja raridades? <br/> Procure na BlueBox!</h2>
                                <Link to={'/pesquisa'} state={{cat: "Raridades"}}>Buscar</Link>
                            </div>
                        </div>

                        <div className='card-doll'>
                            <div className='card-text'>
                                <h2>Descubra mais<br />sobre nós!</h2>
                                <AnchorLink offset='100' href='#sobre'>Saiba mais</AnchorLink>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='sec03-produtos'>
                    <h1>Destaques</h1>

                    <div className='container-produtos'>
                        <div>
                            <CarouselProvider naturalSlideWidth={280} naturalSlideHeight={530} isPlaying interval={3000} infinite
                                totalSlides={destaques.length}
                                visibleSlides={useSlidesVisiveis()}
                                >
                                <Slider>
                                    {destaques.map(produto => 
                                        <Slide>
                                            <div className='container-produto'>
                                                <CardProduto infoProduto={produto} />
                                            </div>
                                        </Slide>    
                                    )}
                                </Slider>

                                <div className='botoes'>
                                    <ButtonBack><img src="/assets/images/icons/arrow-left.svg" alt="" /></ButtonBack>
                                    <ButtonNext><img src="/assets/images/icons/arrow-right.svg" alt="" /></ButtonNext>
                                </div>
                            </CarouselProvider>
                        </div>                    
                    </div>
                </section>

                <section className='sec04-descubra'>
                    <h1>Descubra a BlueBox!</h1>
                    <p>A BlueBox é o melhor destino para jogos usados. Encontre clássicos e títulos populares a preços acessíveis. Garantimos qualidade, embalagem intacta e suporte ao cliente. Junte-se a nós em uma jornada sustentável e apaixonante pelos jogos.</p>
                </section>

                <section className='sec05-pac-man'>
                    <div className='pac-img-container'>
                        <img src='/assets/images/backgrounds/pac-man.png' alt="Fundo Pac-Man" />
                    </div>

                    <div className='pac-text'>
                        <h2>Sente falta dos velhos tempos?</h2>
                        <p>Na BlueBox, você encontra jogos antigos e raros em bom estado para poder reviver as boas memórias sem preocupações. :)</p>
                    </div>
                </section>

                <section className='sec06-sobre' id='sobre'>
                    <h1>Sobre nós</h1>
                    <img src='/assets/images/logo.svg' alt="Logo da BlueBox" />

                    <div>
                        <p>Conheça a BlueBox: uma plataforma pioneira de jogos usados. Fundada por entusiastas apaixonados por games, a BlueBox oferece uma seleção diversificada de jogos usados de alta qualidade a preços acessíveis.</p>
                        <p>Com um compromisso inabalável com a qualidade, verificamos minuciosamente cada jogo antes de listá-lo em nossa plataforma. </p>
                        <p>Nosso serviço de atendimento ao cliente dedicado garante suporte durante todo o processo. Além disso, valorizamos a sustentabilidade e incentivamos o reuso de jogos, promovendo um consumo mais consciente na comunidade gamer.</p>
                        <p>Junte-se à BlueBox e descubra uma maneira acessível, confiável e sustentável de desfrutar dos seus jogos favoritos.</p>
                    </div>
                </section>
            </main>

            <Rodape />
        </div>
    )
}