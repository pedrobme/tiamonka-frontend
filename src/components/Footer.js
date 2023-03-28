import styled from "styled-components";
import instagramimg from "../assets/img/instagram.png";
import whatsappimg from "../assets/img/whatsapp.png";

export default function Footer() {
	const jsx = (
		<FooterContainer>
			<h3>Entre em contato:</h3>
			<Socials>
				<a
					href="https://www.instagram.com/tiamonka/"
					target={"_blank"}
					rel="noreferrer"
					title="instagram icons"
				>
					<img style={{ width: 30 }} src={instagramimg} alt="instagram icons" />
				</a>
				<a
					href="http://wa.me/5585998082727"
					target={"_blank"}
					rel="noreferrer"
					title="whatsapp icons"
				>
					<img style={{ width: 30 }} src={whatsappimg} alt="whatsapp icons" />
				</a>
			</Socials>
			<p>
				©2023 por Tia Monka. Criado por{" "}
				<span>
					<a
						href="http://www.linkedin.com/in/pedrobme"
						target={"_blank"}
						rel="noreferrer"
					>
						PHS
					</a>
				</span>
			</p>
		</FooterContainer>
	);

	return jsx;
}

const FooterContainer = styled.div`
	width: 100%;
	min-width: 600px;

	height: 120px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;

	* {
		font-weight: 800;
	}
`;

const Socials = styled.div`
	width: 80px;
	display: flex;
	justify-content: space-between;
`;
