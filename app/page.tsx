import { products } from "@/utils/products";
import Container from "./components/Container";
import HomeBanner from "./components/HomeBanner";
import Truncate from "@/utils/Truncate";
import ProductCard from "./components/Products/ProductCard";

export default function Home() {
  return (
    <main className="p-8">
      <Container>
        <div>
          <HomeBanner />
        </div>
        <div className="grid grid-cols sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {products.map((product: any) => (
            <ProductCard data={product} />
          ))}
        </div>
      </Container>
    </main>
  );
}
