import { useQuery } from "@apollo/client";
import { GET_CLIENTS } from "../queries/clientQueries";
import Client from "./Client";

const Clients = () => {
    const { loading, error, data } = useQuery(GET_CLIENTS);

    if (loading) return (<p>Loading...</p>);
    if (error) return (<p>Error</p>);
    return (
        <>
            <ol className="w-full bg-slate-200 p-2 rounded-lg space-y-2 my-5">
                <li className="flex justify-between items-center gap-5 p-5">
                    <div className="flex-1 font-semibold">Name</div>
                    <div className="flex-1 font-semibold">Email</div>
                    <div className="flex-1 font-semibold">Phone</div>
                    <div className="flex-1 font-semibold">Action</div>
                </li>
                {!loading && !error && (
                    data?.clients.map((client) => <Client key={client.id} client={client} />)
                )}
            </ol>
        </>
    )
}

export default Clients