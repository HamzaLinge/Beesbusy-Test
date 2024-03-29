import { getUserById } from "@/actions/user";
import FormUser from "@/components/form-user";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { capitalize } from "@/utils/helpers";

async function EditUserPage({
  params: { userId },
}: {
  params: { userId: string };
}) {
  const user = await getUserById(userId);

  return (
    <section className="p-10 flex flex-col items-center flex-1 gap-y-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Liste des Utilisateurs</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>
              Modifier {capitalize(user.prenom)} {capitalize(user.nom)}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="text-3xl font-semibod">
        Modifier {capitalize(user.prenom)} {capitalize(user.nom)}
      </h1>

      <FormUser user={user} />
    </section>
  );
}

export default EditUserPage;
