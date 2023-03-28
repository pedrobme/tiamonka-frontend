import { Badge, Button } from "@mui/material";
import styled from "styled-components";
import { styles } from "../consts/StylesConstants";
import logoimg from "../assets/img/tia monka logo.jfif";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Header() {
	const jsx = (
		<HeaderContainer>
			<LogoContainer>
				<img style={{ width: 150, borderRadius: 100 }} src={logoimg}></img>
			</LogoContainer>
			<HorizontalLine
				backgroundColor={styles.primaryFontColor}
			></HorizontalLine>
			<NavBar>
				<NavigationButtons>
					<Button
						sx={{
							height: "80px",
							fontSize: 18,
							color: `${styles.primaryFontColor}`,
							textTransform: "none",
						}}
					>
						Pagina Inicial
					</Button>
					<Button
						sx={{
							height: "80px",
							fontSize: 18,
							color: `${styles.primaryFontColor}`,
							textTransform: "none",
						}}
					>
						Sobre nós
					</Button>
					<Button
						sx={{
							height: "80px",
							fontSize: 18,
							color: `${styles.primaryFontColor}`,
							textTransform: "none",
						}}
					>
						Cardápio
					</Button>
				</NavigationButtons>
				<UserContainer>
					<Button
						sx={{
							fontSize: 18,
							height: "80px",
							fontWeight: "bold",
							color: `${styles.primaryFontColor}`,
							textTransform: "none",
						}}
					>
						Olá, Visitante
						<KeyboardArrowDownIcon />
					</Button>
					<Button
						sx={{
							fontSize: 18,
							height: "80px",
							fontWeight: "bold",
							color: `${styles.primaryFontColor}`,
							textTransform: "none",
						}}
					>
						<Cart>
							<p>Carrinho</p>
							<Badge badgeContent={5} color="primary">
								<ShoppingCartOutlinedIcon
									sx={{ color: `${styles.primaryFontColor}` }}
									fontSize="large"
								/>
							</Badge>
						</Cart>
					</Button>
				</UserContainer>
			</NavBar>
		</HeaderContainer>
	);

	return jsx;
}

//Styled Components

const HeaderContainer = styled.div`
	width: 80%;
	height: 250px;

	min-width: 600px;

	display: flex;
	flex-direction: column;
	align-items: center;

	position: relative;

	margin: auto;
`;

const LogoContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	margin-top: 10px;
`;

const Cart = styled.div`
	cursor: pointer;

	display: flex;

	align-items: center;

	> p {
		font-size: 1rem;
		font-weight: 800;
	}
`;

const HorizontalLine = styled.div`
	width: 100%;
	height: 1px;

	margin-block: 10px;

	background-color: ${(props) => props.backgroundColor};
`;

const NavBar = styled.div`
	width: 100%;
	height: 80px;

	display: flex;
	align-items: center;

	justify-content: space-between;
`;

const NavigationButtons = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;

	width: 55%;
`;

const UserContainer = styled.div`
	display: flex;

	align-items: center;

	justify-content: space-around;

	width: 40%;

	> p {
		font-size: 18px;
		font-weight: 800;
	}
`;
