import Configuration from "components/configuration";
import Info from "components/info";
import { Layout } from "components/layout";
import { Showcase } from "components/showcase";

export default function Home() {
  return (
    <Layout>
      <Info />
      <div className="flex flex-col md:flex-row gap-6">
        <Configuration />
        <Showcase />
      </div>
    </Layout>
  );
}
