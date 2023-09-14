import getBillboards from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container"

export const revalidate = 0;

const HomePage = async () => {
    const products = await getProducts({ isFeatured: true })
    const billboards = await getBillboards("63b0bed2-aa55-42ab-b8d6-312bba70e323");
    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboards} />
            </div>
            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                <ProductList title="Featured Products" items={products} />
            </div>
        </Container>
    )
}

export default HomePage