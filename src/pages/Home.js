import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductCategoriesComponent from "../components/ProductsCategories";
import WelcomeContainerComponent from "../components/WelcomeContainer";

export default function Home() {
	return (
		<>
			<Header />
			<WelcomeContainerComponent />
			<ProductCategoriesComponent />
			<Footer />
		</>
	);
}

//Styled Components
