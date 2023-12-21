import './authenticationUserCard.scss'
import { SignUpButton } from './utils'


const AuthenticationUserCard = () => {
    return (
        <section className='container'>
            <section className='section login-section'>
                <form method='post' action='#' className="form">
                    <h1>Login</h1>
                    <div className='div-input'>
                        <div>
                            <label htmlFor="user-name">Nome de Usuário</label>
                            <input type="text" name="user-name" />
                        </div>
                        <div>
                            <label htmlFor="user-password">Senha</label>
                            <input type="text" name="user-password" />
                        </div>
                    </div>
                    <button type="submit" className='authentication-btn'>Login</button>
                </form>
            </section>
            <section className='section register-section'>
                <form method='post' action='#' className="form">
                    <h1>Cadastrar</h1>
                    <div className='div-input'>
                        <div>
                            <label htmlFor="user-name">Nome de Usuário</label>
                            <input type="text" name="user-name" />
                        </div>
                        <div>
                            <label htmlFor="user-password">Senha</label>
                            <input type="text" name="user-password" />
                        </div>
                        <div>
                            <label htmlFor="user-confirm-password">Confirmar Senha</label>
                            <input type="text" name="user-confirm-password" />
                        </div>
                    </div>
                    <button type="submit" className='authentication-btn'>Cadastrar</button>
                </form>
            </section>
            <div className='overlay-container'>
                <div className='overlay'>
                    <div className='overlay-panel overlay-right'>
                        <h1>Olá, Ainda não tem Conta!</h1>
                        <p>Caso ainda não tenha conta clique no botão Cadastrar abaixo</p>
                        <button className='switch-btn' onClick={SignUpButton}>Cadastrar</button>
                    </div>
                    <div className='overlay-panel overlay-left'>
                        <h1>Bem vindo de volta!</h1>
                        <p>Se já tem uma conta cloque no botão Login abaixo</p>
                        <button className='switch-btn' onClick={SignUpButton}>Login</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { AuthenticationUserCard }
