import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import choco from "../assets/img/bolo-cobertura-chocolate.jfif";
import goiabaninho from "../assets/img/bolo meio ninho meio goiaba.jfif";
import laranja from "../assets/img/bolo-cobertura-laranja.jfif";
import ninho from "../assets/img/bolo-cobertura-ninho.jfif";
import mesclado from "../assets/img/bolo-mesclado.jfif";
import styled from "styled-components";

export default function WelcomeContainerComponent() {
	const jsx = (
		<WelcomeContainer>
			<WelcomeText>
				<h3 style={{ letterSpacing: 3, fontSize: 36 }}>Seja bem-vindo(a)!</h3>
				<p style={{ letterSpacing: 2, fontSize: 16 }}>
					Tia Monka convida você a experimentar esse carinho. Para fazer os seus
					dias mais doces, escolha abaixo suas opções.
				</p>
				<p style={{ letterSpacing: 2, fontSize: 12, fontStyle: "italic" }}>
					"...que seja doce o dia quando eu abrir as janelas e lembrar de você.
					Que sejam doces os finais de tardes, inclusive os de segunda-feira -
					quando começa a contagem regressiva para o final de semana chegar".
				</p>
				<p style={{ textAlign: "end", fontSize: 12, fontStyle: "italic" }}>
					Caio Fernando Abreu
				</p>
			</WelcomeText>
			<div
				style={{
					display: "block",
					width: "50%",
					height: "400px",
					position: "absolute",
					right: "10%",
				}}
			>
				<Carousel
					sx={{ height: "400px" }}
					fade
					controls={false}
					indicators={false}
					pause={null}
				>
					<Carousel.Item interval={1500}>
						<img
							style={{ width: 400, height: "400px", borderRadius: "10px" }}
							className="d-block w-100"
							src={choco}
							alt="Carroussel first element"
						/>
					</Carousel.Item>
					<Carousel.Item interval={1500}>
						<img
							style={{ width: 400, height: "400px", borderRadius: "10px" }}
							className="d-block w-100"
							src={goiabaninho}
							alt="Carroussel second element"
						/>
					</Carousel.Item>
					<Carousel.Item interval={1500}>
						<img
							style={{ width: 400, height: "400px", borderRadius: "10px" }}
							className="d-block w-100"
							src={laranja}
							alt="Carroussel third element"
						/>
					</Carousel.Item>
					<Carousel.Item interval={1500}>
						<img
							style={{ width: 400, height: "400px", borderRadius: "10px" }}
							className="d-block w-100"
							src={ninho}
							alt="Carroussel fourth element"
						/>
					</Carousel.Item>
					<Carousel.Item interval={1500}>
						<img
							style={{ width: 400, height: "400px", borderRadius: "10px" }}
							className="d-block w-100"
							src={mesclado}
							alt="Carroulssel fifth element"
						/>
					</Carousel.Item>
				</Carousel>
			</div>
		</WelcomeContainer>
	);

	return jsx;
}

// Styled Components
const WelcomeContainer = styled.div`
	width: 80%;
	min-width: 600px;
	max-width: calc(60 / 100 * 1480px);
	height: calc(100vh - 110px);

	margin: auto;

	display: flex;
	justify-content: center;
	align-items: center;

	position: relative;
`;

const WelcomeText = styled.div`
	width: 40%;
	padding: 20px;

	background-color: #2c2f83;
	> * {
		color: #fff;

		margin-block: 10px;
	}

	position: absolute;
	left: 40px;

	border-radius: 10px;
	z-index: 10;

	user-select: none;
`;
