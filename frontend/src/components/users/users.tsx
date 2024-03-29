import { DataTable } from "@/components/users/data-table";
import { columns } from "./columns";
import { getUsers } from "@/actions/user";

async function Users() {
  const users = await getUsers();

  return (
    <div className="container mx-auto pb-10">
      <DataTable columns={columns} data={users} />
    </div>
  );
}

export default Users;
