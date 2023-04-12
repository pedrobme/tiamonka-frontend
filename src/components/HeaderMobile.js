import { Badge, Button } from "@mui/material";
import styled from "styled-components";
import { styles } from "../consts/StylesConstants";
import logoimg from "../assets/img/tia monka logo.jfif";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function HeaderMobile() {
	const jsx = (
		<>
			<HeaderContainer
				borderColor={styles.primaryFontColor}
				backgroundColor={styles.primaryBackgroundColor}
			>
				<HeaderWrapper>
					<img
						style={{ width: "100px", borderRadius: 100 }}
						src={logoimg}
					></img>
					<UserContainer
						borderColor={styles.primaryFontColor}
						primaryFontFamily={styles.primaryFontFamily}
					>
						<Button
							sx={{
								fontSize: 18,
								height: "80px",
								fontWeight: "bold",
								color: `${styles.primaryFontColor}`,
								textTransform: "none",
							}}
						>
							<AccountCircleRoundedIcon
								sx={{ color: `${styles.primaryFontColor}` }}
								fontSize="large"
							/>
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
								<Badge badgeContent={5} color="primary">
									<ShoppingCartOutlinedIcon
										sx={{ color: `${styles.primaryFontColor}` }}
										fontSize="large"
									/>
								</Badge>
							</Cart>
						</Button>
					</UserContainer>
				</HeaderWrapper>
				<HorizontalLine
					backgroundColor={styles.primaryFontColor}
				></HorizontalLine>
				<NavigationButtons
					borderColor={styles.primaryFontColor}
					primaryFontFamily={styles.primaryFontFamily}
				>
					<Button
						sx={{
							height: "fit-content",
							fontSize: 18,
							color: `${styles.primaryFontColor}`,
							textTransform: "none",
						}}
					>
						Pagina Inicial
					</Button>
					<Button
						sx={{
							height: "fit-content",
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
			</HeaderContainer>
			<HeaderPhantom></HeaderPhantom>
		</>
	);

	return jsx;
}

//Styled Components

const HeaderContainer = styled.div`
	width: 100%;
	height: fit-content;

	min-width: 600px;
	max-width: 1480px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	background-color: ${(props) => props.backgroundColor};

	border-bottom: 1px solid ${(props) => props.borderColor};

	position: fixed;

	margin: auto;

	@media (min-width: 900px) {
		display: none;
	}

	z-index: 12;
`;

const HeaderPhantom = styled.div`
	height: 150px;
	@media (min-width: 900px) {
		display: none;
	}
`;
const HeaderWrapper = styled.div`
	display: flex;

	align-items: center;
	justify-content: space-between;

	margin-top: 10px;

	width: 90%;

	padding-block: 0px;
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

	margin-top: 10px;

	background-color: ${(props) => props.backgroundColor};
`;

const NavigationButtons = styled.div`
	display: flex;

	align-items: center;
	justify-content: space-around;

	> button {
		height: 100%;
		width: 100%;
		font-family: ${(props) => props.primaryFontFamily};
		:hover {
			border-inline: ${(props) => `1px solid ${props.borderColor}`};
		}
	}

	width: 100%;
	min-width: 400px;
`;

const UserContainer = styled.div`
	display: flex;

	align-items: center;

	justify-content: space-around;

	> button {
		font-family: ${(props) => props.primaryFontFamily};
	}

	> p {
		font-size: 18px;
		font-weight: 800;
	}

	width: fit-content;
`;
