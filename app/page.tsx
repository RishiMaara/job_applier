import { getSession } from "@/lib/auth";
import MainView from "@/components/MainView";

export default async function Page() {
  const isOwner = await getSession();
  return <MainView initialIsOwner={isOwner} />;
}
