import { Layout } from "components/Layout";
import Configuration from "./Configuration";
import Showcase from "./Showcase";
import Info from "./Info";

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
