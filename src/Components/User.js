import { useNavigate, useParams } from "react-router-dom"

const User=({users})=>{

    const {id} = useParams()
    const navigate = useNavigate()
    const userToFind = users.find(user => user.id == id)
      
    return(
        <div>
            <h1>{userToFind.name}</h1>
            <h2>{userToFind.age}</h2>
            <h3>{userToFind.email}</h3>
            <button onClick={()=>navigate('/users')}>Go Back</button>
        </div>
    )
}

export default User