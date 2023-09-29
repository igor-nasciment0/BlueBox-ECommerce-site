import './index.scss';

import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify'
import { TemaContext } from '../../theme';
import { loginCliente } from '../../api/clienteAPI';

export default function UserLogin() {

  const navigate = useNavigate();
  
  const context = useContext(TemaContext);
  let tema = context.tema;

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function logar() {
    try {

      let resp = await loginCliente(email, senha);

      if (resp.status === 200)
      {
        toast.success('Logado com sucesso!')
        setTimeout(() => {
          navigate('/');
        }, 3000);
      }

    } catch (error) {
      if (error.response) {
        toast.error(error.response.data)
      }
      else {
        toast.error(error.message)
      }
    }
  }

  return (
    <div className={"Tela-Login " + tema}>
      <Cabecalho/>
        <div className="gradient">
          <main className="User-Login-container">

            <ToastContainer
                  position="bottom-center"
                  autoClose={3000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="colored"
              />

            <section className="Login">
              <div className="Dados-Container">
                <h1>Login</h1>
                    
                <input type="text" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)}/>
              
                <Link to={""}>Esqueceu a senha?</Link>
                <button onClick={logar}>Entrar</button>

                <p>Novo na BlueBox?</p>
                <Link className="link-cadastro" to={"/cadastro"}>Crie sua Conta</Link>
              </div>

              <div className="Login-google">
                <img src="/assets/images/usuario.png" alt="" />
                <button className="Log-wit-google"> <img src="/assets/images/google.png" alt="" /> <span>Entrar com o Google</span></button>
              </div>
            </section>        
          </main>   
        </div>
      <Rodape/>
    </div>  
  )

}