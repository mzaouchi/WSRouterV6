import CardUser from "./CardUser"

const Users=({users})=>{
    return(
        <div>
            <h1>Users</h1>
            {
                users.map(user => <CardUser key={user.id} user={user}/>)
            }
        </div>
    )
}

export default Users