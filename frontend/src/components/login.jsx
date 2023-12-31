import { useRef } from "react"
import { useNavigate,Link } from "react-router-dom"
export const Login = () => {

  const formRef = useRef(null)
  const navigate = useNavigate()

  const handleSumbit = async (e) => {
    e.preventDefault()
    const datForm = new FormData(formRef.current) //Tranformo un HTML en un objet iterator
    const data = Object.fromEntries(datForm)
    const response = await fetch('http://localhost:8081/api/sessions/login', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    if (response.status == 200) {
        const datos = await response.json()
        document.cookie = `jwtCookie=${datos.token}; expires${new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toUTCString()};path=/;`
        navigate('/products')
    } else {
        console.log(response)
    }
}

  return (
    <div className="container">
    <h2>Formulario de Login</h2>
    <form onSubmit={handleSumbit} ref={formRef}>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email: </label>
            <input type="email" name="email" className="form-control" />
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password: </label>
            <input type="password" name="password" className="form-control" />
        </div>
        <button type="submit" className="btn btn-secondary">Iniciar Sesion</button>

    </form>
        <Link to="/reset-password-request">Olvidé mi contraseña</Link>
</div>
  )
}

