import { Link } from "react-router-dom";
import CabecalhoLogo from "../../../components/cabecalhoLogo";
import Rodape from "../../../components/rodape"
import './index.scss';

export default function LoginAdm() {
    return(
        <div className="pagina-login-adm">
            <CabecalhoLogo />

            <main>
                <div>
                    <h1>Administração</h1>

                    <label>E-mail:</label>
                    <input type="text" />

                    <label>Senha:</label>
                    <input type="password" />

                    <Link to={""}>Entrar</Link>
                </div>
            </main>

            <Rodape/>
        </div>
    )
}