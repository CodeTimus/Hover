import React from 'react'

const DoctorLogin = () => {
  return (
    <div>
      <div className="container">
  <div className="login-container">
    <h1>Login</h1>
    <form action="#" className="form-login">
      <div className="textfield">
        <label htmlFor="email"> E-mail</label>
        <input type="email" name="usuario" placeholder="E-mail" />
      </div>
      <div className="textfield">
        <label htmlFor="senha"> Senha</label>
        <input type="password" name="senha" placeholder="Senha" />
      </div>
      <a className="forgot-password" href="#">
        Esqueceu sua senha?
      </a>
      <button className="btn-login">Login </button>
    </form>
    <div></div>
  </div>
</div>

    </div>
  )
}

export default DoctorLogin
