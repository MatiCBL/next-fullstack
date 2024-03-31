import { getUserByClerkId } from "@/utils/auth";
import { prisma } from "@/utils/db";

const getData = async () => {
  const user = await getUserByClerkId();
  const analyses = await prisma.analysis.findMany({
    where: {
      userId: user.id,
    },
  });
};

const History = () => {
  return <div>History</div>;
};

export default History;
