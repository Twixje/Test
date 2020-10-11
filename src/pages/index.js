import React from "react";
import theme from "theme";
import { Theme, Image, Text, Box, Strong, Span, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Section, Override, StackItem, Stack } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section height="70px" padding="0 0 px 0">
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="center"
				flex-direction="row"
				md-flex-direction="column"
			>
				<Image width="118px" height="59px" src="https://uploads.quarkly.io/5f82bd438a25ab001e4e7636/images/logo2.svg?v=2020-10-11T08:18:01.434Z" />
				<Image width="24px" height="24px" src="https://uploads.quarkly.io/5f82bd438a25ab001e4e7636/images/phone_2.svg?v=2020-10-11T08:20:03.972Z" />
				<Text font="--lead" text-align="left">
					+7 (951) 678-52-88{"\n\n"}
				</Text>
				<Image width="24px" height="24px" src="https://uploads.quarkly.io/5f82bd438a25ab001e4e7636/images/whatsapp_6.svg?v=2020-10-11T09:00:48.182Z" />
				<Image width="24px" height="24px" src="https://uploads.quarkly.io/5f82bd438a25ab001e4e7636/images/logo_viber.svg?v=2020-10-11T09:01:07.723Z" />
				<Image width="24px" height="24px" src="https://uploads.quarkly.io/5f82bd438a25ab001e4e7636/images/telegram_4.svg?v=2020-10-11T09:01:18.881Z" />
				<Image width="24px" height="24px" src="https://uploads.quarkly.io/5f82bd438a25ab001e4e7636/images/ru.svg?v=2020-10-11T09:01:43.918Z" border-radius="50px" />
			</Box>
		</Section>
		<Section padding="50px 50px 50px 50px" sm-padding="40px 0" background="url(https://uploads.quarkly.io/5f82bd438a25ab001e4e7636/images/1.jpg?v=2020-10-11T09:07:30.875Z) center/cover">
			<Override slot="SectionContent" padding="0px 0px 0px 0px" />
			<Box max-width="520px" padding="50px 0px 80px 50px" color="--dark">
				<Text as="h2" font="normal 900 48px/1.2 --fontFamily-sans" margin="0 0 12px 0">
					<Span
						font-weight="normal"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						<Strong>
							{"\n"}Электронная виза и страховка в Россию{"\n\n"}
						</Strong>
					</Span>
				</Text>
				<Text font="normal 300 22px/1.5 --fontFamily-sans">
					За 5 минут без ошибок, фотоателье и сложных анкет.{"\n\n"}
				</Text>
				<Button
					border-radius="100px"
					background="#c1a050"
					width="260px"
					height="54px"
					font="normal 300 18px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					padding="8px 24px 8px 24px"
				>
					<Span
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						padding="0px 0px 0 0px"
					>
						ОФОРМИТЬ ВИЗУ
					</Span>
				</Button>
				<Box height="30px" />
				<Box
					background="#ffffff"
					padding="20px 0px 50px 0px"
					height="100px"
					width="480px"
					border-style="none"
					border-width="1px"
					margin="0px 0px 0px 0px"
				>
					<Text font="normal 500 22px/1.2 --fontFamily-googleOpenSans" padding="10px 0px 0px 20px">
						Всего за{" "}
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							2.99 евро
						</Strong>
					</Text>
					<Text font="normal 500 18px/1.2 Open Sans, sans-serif" padding="0px 0px 20px 20px">
						Мы вернем Вам деньги, если Вы не получите визу.
						<br />
						<br />
						{"\n\n"}
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Text as="h2" font="--headline1" md-font="--headline2" margin="20px 0 0 0">
				About Us
			</Text>
			<Text as="p" font="--lead" margin="20px 0 0 0">
				Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are.
			</Text>
			<Button font="--lead" margin="20px">
				Button
			</Button>
		</Section>
		<Section background="#f7f7f7" padding="64px 0" sm-padding="40px 0">
			<Stack>
				<StackItem width="50%" lg-width="100%" position="relative" right="85px">
					<Override
						slot="StackItemContent"
						color="--dark"
						padding="50px"
						background="#fff"
						flex-direction="column"
						border-radius="15px"
						left={0}
						right="100px"
					/>
					<Text as="h2" margin="12px 0" font="--headline2" md-font="--headline3">
						<Strong>
							Как получить электронную визу?
						</Strong>
						{"\n\n"}
					</Text>
					<Text font="normal 300 20px/1.5 --fontFamily-sans">
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
						В случае заполнения с ПК, вы с легкостью сможете прикрепить Ваше фото и копию документа, отсканировав QR-код, при помощи Вашего мобильного устройства. Форма поддерживает более 100 языков, вы сможете заполнить все данные на родном Вам языке.{"\n\n"}
					</Text>
				</StackItem>
				<StackItem
					width="50%"
					lg-width="100%"
					position="relative"
					right="480px"
					top="40px"
				>
					<Override slot="StackItemContent" flex-direction="column" />
					<Image
						width="1000px"
						height="700px"
						src="https://uploads.quarkly.io/5f82bd438a25ab001e4e7636/images/VisaService%20(1).png?v=2020-10-11T10:56:17.020Z"
						position="relative"
						left={0}
					/>
					<Stack />
				</StackItem>
			</Stack>
		</Section>
	</Theme>;
});