import Link from "next/link";
import useSWR from "swr";
import styles from "../../styles/User.module.css";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const UserPage = () => {
    const {data,error} = useSWR("https://dummyjson.com/users", fetcher);

    if(error){
        return <h1>Error Occured!</h1>
    }

    if(!data) return <h1>Loading...</h1>

    return (
        <div>
            <h1>Users</h1>
            {data.users && data.users.map(user => 
            <Link href={`/users/${user.id}`} key={user.id}>
                <div className={styles["text-color"]}>
                {user.firstName} 
                </div>
            </Link>)}
        </div>
    )
}

// const UserPage = () => {
//     const [users, setUsers] = useState();
  
//     //fetch data and set users
//     useEffect(() => {
//        async function fetchUsers() {
//         const data = await fetch(`https://dummyjson.com/users/`);
//         setUsers(await data.json());
//        }
//        fetchUsers();
//     }, [])

//     return (
//         <div>
//             <h1>Users</h1>
//             {users && users.users && users.users.map(user => 
//             <Link href={`/users/${user.id}`} key={user.id}>
//                 <div>
//                 {user.firstName} 
//                 </div>
//             </Link>)}
//         </div>
//     )
// }

export default UserPage;