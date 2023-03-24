import { FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "../mutations/clientMutation";
import { GET_CLIENTS } from "../queries/clientQueries";

const Client = ({ client: { id, name, email, phone } }) => {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: id },
    // refetchQueries: [{ query: GET_CLIENTS }]
    update(cache, { data: { deleteClient } }) {
      const { clients } = cache.readQuery({
        query: GET_CLIENTS
      });
      cache.writeQuery({
        query: GET_CLIENTS,
        data: { clients: clients.filter(client => client.id !== deleteClient.id) }
      });
    }
  });
  return (
    <>
      <li className="flex justify-between items-center gap-5 bg-slate-100 border border-slate-200 rounded-md p-5">
        <div className="flex-1">{name}</div>
        <div className="flex-1">{email}</div>
        <div className="flex-1">{phone}</div>
        <div className="flex-1">
          <button onClick={deleteClient}>
            <FaTrash className="text-red-700 hover:text-red-800" />
          </button>
        </div>
      </li>
    </>
  )
}

export default Client