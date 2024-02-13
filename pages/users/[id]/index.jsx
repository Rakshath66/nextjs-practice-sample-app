import { useRouter } from "next/router";  
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const UserInfoPage = () => {
    const router = useRouter();
    const id = router.query.id;
    const {data, error} = useSWR(`https://dummyjson.com/users/${id}`, fetcher);

    if(error)
    {
        return <h1>Error Occured inside user</h1>;
    }

    if(!data) return <h1>Loading...</h1>

    return (
        <div>
            <h1>{data.firstName}</h1>
            <h1>{data.email}</h1>
        </div>
    )
}

//using useEffect to fetch data
// const UserInfoPage = () => {
//     const [userInfo, setUserInfo] = useState();
//     const router = useRouter();
//     console.log(userInfo);

//     useEffect(() => {
//        const id = router.query.id;
//        async function getUserById(id) {
//         const data = await fetch(`https://dummyjson.com/users/${id}`);
//         setUserInfo(await data.json());
//        }

//        getUserById(id);
//     }, [router.query.id])

//     return (
//         <div>
//             <h1>{userInfo?.firstName}</h1>
//             <h1>{userInfo?.email}</h1>
//         </div>
//     )
// }

export default UserInfoPage;