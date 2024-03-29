import CreateFakeUsersButton from "@/components/dev/create-fake-users-btn";
import DeleteAllUsers from "@/components/dev/delete-all-users";

function DevSection() {
  if (process.env.NODE_ENV !== "development") return null;

  return (
    <div className="space-y-2 text-sm">
      <p>Ces deux boutons peuvent être utilisés pour tester l'application:</p>
      <div className="flex flex-col gap-y-2">
        <CreateFakeUsersButton />
        <DeleteAllUsers />
      </div>
    </div>
  );
}

export default DevSection;
