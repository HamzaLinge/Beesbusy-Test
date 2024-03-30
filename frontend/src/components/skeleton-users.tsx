import { Skeleton } from "@/components/ui/skeleton";
import LoadingUI from "./loading-ui";

function SkeletonUsers() {
  return (
    <Skeleton className="container mx-auto h-72 pb-10 flex items-center justify-center">
      <LoadingUI />
    </Skeleton>
  );
}

export default SkeletonUsers;
