import { UpdateIcon } from "@radix-ui/react-icons";

export default function LoadingUI() {
  return (
    <div className={"flex flex-1 items-start justify-center p-10"}>
      <UpdateIcon className="h-6 w-6 animate-spin" />
    </div>
  );
}
