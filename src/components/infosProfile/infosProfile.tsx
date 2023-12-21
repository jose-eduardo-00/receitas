import './infosProfile.scss'


const InfosProfile = () => {
    return (
        <section className='infos-profile'>
            <h1 className='surname'>Apelido do usuário</h1>
            <div className='user-infos'>
                <div className='infos'>
                    <label htmlFor="surname">Apelido</label>
                    <input type="text" name="surname" placeholder='Apelido do usuário' />
                </div>
                <div className='infos'>
                    <label htmlFor="userName">Nome</label>
                    <input type="text" name="userName" placeholder='Nome do usuário para o login' />
                </div>
                <div className='infos'>
                    <label htmlFor="password">Senha</label>
                    <input type="text" name="password" placeholder='Senha do usuário para o login' />
                </div>
                <div className='infos'>
                    <label htmlFor="confirm-password">Confirmar Senha</label>
                    <input type="text" name="confirm-password" placeholder='Confirmar senha do usuário' />
                </div>
            </div>
            <div className='button-div'>
                <button className='btn-profile'>Salvar</button>
            </div>
        </section>
    )
}

export { InfosProfile }