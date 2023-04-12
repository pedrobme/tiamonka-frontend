import choco from "../assets/img/bolo-cobertura-chocolate.jfif";
import laranja from "../assets/img/bolo-cobertura-laranja.jfif";
import mesclado from "../assets/img/bolo-mesclado.jfif";
import biscoitos from "../assets/img/biscoitinhos.jfif";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Divider } from "@mui/material";

export default function ProductCategoriesComponent() {
	const categories = [
		"Bolos Fofos",
		"Bolos Vulcão",
		"Bolos de Fruta",
		"Biscoitos Amanteigados",
	];

	const backgroundImages = [mesclado, choco, laranja, biscoitos];

	const jsx = (
		<CategoriesContainer>
			<Divider
				textAlign="center"
				sx={{
					fontWeight: 700,
					fontSize: "60px",
					marginBottom: "80px",
					textAlign: "center",
					userSelect: "none",
					"&::before": {
						borderTop: "3px solid #2c2f83",
					},
					"&::after": {
						borderTop: "3px solid #2c2f83",
					},
				}}
			>
				Nossos produtos
			</Divider>
			<ion-icon name="flower-outline"></ion-icon>
			<CategorysMenu>
				{categories.map((categoryObj, index) => {
					return (
						<Link key={index} to={`/category/${index}}`}>
							<CategoryDiv>
								<img
									alt={`${categoryObj} category`}
									src={backgroundImages[index]}
								/>
								<h4>{categoryObj}</h4>
							</CategoryDiv>
						</Link>
					);
				})}
			</CategorysMenu>
		</CategoriesContainer>
	);

	return jsx;
}

// styled components
const CategoriesContainer = styled.div`
	width: 80%;
	min-width: 600px;
	max-width: calc(60 / 100 * 1480px);

	margin: auto;

	> h3 {
		font-weight: 700;
		font-size: 60px;
		margin-top: 130px;

		user-select: none;
	}
`;
const CategorysMenu = styled.div`
	width: 100%;

	display: flex;
	justify-content: space-evenly;

	flex-wrap: wrap;
	margin-top: 30px;

	margin-top: 30px;
`;

const CategoryDiv = styled.div`
	position: relative;

	width: 400px;
	height: 300px;

	border-radius: 10px;

	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.6);

	cursor: pointer;

	transition: all;
	transition-duration: 1s;

	margin-bottom: 30px;
	:hover {
		img {
			filter: brightness(100%);
			transform: scale(1.05);
		}
		h4 {
			bottom: 10px;
			transform: scale(1.05);
		}
	}
	img {
		object-fit: cover;
		border-radius: 10px;
		transition: all;
		transition-duration: 0.3s;
		width: 100%;
		height: 100%;
		filter: brightness(50%);
	}
	> h4 {
		position: absolute;
		bottom: 0;
		right: 0;
		background-color: rgba(0, 0, 0, 0.8);
		width: 100%;
		transition: all;
		transition-duration: 0.3s;
		padding: 12px;
		color: #ffffff;
		text-shadow: 2px 2px #000000;
		font-size: 50px;
	}
`;
