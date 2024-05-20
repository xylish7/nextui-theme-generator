import { Layout } from "components/CLayout";
import Configuration from "./Configuration";
import Showcase from "./Showcase";
import Info from "./Info";

export default function Home() {
  return (
    <Layout>
      <Info />
      <div id="theme-generator" className="flex flex-col md:flex-row gap-6">
        <Configuration />
        <Showcase />
      </div>
    </Layout>
  );
}
