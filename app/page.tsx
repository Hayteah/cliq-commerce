import { products } from "@/utils/Product";
import Container from "./components/Container";
import HomeBanner from "./components/HomeBanner";

export default function Home() {
  return (
    <main className="p-8">
      <Container>
        <div>
          <HomeBanner />
        </div>
        <div>
          {products.map((product: any) => (
            <div key={product.id}>{product.name}</div>
          ))}
        </div>
      </Container>
    </main>
  );
}
