import { Badge, Button } from "@mui/material";
import styled from "styled-components";
import { styles } from "../consts/StylesConstants";
import logoimg from "../assets/img/tia monka logo.jfif";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HeaderMobile from "./HeaderMobile";

export default function Header() {
	const jsx = (
		<>
			<HeaderContainer>
				<HeaderWrapper>
					<img
						style={{ width: "125px", borderRadius: 100 }}
						src={logoimg}
					></img>
					<NavigationButtons
						borderColor={styles.primaryFontColor}
						primaryFontFamily={styles.primaryFontFamily}
					>
						<Button
							sx={{
								height: "fit-content",
								width: "100%",
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
								width: "100%",
								fontSize: 18,
								color: `${styles.primaryFontColor}`,
								textTransform: "none",
							}}
						>
							Sobre nós
						</Button>
						<Button
							sx={{
								height: "fit-content",
								width: "100%",
								fontSize: 18,
								color: `${styles.primaryFontColor}`,
								textTransform: "none",
							}}
						>
							Cardápio
						</Button>
					</NavigationButtons>
					<UserContainer
						borderColor={styles.primaryFontColor}
						primaryFontFamily={styles.primaryFontFamily}
					>
						<Button
							sx={{
								height: "fit-content",
								color: `${styles.primaryFontColor}`,
								textTransform: "none",
							}}
						>
							<AccountCircleRoundedIcon
								sx={{ color: `${styles.primaryFontColor}` }}
								fontSize="medium"
							/>
							<KeyboardArrowDownIcon fontSize="small" />
						</Button>
						<Button
							sx={{
								height: "fit-content",
								color: `${styles.primaryFontColor}`,
								textTransform: "none",
							}}
						>
							<Cart>
								<Badge badgeContent={5} color="primary">
									<ShoppingCartOutlinedIcon
										sx={{ color: `${styles.primaryFontColor}` }}
										fontSize="medium"
									/>
								</Badge>
							</Cart>
						</Button>
					</UserContainer>
				</HeaderWrapper>
				<HorizontalLine
					backgroundColor={styles.primaryFontColor}
				></HorizontalLine>
			</HeaderContainer>
			<HeaderMobile></HeaderMobile>
		</>
	);

	return jsx;
}

//Styled Components

const HeaderContainer = styled.div`
	width: 80%;
	height: fit-content;

	min-width: 600px;
	max-width: 1480px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	position: relative;

	margin: auto;
	margin-top: 10px;

	@media (max-width: 900px) {
		display: none;
	}
`;

const HeaderWrapper = styled.div`
	display: flex;

	align-items: center;
	justify-content: space-between;

	width: 100%;
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

const NavigationButtons = styled.div`
	display: flex;

	align-items: center;
	justify-content: space-around;
	> button {
		font-family: ${(props) => props.primaryFontFamily};
		:hover {
			border: ${(props) => `1px solid ${props.borderColor}`};
		}
	}

	width: fit-content;
	min-width: 405px;
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
