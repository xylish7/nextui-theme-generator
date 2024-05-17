import { Layout } from "components/Layout";

import Configuration from "./Configuration";
import Showcase from "./Showcase";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row gap-6">
        <Configuration />
        <Showcase />
      </div>
    </Layout>
  );
}
