import './index.scss';
import {useContext} from 'react';
import {TemaContext} from '../../theme';
import Cabecalho from '../../components/cabecalho'
import { Link } from 'react-router-dom';
import Rodape from '../../components/rodape';

import BarraProgresso from './barraProgresso';

export default function StatusEntrega() {

    const context = useContext(TemaContext);
    let tema = context.tema;

    return (
        <div className={"pagina-entrega " + tema}>
            <Cabecalho />

            <div className='gradient'>
                <main>
                    <Link><img src="/assets/images/icons/arrow-left.svg" alt="" />Voltar</Link>
                    <h1>Status da compra</h1>

                    <section>
                        <div className='cont-pedido-pgmt'>
                            <div className='cont-pedido'>
                                <div>
                                    <div>
                                        <h2>Pedido</h2>
                                        <h3>God of War: Saga (3 Jogos) (Seminovo) - PS3</h3>
                                        <h4>1 unidade / <span>Valor: R$ 29,99</span></h4>
                                    </div>

                                    <img src="/assets/images/foto_produto.png" alt="Foto do Produto" />
                                </div>

                                <div className='cont-outros-produtos'>
                                    <div>
                                        +
                                        <h4>God of War: Saga...</h4>
                                        <img src="/assets/images/foto_produto.png" alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="cont-pagamento">
                                <div>
                                    <h2>Pagamento</h2> 
                                    <h3>PIX – <span>R$ 68,98</span></h3>
                                    <h4>Aprovado em 23/07/2023</h4>
                                </div>
                                <img src="/assets/images/PIX-logo.png" alt="" />
                            </div>
                        </div>

                        <div className='cont-detalhes'>
                            <h2>Detalhes da Compra</h2>
                            <h3>Efetuada em 23/07/2023</h3>

                            <div>
                                <h4>Produtos (2)</h4>
                                <p>R$ 59,98</p>
                            </div>

                            <div>
                                <h4>Frete</h4>
                                <p>R$ 10,00</p>
                            </div>

                            <div>
                                <h4>Total</h4>
                                <p>R$ 68,98</p>
                            </div>
                        </div>
                    </section>

                    <div className='processo-entrega'>
                        <h3>Entrega Pendente</h3>
                        <h2>Data prevista de Entrega: 29/07/2023</h2>
                        <p>Desculpe por fazer você esperar :(</p>

                        <BarraProgresso/>
                    </div>

                    <h2>Problemas com esta compra?</h2>
                    <Link className='contato' to={'/contato'}>Contate-nos</Link>
                </main>
            </div>

            <Rodape/>
        </div>
    )
}