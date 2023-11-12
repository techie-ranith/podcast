import { Savedbar } from "@/components/common/layout/";
import { Episodecard } from "@/components/common/layout/";
type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <main className="bg-gray-900 h-screen">
        <Episodecard />
      </main>
    </>
  );
};

export default Home;
