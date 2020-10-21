import React from "react";
import theme from "theme";
import { Theme, Image, Text, Span, Button, Strong, Box, Link, Input } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { StackItem, Override, Stack, Section, Formspree } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Электронная виза в Россию от TravelRussiaToday
			</title>
			<meta name={"description"} content={"Электронная виза в Россию"} />
			<meta property={"og:title"} content={"Электронная виза в Россию от TravelRussiaToday"} />
			<meta property={"og:description"} content={"Электронная виза в Россию от TravelRussiaToday"} />
			<meta property={"og:image"} content={"https://static.tildacdn.com/tild3365-3965-4062-b565-333661316334/logo2.svg"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/5f82bd438a25ab001e4e7636/images/favicons.png?v=2020-10-20T08:26:54.650Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/5f82bd438a25ab001e4e7636/images/favicons.png?v=2020-10-20T08:26:54.650Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/5f82bd438a25ab001e4e7636/images/favicons.png?v=2020-10-20T08:26:54.650Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/5f82bd438a25ab001e4e7636/images/favicons.png?v=2020-10-20T08:26:54.650Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/5f82bd438a25ab001e4e7636/images/favicons.png?v=2020-10-20T08:26:54.650Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/5f82bd438a25ab001e4e7636/images/favicons.png?v=2020-10-20T08:26:54.650Z"} />
			<meta name={"msapplication-TileColor"} content={"https://uploads.quarkly.io/5f82bd438a25ab001e4e7636/images/favicons.png?v=2020-10-20T08:26:54.650Z"} />
		</Helmet>
		<Section
			padding="10px 0 10px 0"
			max-width="100%"
			px-padding="0px 0 0px 0"
			px-height="70px"
			px-width="100%"
			width="100%"
			lg-width="100%"
			moy-width="100%"
		>
			<Stack>
				{"    "}
				<StackItem
					width="40%"
					display="flex"
					md-width="40%"
					sm-width="30%"
					px-height="91px"
					px-padding="16px 16px 16px 16px"
					px-margin="0px 0px 0px 0px"
				>
					{"        "}
					<Image width="118px" height="59px" src="https://static.tildacdn.com/tild3365-3965-4062-b565-333661316334/logo2.svg" />
					{"    "}
				</StackItem>
				{"    "}
				<StackItem
					width="60%"
					display="flex"
					md-width="60%"
					sm-width="70%"
					px-margin="0px 0px 0px 0px"
				>
					<Override slot="StackItemContent" display="flex" align-items="center" justify-content="flex-end" />
					{"        "}
					<Image
						width="24px"
						height="24px"
						src="https://static.tildacdn.com/tild6139-3832-4838-b533-613236613930/phone_2.svg"
						margin="0px 0px 0px 10px"
						padding="0px 0px 0px 0"
						sm-display="none"
					/>
					<Text margin="16px 0px 16px 10px" sm-display="none" px-font="20px --fontFamily-googleSourceSansPro" font="20px --fontFamily-googleSourceSansPro">
						+7 (707) 535-55-55
					</Text>
					<Image
						width="24px"
						height="24px"
						src="https://static.tildacdn.com/tild6665-3234-4337-a266-343962353233/whatsapp_6.svg"
						padding="10px 0px 0px px"
						margin="0px 0px 0px 10px"
					/>
					<Image
						width="24px"
						height="24px"
						src="https://static.tildacdn.com/tild3133-3166-4233-a633-613334376430/logo_viber.svg"
						padding="10px 0px 0px px"
						margin="0px 0px 0px 10px"
					/>
					<Image
						width="24px"
						height="24px"
						src="https://static.tildacdn.com/tild3630-3935-4130-b663-396530623263/telegram_4.svg"
						padding="10px 0px 0px px"
						margin="0px 0px 0px 10px"
						px-margin="0px 50px 0px 10px"
					/>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section
			lazy-load
			background="rgba(0, 0, 0, 0) url(https://static.tildacdn.com/tild6335-6165-4430-a265-343166313765/1.jpg) 0% 0% /auto repeat scroll padding-box"
			md-height="770px"
			padding="40px 0 40px 0"
			height="620px"
		>
			<Stack>
				{"    "}
				<StackItem width="50%" md-width="100%" margin="0px 0px 0px 0px" px-margin="0px 0px 0px 100p">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						md-justify-content="center"
						md-align-items="center"
						margin="0px 0px 0px 100p"
						px-margin="0px 0px 0px 100px"
						sm-margin="0px 0px 0px 0px"
						moy-margin="0px 0px 0px 100px"
						lg-margin="0px 0px 0px 0px"
					/>
					{"        "}
					<Text
						font="600 48px --fontFamily-googleSourceSansPro"
						lg-width="480px"
						color="#2a2a2a"
						sm-text-align="center"
						sm-font="600 48px/0.85 --fontFamily-googleSourceSansPro"
						sm-width="100%"
					>
						<Span
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							sm-font="normal 600 30px/0.7 &quot;Source Sans Pro&quot;, sans-serif"
							sm-text-align="left"
							font="600 48px --fontFamily-googleSourceSansPro"
							px-font="600 48px/1.55 --fontFamily-googleSourceSansPro"
						>
							Электронная виза и{" "}
							<br />
							страховка в Россию
						</Span>
					</Text>
					<Text font="200 22px --fontFamily-googleSourceSansPro" color="#2a2a2a" sm-text-align="center" margin="16px 0px 30px 0px">
						За 5 минут без ошибок, фотоателье и сложных анкет.
					</Text>
					<Button
						width="260px"
						height="54px"
						border-radius="50px"
						background="#c1a050"
						margin="0px 0px 30px 0px"
						hover-background="#cbab58"
						font="normal 300 16px/1.5 --fontFamily-googleSourceSansPro"
					>
						ОФОРМИТЬ ВИЗУ
					</Button>
					<Image
						width="500px"
						height="500px"
						srcSet="https://static.tildacdn.com/tild6338-3235-4163-a262-303730343833/Layer_3.png"
						md-width="300px"
						md-height="300px"
						md-display="block"
						display="none"
					/>
					<Box
						max-width="480px"
						height="100%"
						background="#FFF"
						border-width="0px"
						border-color="#c1a050"
						lg-height="100px"
						md-width="450px"
						md-display="block"
						md-padding="0px 20px 0px 0px"
						nout-border-width="5px"
						nout-border-color="#04080C"
						sm-width="320px"
						sm-border-width="1px"
						sm-border-style="solid"
						sm-border-color="#a98428"
						sm-margin="0px 0px 0px 0px"
						sm-padding="0px 0px 0px 0px"
						border-left="1px solid #d4bd6a"
						px-height="100%"
					>
						<Text
							font="18PX --fontFamily-googleSourceSansPro"
							padding="0px 0px 0px 20px"
							md-text-align="center"
							color="#2a2a2a"
							sm-padding="0px 0px 0px 0px"
						>
							Всего за{" "}
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								2,99 евро
							</Strong>
						</Text>
						<Text
							font="18PX --fontFamily-googleSourceSansPro"
							padding="0px 0px 0px 20px"
							md-text-align="center"
							color="#2a2a2a"
							sm-padding="0px 0px 0px 0px"
							sm-margin="16px 0px 16px 0px"
							px-margin="16px 0px 16px 0px"
							px-padding="0px 0px 0px 20px"
						>
							Мы вернем Вам деньги, если Вы не получите визу.
						</Text>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex">
					<Image
						width="550px"
						height="550px"
						srcSet="https://static.tildacdn.com/tild6338-3235-4163-a262-303730343833/Layer_3.png"
						md-width="300px"
						md-height="300px"
						md-display="none"
					/>
					{"            "}
				</StackItem>
			</Stack>
		</Section>
		<Section background="#f7f7f7" padding="0px 0 0px 0">
			<Stack
				nout-padding="20px 0px 20px 0px"
				nout-margin="-16px -16px -16px -16px"
				border-radius="15px"
				box-shadow="0 6px 10px 0 rgba(0, 0, 0, 0.05)"
				padding="20px 0px 20px 0px"
				margin="-16px -16px -16px -16px"
				position="relative"
				bottom="120px"
				nout-background="#ffffff"
				background="#fff"
				nout-left="0px"
				justify-content="center"
				align-items="center"
				md-padding="20px 0px 30px 0px"
				md-max-height="-"
				sm-margin="20px 0px -40px"
				sm-width="100%"
				sm-justify-content="center"
				sm-align-items="center"
				md-top="-50px"
			>
				<StackItem
					width="19%"
					md-width="33%"
					lg-width="20%"
					sm-width="100%"
					sm-padding="0px 16px 0px 16px"
				>
					<Override
						slot="StackItemContent"
						justify-content="center"
						flex-direction="column"
						align-items="center"
						sm-flex-direction="row"
						sm-justify-content="left"
						sm-padding="16px 0px 16px 0px"
					/>
					<Image
						width="70px"
						height="70px"
						srcSet="https://static.tildacdn.com/tild6431-3663-4263-a636-336564396164/busin.svg "
						sm-width="50px"
						sm-height="50px"
						sm-padding="0px 25px 0px 0px"
					/>
					<Text font="normal 400 22px/1.5 --fontFamily-googleSourceSansPro" color="#2a2a2a" lg-text-align="center" sm-font="normal 400 18px/1.5 --fontFamily-googleOpenSans">
						Бизнес виза
						<br />
					</Text>
				</StackItem>
				<StackItem
					width="22%"
					md-width="33%"
					lg-width="20%"
					sm-width="100%"
					sm-padding="0px 16px 0px 16px"
				>
					<Override
						slot="StackItemContent"
						justify-content="center"
						flex-direction="column"
						align-items="center"
						sm-flex-direction="row"
						sm-justify-content="left"
						sm-padding="16px 0px 16px 0px"
					/>
					<Image
						width="70px"
						height="70px"
						srcSet="https://static.tildacdn.com/tild3632-3137-4034-a637-383262303633/tour.svg"
						sm-width="50px"
						sm-height="50px"
						sm-padding="0px 25px 0px 0px"
					/>
					<Text
						font="normal 400 22px/1.5 --fontFamily-googleSourceSansPro"
						color="#2a2a2a"
						lg-text-align="center"
						nout-text-align="center"
						sm-font="normal 400 18px/1.5 --fontFamily-googleOpenSans"
					>
						Туристическая виза
					</Text>
				</StackItem>
				<StackItem
					width="20%"
					md-width="33%"
					lg-width="20%"
					lg-text-align="center"
					sm-width="100%"
					sm-padding="0px 16px 0px 16px"
				>
					<Override
						slot="StackItemContent"
						justify-content="center"
						flex-direction="column"
						align-items="center"
						sm-flex-direction="row"
						sm-justify-content="left"
						sm-padding="16px 0px 16px 0px"
					/>
					<Image
						width="70px"
						height="70px"
						srcSet="https://static.tildacdn.com/tild6236-6165-4463-b364-663137656465/sport.svg"
						lg-text-align="center"
						sm-width="50px"
						sm-height="50px"
						sm-padding="0px 25px 0px 0px"
					/>
					<Text
						font="normal 400 22px/1.5 --fontFamily-googleSourceSansPro"
						color="#2a2a2a"
						lg-text-align="center"
						nout-text-align="center"
						sm-font="normal 400 18px/1.5 --fontFamily-googleOpenSans"
					>
						Спортивная виза
					</Text>
				</StackItem>
				<StackItem
					width="19%"
					lg-width="20%"
					lg-text-align="center"
					sm-width="100%"
					sm-padding="0px 16px 0px 16px"
				>
					<Override
						slot="StackItemContent"
						justify-content="center"
						flex-direction="column"
						align-items="center"
						sm-flex-direction="row"
						sm-justify-content="left"
						sm-padding="16px 0px 16px 0px"
					/>
					<Image
						width="70px"
						height="70px"
						srcSet="https://static.tildacdn.com/tild6364-3262-4435-a537-623939326331/cultur.svg"
						lg-text-align="center"
						sm-width="50px"
						sm-height="50px"
						sm-padding="0px 25px 0px 0px"
					/>
					<Text
						font="normal 400 22px/1.5 --fontFamily-googleSourceSansPro"
						color="#2a2a2a"
						lg-text-align="center"
						nout-text-align="center"
						sm-font="normal 400 18px/1.5 --fontFamily-googleOpenSans"
					>
						Культурная виза
					</Text>
				</StackItem>
				<StackItem
					width="20%"
					lg-width="20%"
					sm-width="100%"
					sm-margin="0px"
					sm-padding="0px 16px 0px 16px"
				>
					<Override
						slot="StackItemContent"
						justify-content="center"
						flex-direction="column"
						align-items="center"
						sm-flex-direction="row"
						sm-justify-content="left"
						sm-padding="16px 0px 16px 0px"
					/>
					<Image
						width="70px"
						height="70px"
						srcSet="https://static.tildacdn.com/tild3265-6531-4063-a565-656433643033/science.svg"
						sm-width="50px"
						sm-height="50px"
						sm-padding="0px 25px 0px 0px"
					/>
					<Text font="normal 400 22px/1.5 --fontFamily-googleSourceSansPro" color="#2a2a2a" lg-text-align="center" sm-font="normal 400 18px/1.5 --fontFamily-googleOpenSans">
						Научная виза
					</Text>
				</StackItem>
				{"        "}
			</Stack>
		</Section>
		<Section background="#f7f7f7" sm-height="auto" moy-height="100%">
			<Override
				slot="SectionContent"
				sm-height="auto"
				width="100%"
				flex-direction="row"
				sm-justify-content="center"
				sm-align-items="center"
				sm-flex-direction="column"
			/>
			<Stack
				sm-width="95%"
				sm-height="100%"
				md-flex-direction="row-reverse"
				md-width="100%"
				md-height="100%"
				moy-width="100%"
				moy-height="100%"
				sm-justify-content="center"
				sm-flex-direction="row"
				px-flex-direction="row-reverse"
			>
				{"    "}
				<StackItem
					px-width="30%"
					sm-width="60%"
					sm-height="30%"
					moy-width="30%"
					moy-height="100%"
					width="30%"
				>
					<Override slot="StackItemContent" px-width="100%" px-height="100%" width="100%" />
					<Image
						width="30%"
						height="100%"
						src="https://uploads.quarkly.io/5f82bd438a25ab001e4e7636/images/VisaService%20(1).png?v=2020-10-11T10:56:17.020Z"
						px-width="100%"
						px-height="100%"
						sm-width="100%"
						sm-height="100%"
						sm-position="relative"
						sm-top="80px"
						px-position="relative"
						px-right="65%"
						sm-left="0px"
						right="0px"
						left="-65%"
						moy-width="100%"
						moy-height="100%"
					/>
				</StackItem>
				<StackItem
					width="70%"
					display="flex"
					moy-width="70%"
					sm-width="100%"
					sm-justify-content="center"
					sm-align-items="center"
					sm-padding="16px 0px 16px 10px"
					background="#fff"
					border-radius="15px"
					box-shadow="0 6px 10px 0 rgba(0, 0, 0, 0.05)"
					padding="16px 20px 16px 20px"
					margin="0px 0px 0px 0px"
					px-height="100%"
					moy-height="100%"
					md-height="95%"
					sm-height="70%"
					px-width="70%"
				>
					<Override
						slot="StackItemContent"
						moy-flex-direction="column"
						moy-padding="0px 30px 0px 30px"
						moy-margin="0px 0px 0px 0px"
						moy-border-radius="15px"
						sm-justify-content="center"
						sm-align-items="center"
						sm-padding="0px 10px 0px 10px"
						sm-flex-direction="column"
						sm-margin="0px 0px 0px 10px"
						flex-direction="column"
						padding="0px 0px 0px 30px"
					/>
					{"        "}
					<Text
						font="600 40px/45px --fontFamily-googleSourceSansPro"
						padding="35px 0px 0px 0px"
						sm-height="auto"
						sm-width="100%"
						width="80%"
						moy-width="100%"
						sm-font="600 30px/45px --fontFamily-googleSourceSansPro"
						moy-margin="16px 0px 10px 0px"
					>
						Как получить электронную визу?
					</Text>
					<Box width="30%" height="2px" min-height={0} background="#d4bd6a" />
					<Text
						color="#333333"
						font="300 20px/1.55 --fontFamily-googleSourceSansPro"
						lg-position="relative"
						lg-bottom={0}
						sm-width="100%"
						sm-font="200 16px --fontFamily-googleSourceSansPro"
						width="80%"
						padding="0px 0px 35px 0px"
						sm-height="auto"
					>
						Наш сервис сделан для туристов, которые хотят быстро и без ошибок оформить электронную визу в Россию.{" "}
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Оформление займет не больше 5 минут
						</Strong>
						, так как большинство данных, необходимых для оформления визы, будет взято из копии вашего документа и автоматически распознано с помощью нейросети.
						<br />
						<br />
						В случае заполнения с ПК, вы с легкостью сможете прикрепить Ваше фото и копию документа, отсканировав QR-код, при помощи Вашего мобильного устройства. Форма поддерживает более 100 языков, вы сможете заполнить все данные на родном Вам языке.
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section
			background="#f7f7f7 url(https://static.tildacdn.com/tild3532-6264-4463-a631-393261623939/mapWhite.png) 0% 0%/1200px no-repeat"
			justify-content="center"
			flex-direction="column"
			align-items="center"
			height="674px"
			padding="24px 0 40px 0"
			sm-height="100%"
			md-height="100%"
			px-background="#f7f7f7 url(https://static.tildacdn.com/tild3532-6264-4463-a631-393261623939/mapWhite.png) center center/1200px no-repeat"
		>
			<Stack
				margin="50px- 50px -16px"
				justify-content="center"
				lg-width="960px"
				lg-margin="50px- 50px"
				lg-padding="0px 0px 0px 0px"
				sm-width="100%"
				sm-height="100%"
				md-flex-direction="row"
			>
				{"    "}
				<StackItem
					width="25%"
					background="#fff url(https://static.tildacdn.com/tild6163-6231-4431-b064-383764366431/01.jpg) 0% 0% /auto no-repeat scroll padding-box"
					border-radius="15px"
					margin="0px 40px 0px 40px"
					padding="16px 16px 16px 16px"
					box-shadow="0 6px 10px 0 rgba(0, 0, 0, 0.05)"
					position="relative"
					z-index="50"
					sm-width="100%"
					sm-margin="50px 40px 0px 40px"
					sm-background="#fff url(https://static.tildacdn.com/tild6163-6231-4431-b064-383764366431/01.jpg) 0% 0% /auto no-repeat scroll padding-box"
					sm-height="100%"
					md-width="30%"
					md-height="100%"
					md-margin="0px 0px 0px 0px"
				>
					{"        "}
					<Text font="normal 300 20px/1.55 --fontFamily-googleSourceSansPro" margin="0px 0px 0px 0px" display="inline-block" color="#333333">
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							font="400 24px/1.55 --fontFamily-googleSourceSansPro"
						>
							Анкета
						</Strong>
						<br />
						Заполните короткую анкету на визу.
						<br />
						<br />
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							moy-color="#c1a050"
							moy-font="500 20px/31px &quot;Source Sans Pro&quot;, sans-serif"
							px-color="#c1a050"
						>
							Перейти →{" "}
						</Strong>
					</Text>
					{"    "}
				</StackItem>
				<StackItem
					width="25%"
					background="#fff url(https://static.tildacdn.com/tild3539-3536-4533-b637-656532396134/02.jpg) 0% 0% /auto no-repeat scroll padding-box"
					border-radius="15px"
					margin="0px 40px 0px 40px"
					padding="16px 16px 16px 16px"
					box-shadow="0 6px 10px 0 rgba(0, 0, 0, 0.05)"
					position="relative"
					z-index="50"
					sm-width="100%"
					sm-padding="10px 16px 16px 16px"
					sm-height="190px"
					sm-margin="10px 40px 0px 40px"
					sm-background="#fff url(https://static.tildacdn.com/tild3539-3536-4533-b637-656532396134/02.jpg) 0% 0% /auto no-repeat scroll padding-box"
					md-width="30%"
					md-height="100%"
				>
					{"        "}
					<Text font="normal 300 20px/1.55 --fontFamily-googleSourceSansPro" margin="0px 0px 0px 0px" display="inline-block" color="#333333">
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							font="400 24px/1.55 --fontFamily-googleSourceSansPro"
						>
							Проверка
						</Strong>
						<br />
						Вашу анкету проверит визовый специалист.
					</Text>
					{"    "}
				</StackItem>
				<StackItem
					width="25%"
					background="#fff url(https://static.tildacdn.com/tild3437-6234-4563-b231-656265353231/03.jpg) 0% 0% /auto no-repeat scroll padding-box"
					border-radius="15px"
					margin="0px 40px 0px 40px"
					padding="16px 16px 16px 16px"
					box-shadow="0 6px 10px 0 rgba(0, 0, 0, 0.05)"
					position="relative"
					z-index="50"
					sm-width="100%"
					sm-margin="10px 40px 0px 40px"
					sm-height="190px"
					sm-background="#fff url(https://static.tildacdn.com/tild3437-6234-4563-b231-656265353231/03.jpg) 0% 0% /auto no-repeat scroll padding-box"
					md-width="30%"
					md-height="100%"
				>
					{"        "}
					<Text font="normal 300 20px/1.55 --fontFamily-googleSourceSansPro" margin="0px 0px 0px 0px" display="inline-block" color="#333333">
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							font="400 24px/1.55 --fontFamily-googleSourceSansPro"
						>
							Решение
						</Strong>
						<br />
						Ожидаем 5 дней ответа от Министерства Иностранных Дел России.
					</Text>
					{"    "}
				</StackItem>
				<StackItem
					width="25%"
					background="#fff url(https://static.tildacdn.com/tild3430-3138-4831-b465-373233653064/04.jpg) 0% 0% /auto no-repeat scroll padding-box"
					border-radius="15px"
					margin="70px 40px 0 40px"
					padding="16px 16px 30px 16px"
					box-shadow="0 6px 10px 0 rgba(0, 0, 0, 0.05)"
					position="relative"
					z-index="50"
					height="180px"
					lg-height="190.4px"
					sm-width="100%"
					sm-margin="10px 40px 0 40px"
					sm-height="190px"
					sm-background="#fff url(https://static.tildacdn.com/tild3430-3138-4831-b465-373233653064/04.jpg) 0% 0% /auto no-repeat scroll padding-box"
					md-width="30%"
					md-height="100%"
				>
					{"        "}
					<Text font="normal 300 20px/1.55 --fontFamily-googleSourceSansPro" margin="0px 0px 0px 0px" display="inline-block" color="#333333">
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							font="400 24px/1.55 --fontFamily-googleSourceSansPro"
						>
							Ваша виза
						</Strong>
						<br />
						Получите визу на email, сроком на 30 дней и 8 дней пребывания в России.
						<br />
					</Text>
					{"    "}
				</StackItem>
				<StackItem
					width="25%"
					background="#fff url(https://static.tildacdn.com/tild3331-6262-4336-b932-386665373830/05.jpg) 0% 0% /auto no-repeat scroll padding-box"
					border-radius="15px"
					margin="70px 40px 0px 40px"
					padding="16px 16px 30px 16px"
					box-shadow="0 6px 10px 0 rgba(0, 0, 0, 0.05)"
					position="relative"
					z-index="50"
					lg-height="190.4px"
					sm-width="100%"
					sm-margin="10px 40px 0px 40px"
					sm-height="190px"
					sm-background="#fff url(https://static.tildacdn.com/tild3331-6262-4336-b932-386665373830/05.jpg) 0% 0% /auto no-repeat scroll padding-box"
					md-width="30%"
					md-height="100%"
				>
					{"        "}
					<Text font="normal 300 20px/1.55 --fontFamily-googleSourceSansPro" margin="0px 0px 0px 0px" display="inline-block" color="#333333">
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							font="400 24px/1.55 --fontFamily-googleSourceSansPro"
						>
							Страховка
						</Strong>
						<br />
						Оформите медицинскую страховку для въезда в Россию.
					</Text>
					{"    "}
				</StackItem>
				<StackItem
					width="25%"
					background="#fff url(https://static.tildacdn.com/tild6235-6332-4231-b632-343134386565/06.jpg) 0% 0% /auto no-repeat scroll padding-box"
					border-radius="15px"
					margin="70px 40px 0px 40px"
					padding="16px 16px 30px 16px"
					box-shadow="0 6px 10px 0 rgba(0, 0, 0, 0.05)"
					position="relative"
					z-index="50"
					lg-width="25%"
					lg-height="190.4px"
					sm-width="100%"
					sm-margin="10px 40px 0px 40px"
					sm-height="100%"
					sm-background="#fff url(https://static.tildacdn.com/tild6235-6332-4231-b632-343134386565/06.jpg) 0% 0% /auto no-repeat scroll padding-box"
					md-width="30%"
					md-height="100%"
				>
					{"        "}
					<Text font="normal 300 20px/1.55 --fontFamily-googleSourceSansPro" margin="0px 0px 0px 0px" display="inline-block" color="#333333">
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							font="400 24px/1.55 --fontFamily-googleSourceSansPro"
						>
							Добро пожаловать!
							<br />
						</Strong>
						Можете заезжать в Россию, через указанны  пограничный пункт в анкете.
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section>
			<Override slot="SectionContent" width="100%" max-width="none" height="-" />
			<Image
				width="100%"
				height="none"
				src="https://static.tildacdn.com/tild3838-3465-4637-b364-313035393463/_14.svg"
				top="-70px"
				bottom={0}
				z-index="0"
				position="relative"
				sm-top="-60px"
			/>
			<Text
				font="600 40px --fontFamily-googleSourceSansPro"
				text-align="center"
				color="#333333"
				sm-font="600 30px --fontFamily-googleSourceSansPro"
				moy-margin="16px 0px 60px 0px"
				margin="16px 0px 60px 0px"
			>
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					moy-margin="0px 0px 0px 0px"
					moy-padding="0px 0px 0px 0px"
					font="700 40px --fontFamily-googleSourceSansPro"
				>
					Преимущества нашего сервиса
				</Strong>
			</Text>
			<Stack md-flex-direction="column-reverse" width="100%">
				{"    "}
				<StackItem width="50%" display="flex" flex-direction="column" md-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						sm-justify-content="center"
						sm-align-items="center"
						sm-width="100%"
					/>
					{"        "}
					<Box display="flex" sm-width="85%" sm-justify-content="left" sm-align-items="center">
						<Image
							width="50px"
							height="50px"
							src="https://static.tildacdn.com/tild3730-6562-4533-a439-326133333239/1.svg"
							margin="15px 15px 0px 150px"
							sm-margin="15px 15px 0px 10px"
						/>
						<Text color="#333333" font="300 20px --fontFamily-googleSourceSansPro" sm-font="300 16px --fontFamily-googleSourceSansPro">
							Поддержка 24/7/365 на английском языке
							<br />
							в чате WhatsApp, Telegram, Viber
						</Text>
					</Box>
					<Box display="flex" sm-width="85%">
						<Image
							width="50px"
							height="50px"
							src="https://static.tildacdn.com/tild3362-6363-4537-b962-656235306432/2.svg"
							margin="15px 15px 0px 150px"
							sm-margin="15px 15px 0px 10px"
						/>
						<Text color="#333333" font="300 20px --fontFamily-googleSourceSansPro" sm-font="300 16px --fontFamily-googleSourceSansPro">
							Быстрая и понятная авторизация на сайте
						</Text>
					</Box>
					<Box display="flex" sm-width="85%">
						<Image
							width="50px"
							height="50px"
							src="https://static.tildacdn.com/tild6338-6231-4561-b536-343235653864/4.svg"
							margin="15px 15px 0px 150px"
							sm-margin="15px 15px 0px 10px"
						/>
						<Text color="#333333" font="300 20px --fontFamily-googleSourceSansPro" sm-font="300 16px --fontFamily-googleSourceSansPro">
							Безопасное хранение персональных данных{" "}
							<br />
							и последующее удаление после получения визы
						</Text>
					</Box>
					<Box display="flex" sm-width="85%">
						<Image
							width="50px"
							height="50px"
							src="https://static.tildacdn.com/tild3534-6333-4362-b738-643531633837/3.svg"
							margin="15px 15px 0px 150px"
							sm-margin="15px 15px 0px 10px"
						/>
						<Text color="#333333" font="300 20px --fontFamily-googleSourceSansPro" sm-font="300 16px --fontFamily-googleSourceSansPro">
							Проверка анкеты специалистом перед отправкой
						</Text>
					</Box>
					<Box display="flex" sm-width="85%">
						<Image
							width="50px"
							height="50px"
							src="https://static.tildacdn.com/tild3037-6136-4436-b932-396231323335/5.svg"
							margin="15px 15px 0px 150px"
							sm-margin="15px 15px 0px 10px"
						/>
						<Text color="#333333" font="300 20px --fontFamily-googleSourceSansPro" sm-font="300 16px --fontFamily-googleSourceSansPro">
							Возможность вернуться к заполнению{" "}
							<br />
							данных в любой момент
						</Text>
					</Box>
					<Box display="flex" sm-width="85%">
						<Image
							width="50px"
							height="50px"
							src="https://static.tildacdn.com/tild3234-6630-4666-b837-373336643839/6.svg"
							margin="15px 15px 0px 150px"
							sm-margin="15px 15px 0px 10px"
						/>
						<Text color="#333333" font="300 20px --fontFamily-googleSourceSansPro" sm-font="300 16px --fontFamily-googleSourceSansPro">
							Оформление онлайн страховки
							<br />
							{" "}для въезда в Россию
						</Text>
					</Box>
					<Box display="flex" sm-width="85%">
						<Image
							width="50px"
							height="50px"
							src="https://static.tildacdn.com/tild6330-3236-4637-a662-643431393763/7.svg"
							margin="15px 15px 0px 150px"
							sm-margin="15px 15px 0px 10px"
						/>
						<Text color="#333333" font="300 20px --fontFamily-googleSourceSansPro" sm-font="300 16px --fontFamily-googleSourceSansPro">
							Надежная платежная система{" "}
							<br />
							со множеством способов оплаты
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem
					width="50%"
					display="flex"
					flex-direction="column"
					md-justify-content="center"
					md-align-items="center"
					sm-width="100%"
					sm-align-items="flex-end"
					sm-justify-content="right"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						background="rgba(0, 0, 0, 0) url(https://static.tildacdn.com/tild3966-6130-4530-a234-363537333861/1.jpg) 0% 0% /auto repeat fixed padding-box"
						border-radius="15px"
						box-shadow="0 6px 10px 0 rgba(0, 0, 0, 0.05)"
						sm-position="static"
						sm-left="160px"
						moy-position="relative"
						moy-left="35px"
						sm-width="100%"
						sm-justify-content="right"
						sm-align-items="flex-end"
					/>
					<Image
						width="400px"
						height="400px"
						srcSet="https://static.tildacdn.com/tild3862-3265-4534-a230-623239303232/phone.png"
						position="relative"
						top="190px"
						lg-top="340px"
						nout-top={0}
						md-top="0px"
						sm-position="relative"
						sm-left="auto"
						sm-height="300px"
						sm-width="100%"
						nout-bottom="0px"
						nout2-top="145px"
						nout2-right="90px"
						sm-right="0px"
						moy-right="5550px"
						nout2-left="0px"
						right="80px"
					/>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack margin="50px -16px -16px -16px" md-flex-direction="column" width="100%">
				{"    "}
				<StackItem
					width="50%"
					display="flex"
					flex-direction="column"
					background="rgba(0, 0, 0, 0) url(https://static.tildacdn.com/tild3966-6130-4530-a234-363537333861/1.jpg) 0% 0% /auto repeat fixed padding-box"
					border-radius="15px"
					margin="100 0px 0px 0px"
					box-shadow="0 6px 10px 0 rgba(0, 0, 0, 0.05)"
					sm-width="100%"
					sm-align-items="flex-end"
					sm-justify-content="right"
				>
					<Override slot="StackItemContent" flex-direction="column" />
					<Image
						width="400px"
						height="400px"
						srcSet="https://static.tildacdn.com/tild3136-3366-4634-b330-656439356634/2nd.png "
						position="relative"
						top="75px"
						right="0px"
						left="350px"
						lg-left="200px"
						sm-height="300px"
						sm-left={0}
						sm-top="25px"
						nout2-width="500px"
						nout2-height="500px"
						nout2-left="270px"
						nout2-bottom="-125px"
						sm-width="100%"
					/>
					{"            "}
				</StackItem>
				<StackItem width="50%" display="flex" flex-direction="column" md-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						background="rgba(0, 0, 0, 0)"
						border-radius="15px"
						sm-width="100%"
						sm-justify-content="center"
						sm-align-items="center"
					/>
					<Box display="flex" sm-width="85%">
						<Image
							width="50px"
							height="50px"
							src="https://static.tildacdn.com/tild3834-3261-4131-b964-393439663431/8.svg"
							margin="15px 15px 0px 100px"
							sm-margin="15px 15px 0px 10px"
						/>
						<Text color="#333333" font="300 20px --fontFamily-googleSourceSansPro" sm-font="300 16px --fontFamily-googleSourceSansPro">
							Простая анкета на визу (без лишних полей)
						</Text>
					</Box>
					<Box display="flex" sm-width="85%">
						<Image
							width="50px"
							height="50px"
							src="https://static.tildacdn.com/tild3933-3765-4461-b237-376438626233/9.svg"
							margin="15px 15px 0px 100px"
							sm-margin="15px 15px 0px 10px"
						/>
						<Text color="#333333" font="300 20px --fontFamily-googleSourceSansPro" sm-font="300 16px --fontFamily-googleSourceSansPro">
							100% без ошибок – двухуровневая
							<br />
							проверка данных
						</Text>
					</Box>
					<Box display="flex" sm-width="85%">
						<Image
							width="50px"
							height="50px"
							src="https://static.tildacdn.com/tild6538-6132-4034-b031-353139333238/10.svg"
							margin="15px 15px 0px 100px"
							sm-margin="15px 15px 0px 10px"
						/>
						<Text color="#333333" font="300 20px --fontFamily-googleSourceSansPro" sm-font="300 16px --fontFamily-googleSourceSansPro">
							Загрузка фото и копии документа на визу с{" "}
							<br />
							помощью мобильного устройства
						</Text>
					</Box>
					<Box display="flex" sm-width="85%">
						<Image
							width="50px"
							height="50px"
							src="https://static.tildacdn.com/tild3630-6362-4466-b030-633565313430/11.svg"
							margin="15px 15px 0px 100px"
							sm-margin="15px 15px 0px 10px"
						/>
						<Text color="#333333" font="300 20px --fontFamily-googleSourceSansPro" sm-font="300 16px --fontFamily-googleSourceSansPro">
							Автоматическое распознавание данных паспорта{" "}
							<br />
							– нейросетями, для упрощения ввода данных
						</Text>
					</Box>
					<Box display="flex" sm-width="85%">
						<Image
							width="50px"
							height="50px"
							src="https://static.tildacdn.com/tild3936-6539-4438-a464-313733396434/12.svg"
							margin="15px 15px 0px 100px"
							sm-margin="15px 15px 0px 10px"
						/>
						<Text color="#333333" font="300 20px --fontFamily-googleSourceSansPro" sm-font="300 16px --fontFamily-googleSourceSansPro">
							Возврат консульского сбора в случае отказа{" "}
							<br />
							в визе в Россию, при условии страхования
						</Text>
					</Box>
					<Box display="flex" sm-width="85%">
						<Image
							width="50px"
							height="50px"
							src="https://static.tildacdn.com/tild3163-3332-4836-a434-656561666536/13.svg"
							margin="15px 15px 0px 100px"
							sm-margin="15px 15px 0px 10px"
						/>
						<Text color="#333333" font="300 20px --fontFamily-googleSourceSansPro" sm-font="300 16px --fontFamily-googleSourceSansPro">
							Мультиязычная форма с поддержкой{" "}
							<br />
							более 100 языков
						</Text>
					</Box>
					<Box display="flex" sm-width="85%">
						<Image
							width="50px"
							height="50px"
							src="https://static.tildacdn.com/tild6163-6331-4638-b238-643566303134/14.svg"
							margin="15px 15px 0px 100px"
							sm-margin="15px 15px 0px 10px"
						/>
						<Text color="#333333" sm-font="300 16px --fontFamily-googleSourceSansPro" nout2-font="300 20px --fontFamily-googleSourceSansPro">
							Скидки, промокоды и прочие интересные акции
						</Text>
					</Box>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack margin="50px -16px -16px -16px" md-flex-direction="column-reverse" width="100%">
				{"    "}
				<StackItem width="50%" display="flex" flex-direction="column" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" sm-justify-content="center" sm-align-items="center" />
					{"        "}
					<Text
						color="#333333"
						font="600 40px --fontFamily-googleSourceSansPro"
						text-align="center"
						sm-text-align="center"
						sm-width="100%"
						moy-margin="16px 0px 60px 0px"
						margin="16px 0px 60px 0px"
					>
						Система защиты данных
					</Text>
					<Box display="flex" sm-width="85%">
						<Image
							width="55px"
							height="55px"
							src="https://static.tildacdn.com/tild3361-6639-4263-b164-646338386363/tick_2.svg"
							margin="15px 15px 0px 150px"
							sm-margin="15px 15px 0px 10px"
						/>
						<Text color="#333333" font="300 20px --fontFamily-googleSourceSansPro" sm-font="300 16px --fontFamily-googleSourceSansPro">
							Платежная система защищена в соответствии с международным стандартом безопасности при
							<br />
							работе с банковскими картами PSI DSS 3.1
						</Text>
					</Box>
					<Box display="flex" sm-width="85%">
						<Image
							width="45px"
							height="45px"
							src="https://static.tildacdn.com/tild3361-6639-4263-b164-646338386363/tick_2.svg"
							margin="15px 15px 0px 150px"
							sm-margin="15px 15px 0px 10px"
						/>
						<Text color="#333333" font="300 20px --fontFamily-googleSourceSansPro" sm-font="300 16px --fontFamily-googleSourceSansPro">
							На время оформления Вашей визы мы надежно
							<br />
							храним в зашифрованном виде Вашу информацию
							<br />
							с помощью программного обеспечения Secure{" "}
							<br />
							Sockets Layer (SSL) на нашем сервере, а после получения визы все удаляем
						</Text>
					</Box>
					<Box display="flex" sm-width="85%">
						<Image
							width="30px"
							height="30px"
							src="https://static.tildacdn.com/tild3361-6639-4263-b164-646338386363/tick_2.svg"
							margin="15px 15px 0px 150px"
							sm-margin="15px 15px 0px 10px"
						/>
						<Text color="#333333" font="300 20px --fontFamily-googleSourceSansPro" sm-font="300 16px --fontFamily-googleSourceSansPro">
							Пока вы заполняете анкету, все Ваши
							<br />
							данные хранятся у Вас в браузере
						</Text>
					</Box>
					<Box width="590px" sm-width="100%">
						<Image
							width="55px"
							height="55px"
							src="https://static.tildacdn.com/tild3361-6639-4263-b164-646338386363/tick_2.svg"
							margin="15px 15px 0px 150px"
							display="none"
						/>
						<Box display="flex" sm-justify-content="center" sm-width="100%" sm-max-width="200px">
							<Image
								width="70px"
								height="70px"
								src="https://static.tildacdn.com/tild3333-3039-4265-b636-353563623661/PSI_DSS.jpg"
								margin="15px 15px 0px 150px"
								sm-margin="15px 0px 0px 0px"
								px-width="120px"
								px-height="68px"
							/>
							<Image
								width="70px"
								height="70px"
								src="https://static.tildacdn.com/tild3964-3562-4661-a235-323937613461/ssl.jpg"
								margin="15px 15px 0px 0px"
								px-width="120px"
								px-height="68px"
							/>
						</Box>
					</Box>
					{"    "}
				</StackItem>
				<StackItem
					width="50%"
					display="flex"
					flex-direction="column"
					md-justify-content="center"
					md-align-items="center"
					sm-width="100%"
					sm-justify-content="right"
					sm-align-items="flex-end"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						background="rgba(0, 0, 0, 0) url(https://static.tildacdn.com/tild3966-6130-4530-a234-363537333861/1.jpg) 0% 0% /auto repeat fixed padding-box"
						border-radius="15px"
						box-shadow="0 6px 10px 0 rgba(0, 0, 0, 0.05)"
						sm-position="static"
						sm-left="140px"
						moy-position="relative"
						moy-left="35px"
						sm-width="100%"
					/>
					<Image
						width="400px"
						height="400px"
						srcSet="https://static.tildacdn.com/tild3633-6666-4730-b932-626434346637/Vector_Smart_Object.png"
						position="relative"
						lg-top="340px"
						nout-top="190px"
						md-top="0px"
						sm-position="relative"
						sm-left="auto"
						sm-height="300px"
						sm-right={0}
						sm-width="100%"
						left="-100px"
					/>
					{"            "}
				</StackItem>
				<Image
					width="100%"
					height="none"
					src="https://static.tildacdn.com/tild3838-3465-4637-b364-313035393463/_14.svg"
					top="50px"
					bottom={0}
					z-index="0"
					position="relative"
					transform="rotate(180deg)"
					sm-display="none"
				/>
				{"    "}
			</Stack>
		</Section>
		<Section background="#f7f7f7" padding="24px 0 100px 0">
			<Text text-align="center" font="600 40px --fontFamily-googleSourceSansPro" color="#333333" moy-margin="16px 0px 10px 0px">
				Отзывы клиентов
			</Text>
			<Box
				width="30%"
				height="2px"
				min-height={0}
				background="#d4bd6a"
				px-margin="0px 0px 10px 545px"
				px-width="15%"
			/>
			<Text font="300 20px --fontFamily-googleSourceSansPro" text-align="center" color="#333333" sm-font="300 16px --fontFamily-googleSourceSansPro">
				Больше отзывов о нашем сервисе на{" "}
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					font="700 20px --fontFamily-googleSourceSansPro"
				>
					<Link href="#" px-color="#333333">
						Google
					</Link>
				</Strong>
			</Text>
			<Stack margin="50px -16px -16px -16px" padding="0px 0px 0px 0" md-justify-content="center">
				{"    "}
				<StackItem
					width="30%"
					background="#fff"
					border-radius="15px"
					box-shadow="0 6px 10px 0 rgba(0, 0, 0, 0.05)"
					margin="0px 0px 0px 30px"
					flex-direction="column"
					display="flex"
					md-width="45%"
					md-margin="0px 0px 25px 30px"
					sm-width="90%"
					sm-margin="0px 0px 25px 0px"
				>
					<Override slot="StackItemContent" justify-content="center" flex-direction="column" />
					{"        "}
					<Box display="flex">
						<Image
							width="75px"
							height="75px"
							src="https://static.tildacdn.com/tild3731-3865-4936-b261-363463333432/testimonial-01-150x1.jpg"
							margin="15px 15px 0px 0"
							border-radius="100px"
						/>
						<StackItem>
							<Override slot="StackItemContent" display="block" />
							<Text font="400 24px --fontFamily-googleSourceSansPro" color="#333333">
								Имя Фамилия
							</Text>
							<Text font="16px --fontFamily-googleSourceSansPro" color="#333333">
								10/07/20
								<br />
							</Text>
						</StackItem>
					</Box>
					<Box display="flex">
						<StackItem>
							<Override slot="StackItemContent" display="block" />
							<Text font="300 18px --fontFamily-googleSourceSansPro" color="#333333">
								Наш сервис сделан для туристов которые хотят быстро и без ошибок оформить электронную визу в Россию. Оформление займет не больше 5 минут.
							</Text>
							<Stack>
								{"    "}
								<StackItem
									width="15%"
									display="flex"
									px-width="10%"
									px-height="100%"
									px-padding="16px 0px 16px 10px"
									px-margin="0px 0px 0px 5px"
								>
									{"        "}
									<Image width="64px" height="64px" src="https://static.tildacdn.com/tild6433-6532-4638-a636-336639313036/star.svg" />
									{"    "}
								</StackItem>
								<StackItem
									width="15%"
									display="flex"
									px-width="10%"
									px-height="100%"
									px-padding="16px 0px 16px 10px"
								>
									{"        "}
									<Image width="64px" height="64px" src="https://static.tildacdn.com/tild6433-6532-4638-a636-336639313036/star.svg" />
									{"    "}
								</StackItem>
								<StackItem
									width="15%"
									display="flex"
									px-width="10%"
									px-height="100%"
									px-padding="16px 0px 16px 10px"
								>
									{"        "}
									<Image width="64px" height="64px" src="https://static.tildacdn.com/tild6433-6532-4638-a636-336639313036/star.svg" />
									{"    "}
								</StackItem>
								<StackItem
									width="15%"
									display="flex"
									px-width="10%"
									px-height="100%"
									px-padding="16px 0px 16px 10px"
								>
									{"        "}
									<Image width="64px" height="64px" src="https://static.tildacdn.com/tild6433-6532-4638-a636-336639313036/star.svg" />
									{"    "}
								</StackItem>
								<StackItem
									width="15%"
									display="flex"
									px-width="10%"
									px-height="100%"
									px-padding="16px 0px 16px 10px"
								>
									{"        "}
									<Image width="64px" height="64px" src="https://static.tildacdn.com/tild6433-6532-4638-a636-336639313036/star.svg" />
									{"    "}
								</StackItem>
								{"    "}
							</Stack>
						</StackItem>
					</Box>
					{"    "}
				</StackItem>
				<StackItem
					width="30%"
					background="#fff"
					border-radius="15px"
					box-shadow="0 6px 10px 0 rgba(0, 0, 0, 0.05)"
					margin="0px 0px 0px 30px"
					flex-direction="column"
					display="flex"
					md-width="45%"
					md-margin="0px 0px 25px 30px"
					sm-width="90%"
					sm-margin="0px 0px 25px 0px"
				>
					<Override slot="StackItemContent" justify-content="center" flex-direction="column" />
					{"        "}
					<Box display="flex">
						<Image
							width="75px"
							height="75px"
							src="https://static.tildacdn.com/tild3731-3865-4936-b261-363463333432/testimonial-01-150x1.jpg"
							margin="15px 15px 0px 0"
							border-radius="100px"
						/>
						<StackItem>
							<Override slot="StackItemContent" display="block" />
							<Text font="400 24px --fontFamily-googleSourceSansPro" color="#333333">
								Имя Фамилия
							</Text>
							<Text font="16px --fontFamily-googleSourceSansPro" color="#333333">
								10/07/20
								<br />
							</Text>
						</StackItem>
					</Box>
					<Box display="flex">
						<StackItem>
							<Override slot="StackItemContent" display="block" />
							<Text font="300 18px --fontFamily-googleSourceSansPro" color="#333333">
								Наш сервис сделан для туристов которые хотят быстро и без ошибок оформить электронную визу в Россию. Оформление займет не больше 5 минут.
							</Text>
							<Stack>
								{"    "}
								<StackItem
									width="15%"
									display="flex"
									px-width="10%"
									px-height="100%"
									px-padding="16px 0px 16px 10px"
									px-margin="0px 0px 0px 5px"
								>
									{"        "}
									<Image width="64px" height="64px" src="https://static.tildacdn.com/tild6433-6532-4638-a636-336639313036/star.svg" />
									{"    "}
								</StackItem>
								<StackItem
									width="15%"
									display="flex"
									px-width="10%"
									px-height="100%"
									px-padding="16px 0px 16px 10px"
								>
									{"        "}
									<Image width="64px" height="64px" src="https://static.tildacdn.com/tild6433-6532-4638-a636-336639313036/star.svg" />
									{"    "}
								</StackItem>
								<StackItem
									width="15%"
									display="flex"
									px-width="10%"
									px-height="100%"
									px-padding="16px 0px 16px 10px"
								>
									{"        "}
									<Image width="64px" height="64px" src="https://static.tildacdn.com/tild6433-6532-4638-a636-336639313036/star.svg" />
									{"    "}
								</StackItem>
								<StackItem
									width="15%"
									display="flex"
									px-width="10%"
									px-height="100%"
									px-padding="16px 0px 16px 10px"
								>
									{"        "}
									<Image width="64px" height="64px" src="https://static.tildacdn.com/tild6433-6532-4638-a636-336639313036/star.svg" />
									{"    "}
								</StackItem>
								<StackItem
									width="15%"
									display="flex"
									px-width="10%"
									px-height="100%"
									px-padding="16px 0px 16px 10px"
								>
									{"        "}
									<Image width="64px" height="64px" src="https://static.tildacdn.com/tild6433-6532-4638-a636-336639313036/star.svg" />
									{"    "}
								</StackItem>
								{"    "}
							</Stack>
						</StackItem>
					</Box>
					{"    "}
				</StackItem>
				<StackItem
					width="30%"
					background="#fff"
					border-radius="15px"
					box-shadow="0 6px 10px 0 rgba(0, 0, 0, 0.05)"
					margin="0px 0px 0px 30px"
					flex-direction="column"
					display="flex"
					md-width="45%"
					sm-width="90%"
					sm-margin="0px 0px 0px 0px"
				>
					<Override slot="StackItemContent" justify-content="center" flex-direction="column" />
					{"        "}
					<Box display="flex">
						<Image
							width="75px"
							height="75px"
							src="https://static.tildacdn.com/tild3731-3865-4936-b261-363463333432/testimonial-01-150x1.jpg"
							margin="15px 15px 0px 0"
							border-radius="100px"
						/>
						<StackItem>
							<Override slot="StackItemContent" display="block" />
							<Text font="400 24px --fontFamily-googleSourceSansPro" color="#333333">
								Имя Фамилия
							</Text>
							<Text font="16px --fontFamily-googleSourceSansPro" color="#333333">
								10/07/20
								<br />
							</Text>
						</StackItem>
					</Box>
					<Box display="flex">
						<StackItem>
							<Override slot="StackItemContent" display="block" />
							<Text font="300 18px --fontFamily-googleSourceSansPro" color="#333333">
								Наш сервис сделан для туристов которые хотят быстро и без ошибок оформить электронную визу в Россию. Оформление займет не больше 5 минут.
							</Text>
						</StackItem>
					</Box>
					<Stack>
						{"    "}
						<StackItem
							width="15%"
							display="flex"
							px-width="10%"
							px-height="100%"
							px-padding="16px 0px 16px 10px"
							px-margin="0px 0px 0px 5px"
						>
							{"        "}
							<Image width="64px" height="64px" src="https://static.tildacdn.com/tild6433-6532-4638-a636-336639313036/star.svg" />
							{"    "}
						</StackItem>
						<StackItem
							width="15%"
							display="flex"
							px-width="10%"
							px-height="100%"
							px-padding="16px 0px 16px 10px"
						>
							{"        "}
							<Image width="64px" height="64px" src="https://static.tildacdn.com/tild6433-6532-4638-a636-336639313036/star.svg" />
							{"    "}
						</StackItem>
						<StackItem
							width="15%"
							display="flex"
							px-width="10%"
							px-height="100%"
							px-padding="16px 0px 16px 10px"
						>
							{"        "}
							<Image width="64px" height="64px" src="https://static.tildacdn.com/tild6433-6532-4638-a636-336639313036/star.svg" />
							{"    "}
						</StackItem>
						<StackItem
							width="15%"
							display="flex"
							px-width="10%"
							px-height="100%"
							px-padding="16px 0px 16px 10px"
						>
							{"        "}
							<Image width="64px" height="64px" src="https://static.tildacdn.com/tild6433-6532-4638-a636-336639313036/star.svg" />
							{"    "}
						</StackItem>
						<StackItem
							width="15%"
							display="flex"
							px-width="10%"
							px-height="100%"
							px-padding="16px 0px 16px 10px"
						>
							{"        "}
							<Image width="64px" height="64px" src="https://static.tildacdn.com/tild6433-6532-4638-a636-336639313036/star.svg" />
							{"    "}
						</StackItem>
						{"    "}
					</Stack>
					{"    "}
				</StackItem>
				<StackItem
					width="30%"
					background="#fff"
					border-radius="15px"
					box-shadow="0 6px 10px 0 rgba(0, 0, 0, 0.05)"
					margin="0px 0px 0px 30px"
					flex-direction="column"
					display="none"
					md-width="45%"
				>
					<Override slot="StackItemContent" justify-content="center" flex-direction="column" />
					{"        "}
					<Box display="flex">
						<Image
							width="75px"
							height="75px"
							src="https://static.tildacdn.com/tild3731-3865-4936-b261-363463333432/testimonial-01-150x1.jpg"
							margin="15px 15px 0px 0"
							border-radius="100px"
						/>
						<StackItem>
							<Override slot="StackItemContent" display="block" />
							<Text font="400 24px --fontFamily-googleSourceSansPro" color="#333333">
								Имя Фамилия
							</Text>
							<Text font="16px --fontFamily-googleSourceSansPro" color="#333333">
								10/07/20
								<br />
							</Text>
						</StackItem>
					</Box>
					<Box display="flex">
						<StackItem>
							<Override slot="StackItemContent" display="block" />
							<Text font="300 18px --fontFamily-googleSourceSansPro" color="#333333">
								Наш сервис сделан для туристов которые хотят быстро и без ошибок оформить электронную визу в Россию. Оформление займет не больше 5 минут.
							</Text>
							<Stack>
								{"    "}
								<StackItem width="15%" display="flex">
									{"        "}
									<Image width="64px" height="64px" src="https://static.tildacdn.com/tild6433-6532-4638-a636-336639313036/star.svg" />
									{"    "}
								</StackItem>
								<StackItem width="15%" display="flex">
									{"        "}
									<Image width="64px" height="64px" src="https://static.tildacdn.com/tild6433-6532-4638-a636-336639313036/star.svg" />
									{"    "}
								</StackItem>
								<StackItem width="15%" display="flex">
									{"        "}
									<Image width="64px" height="64px" src="https://static.tildacdn.com/tild6433-6532-4638-a636-336639313036/star.svg" />
									{"    "}
								</StackItem>
								<StackItem width="15%" display="flex">
									{"        "}
									<Image width="64px" height="64px" src="https://static.tildacdn.com/tild6433-6532-4638-a636-336639313036/star.svg" />
									{"    "}
								</StackItem>
								<StackItem width="15%" display="flex">
									{"        "}
									<Image width="64px" height="64px" src="https://static.tildacdn.com/tild6433-6532-4638-a636-336639313036/star.svg" />
									{"    "}
								</StackItem>
								{"    "}
							</Stack>
						</StackItem>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section>
			<Image
				width="100%"
				height="none"
				src="https://static.tildacdn.com/tild3838-3465-4637-b364-313035393463/_14.svg"
				top="-60px"
				bottom={0}
				z-index="0"
				position="relative"
				sm-top="-35px"
			/>
		</Section>
		<Section>
			<Override slot="SectionContent" px-justify-content="center" />
			<Text
				font="600 40px --fontFamily-googleSourceSansPro"
				text-align="center"
				color="#333333"
				moy-margin="16px 0px 10px 0px"
				margin="16px 0px 60px 0px"
				px-margin="16px 0px 10px 0px"
			>
				Мы принимаем
			</Text>
			<Box
				width="30%"
				height="2px"
				min-height={0}
				background="#d4bd6a"
				px-margin="0px 0px 30px 545px"
				px-width="15%"
			/>
			<Components.EmbedHTML />
		</Section>
		<Section>
			<Image
				width="100%"
				height="none"
				src="https://static.tildacdn.com/tild3838-3465-4637-b364-313035393463/_14.svg"
				top="50px"
				bottom={0}
				z-index="99"
				position="relative"
				transform="rotate(180deg)"
				sm-top="35px"
			/>
		</Section>
		<Section
			color="--light"
			padding="100px 0"
			sm-padding="40px 0"
			position="relative"
			background="#f7f7f7"
		>
			<Box
				max-width="360px"
				padding="56px 48px"
				margin="0 0 0 auto"
				md-max-width="100%"
				background="--color-primary"
				display="none"
			>
				<Text as="h3" font="--headline3" margin="0 0 20px 0">
					Leave us message
				</Text>
				<Formspree>
					<Stack gap="16px">
						<StackItem width="100%">
							<Override slot="StackItemContent" flex-direction="column" />
							<Text font="--base" margin="0 0 4px 0">
								Name
							</Text>
							<Input width="100%" name="name" />
						</StackItem>
						<StackItem width="100%">
							<Override slot="StackItemContent" flex-direction="column" />
							<Text font="--base" margin="0 0 4px 0">
								Email
							</Text>
							<Input width="100%" type="email" name="email" />
						</StackItem>
						<StackItem width="100%">
							<Override slot="StackItemContent" flex-direction="column" />
							<Text font="--base" margin="0 0 4px 0">
								Message
							</Text>
							<Input as="textarea" rows="4" width="100%" name="message" />
						</StackItem>
						<StackItem width="100%">
							<Button background="--color-dark">
								Send
							</Button>
						</StackItem>
					</Stack>
				</Formspree>
			</Box>
			<Stack>
				<StackItem width="50%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" sm-justify-content="center" sm-align-items="center" />
					<Box
						padding="0 0 0 64px"
						sm-padding="64px 0 0 0"
						margin="32px 0 0 0"
						max-width="360px"
						position="relative"
					>
						<Text
							as="p"
							margin="6px 0"
							font="normal 600 40px/1.2 --fontFamily-googleSourceSansPro"
							color="#333333"
							sm-text-align="center"
							moy-margin="6px 0 10px 0"
						>
							Контакты
						</Text>
					</Box>
					<Box
						width="30%"
						height="2px"
						min-height={0}
						background="#d4bd6a"
						px-margin="0px 0px 0px 67px"
					/>
					<Text
						color="#333333"
						font="200 20px --fontFamily-googleSourceSansPro"
						padding="0px 0px 0px 64px"
						hover-color="#d4bd6a"
						sm-text-align="center"
						sm-padding="0px 0px 0px 0px"
					>
						<Link href="#" px-color="#333333" px-hover-color="#c1a050" px-text-decoration-line="initial">
							Как получить промокод
						</Link>
					</Text>
					<Text
						color="#333333"
						font="200 20px --fontFamily-googleSourceSansPro"
						padding="0px 0px 0px 64px"
						hover-color="#d4bd6a"
						sm-text-align="center"
						sm-padding="0px 0px 0px 0px"
					>
						<Link
							href="#"
							px-color="#333333"
							px-hover-color="#c1a050"
							px-text-decoration-line="initial"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Партенерская программа
						</Link>
					</Text>
					<Box
						padding="0 0 0 64px"
						sm-padding="0px 0 0 0"
						margin="20px 0 0 0"
						max-width="360px"
						position="relative"
						display="flex"
						flex-direction="row"
						justify-content="left"
						align-items="center"
						sm-margin="0 0 20px 0"
					>
						<Image width="30px" height="30px" srcSet="https://static.tildacdn.com/tild6139-3832-4838-b533-613236613930/phone_2.svg" padding="0px 15px 0px 0px" />
						<Text as="p" margin="6px 0" font="--headline3">
							<Link
								href="mailto:hello@company.com"
								text-decoration="none"
								hover-text-decoration="underline"
								color="#333333"
								font="400 20px/33.6px --fontFamily-googleSourceSansPro"
							>
								+7 (705) 385-58-55
							</Link>
						</Text>
					</Box>
					<Box
						padding="10px 0 0 50px"
						sm-padding="0"
						margin="0 px"
						max-width="360px"
						position="relative"
						display="flex"
					>
						<Image
							width="30px"
							height="30px"
							srcSet="https://static.tildacdn.com/tild6665-3234-4337-a266-343962353233/whatsapp_6.svg"
							padding="0px 0px 0px 15px"
							sm-padding="0px 0px 0px 0px"
						/>
						<Image width="30px" height="30px" srcSet="https://static.tildacdn.com/tild3133-3166-4233-a633-613334376430/logo_viber.svg" padding="0px 0px 0px 15px" />
						<Image width="30px" height="30px" srcSet="https://static.tildacdn.com/tild3630-3935-4130-b663-396530623263/telegram_4.svg" padding="0px 0px 0px 15px" />
					</Box>
					<Box
						padding="10px 0 0 65px"
						sm-padding="0"
						margin="0 px"
						max-width="360px"
						position="relative"
						display="flex"
					>
						<Text color="#333333" font="300 16px --fontFamily-googleSourceSansPro" sm-text-align="center">
							Individual entrepreneurship IRINA BOGATORJOVA
VAT identification number: 10767980963
Address: Via Monte Ortigara N 22/A, Cinisello-Balsamo, 20092, Italy Intesa Sanpaolo
Account No. IT29G0306933082100000004613
						</Text>
					</Box>
				</StackItem>
				<StackItem width="50%" md-width="100%">
					<Box
						padding="56px 48px"
						margin="0 0 0 auto"
						md-max-width="100%"
						background="#fff"
						width="390px"
						height="390px"
						box-shadow="0 6px 10px 0 rgba(0, 0, 0, 0.05)"
						border-radius="15px"
						sm-padding="56px 24px 56px 24px"
						sm-height="100%"
					>
						<Text
							as="h3"
							font="normal 500 28px/1.2 --fontFamily-googleSourceSansPro"
							margin="0 0 20px 0"
							color="#333333"
							width="410px"
							sm-width="100%"
						>
							Ответим на любые вопросы.
						</Text>
						<Text
							as="h3"
							font="normal 300 20px/1.2 --fontFamily-googleSourceSansPro"
							margin="0 0 20px 0"
							color="#333333"
							width="410px"
							sm-width="100%"
							sm-font="normal 300 18px/1.2 --fontFamily-googleSourceSansPro"
						>
							Оставьте Ваши контакты и мы свяжемся с Вами.
							<br />
						</Text>
						<Input
							width="100%"
							border-width="1px"
							margin="0px 0px 30px 0px"
							height="50px"
							sm-width="100%"
							px-border-color="#c4c4c4"
							px-border-style="solid"
							type="text"
							name="Ваше имя"
							as="input"
							px-font="normal 300 20px/1.5 --fontFamily-googleSourceSansPro"
							moy-border-width="0px 0px 1px 0px"
							placeholder="Ваше имя"
							padding="6px 16px 6px 0px"
							px-border-width="0px 0px 1px 0px"
							required
							disabled={false}
						/>
						<Input
							width="100%"
							border-width="1px"
							margin="0px 0px 30px 0px"
							height="50px"
							sm-width="100%"
							px-border-color="#c4c4c4"
							px-border-style="solid"
							type="tel"
							name="Телефон"
							required={false}
							disabled={false}
							px-font="normal 300 20px/1.5 --fontFamily-googleSourceSansPro"
							moy-border-width="0px 0px 1px 0px"
							placeholder="Ваш телефон"
							padding="6px 16px 6px 0px"
							px-border-width="0px 0px 1px 0px"
						/>
						<Input
							width="100%"
							border-width="1px"
							margin="0px 0px 30px 0px"
							height="50px"
							sm-width="100%"
							px-border-color="#c4c4c4"
							px-border-style="solid"
							type="text"
							name="Ваш вопрос"
							as="textarea"
							px-height="85px"
							px-font="normal 300 20px/1.5 --fontFamily-googleSourceSansPro"
							moy-border-width="0px 0px 1px 0px"
							placeholder="Ваш вопрос"
							padding="6px 16px 6px 0px"
							px-border-width="0px 0px 1px 0px"
						/>
						<Stack>
							{"    "}
							<StackItem width="60%" display="flex">
								<Override slot="StackItemContent" width="30%" />
								{"        "}
								<Button
									background="#c1a050"
									width="260px"
									height="55px"
									border-radius="50px"
									font="normal 400 20px/1.5 --fontFamily-googleSourceSansPro"
									hover-background="#cbab58"
								>
									ОТПРАВИТЬ
								</Button>
								{"    "}
							</StackItem>
							{"    "}
							<StackItem width="40%" display="flex" padding="0PX 16px 16px 16px" sm-width="100%">
								{"        "}
								<Text font="13px --fontFamily-googleSourceSansPro" color="#333333" margin="0PX 0px 16px 0px" sm-width="100%">
									Нажимая на кнопку, Вы соглашаетесьс{" "}
									<Link
										href="https://travelrussiatoday.com/#popup:policyru"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										color="#98989d"
										sm-width="100%"
									>
										политикой обработки данных
									</Link>
								</Text>
								{"    "}
							</StackItem>
						</Stack>
					</Box>
				</StackItem>
			</Stack>
		</Section>
		<Section>
			<Stack
				background="#fff"
				align-items="center"
				justify-content="center"
				sm-flex-direction="column"
				width="100%"
			>
				{"    "}
				<StackItem width="33%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					{"        "}
					<Text
						font="normal 300 20px/1.5 --fontFamily-googleSourceSansPro"
						margin="0px 0px 0px 0px"
						display="inline-block"
						text-decoration-line="underline"
						sm-font="normal 300 16px/1.5 --fontFamily-googleSourceSansPro"
					>
						Политика конфиденциальности
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="33%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					{"        "}
					<Text
						font="normal 300 20px/1.5 --fontFamily-googleSourceSansPro"
						margin="0px 0px 0px 0px"
						display="inline-block"
						text-decoration-line="underline"
						sm-font="normal 300 16px/1.5 --fontFamily-googleSourceSansPro"
					>
						Пользовательское соглашение
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="33%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					{"        "}
					<Text
						font="normal 300 20px/1.5 --fontFamily-googleSourceSansPro"
						margin="0px 0px 0px 0px"
						display="inline-block"
						text-decoration-line="underline"
						sm-font="normal 300 16px/1.5 --fontFamily-googleSourceSansPro"
					>
						Договор публичной оферты
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
	</Theme>;
});