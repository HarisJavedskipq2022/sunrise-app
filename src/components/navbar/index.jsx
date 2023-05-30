import { Breadcrumb, Layout, Menu, theme } from "antd";
const { Header, Content, Footer } = Layout;
const Navbar = () => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	const menuItems = ["Home", "About", "Careers", "Results", "Contact Us"];
	return (
		<Layout className="">
			<Header
				style={{
					display: "flex",
					alignItems: "center",
					width: "100%",
					position: "fixed",
					zIndex: 1,
				}}
			>
				<div />
				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={["0"]}
					items={menuItems.map((item, index) => {
						const key = index;
						return {
							key,
							label: item,
						};
					})}
				/>
			</Header>
			<Content
				className="site-layout"
				style={{
					marginTop: 64,
					padding: "0 50px",
					overflow: "auto",
				}}
			></Content>
		</Layout>
	);
};
export default Navbar;
