import ProductDetails from "@/components/section/ProductDetails";
import { Product } from "@/type";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const data = await fetch("https://admin.refabry.com/api/all/product/get");
  const posts = await data.json();
  const findOne = posts.data.data.find((pr: Product) => pr.id == Number(id));
  console.log(findOne);
  return (
    <div className="min-h-screen max-w-7xl mx-auto my-32">
      <ProductDetails product={findOne} />
    </div>
  );
};

export default page;
