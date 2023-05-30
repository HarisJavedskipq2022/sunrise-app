import React from "react";
import { Layout, Typography, Button, Card, Row, Col } from "antd";

const { Content, Footer } = Layout;
const { Title } = Typography;
const { Meta } = Card;

const HomePage = () => (
	<Layout className="h-screen flex flex-col bg-gray-100">
		<Content className="flex flex-col items-center justify-center p-12 animate-fade-in-2">
			<Title className="text-center text-indigo-900">
				Welcome to Sunrise Grammar High School
			</Title>
			<p className="text-center max-w-lg mb-8 text-black text-base animate-fade-in-3">
				Our school is committed to providing a nurturing and inclusive
				environment that fosters academic growth, personal development,
				and prepares students for a dynamic future. With a dedicated
				team of passionate educators, state-of-the-art facilities, and a
				comprehensive curriculum, we strive to empower each student to
				reach their full potential. Join us on this exciting journey of
				learning and discovery at our school.
			</p>
			<Button type="primary" size="large" className="mb-8 bg-indigo-600">
				Learn More
			</Button>
			<Row gutter={16} className="w-full justify-center">
				<Col span={6} className="text-center">
					<Card
						hoverable
						// cover={<img alt="example" src="img1.jpg" />}
						className="mb-8 h-64 bg-blue-500 animate-fade-in-2"
					>
						<Meta
							title={
								<span className="text-white">
									Academic Excellence
								</span>
							}
							description={
								<span className="text-white">
									Academic excellence is our top priority. We
									maintain high standards of teaching and
									learning to ensure that every student
									receives a quality education that prepares
									them for future success.
								</span>
							}
						/>
					</Card>
				</Col>
				<Col span={6} className="text-center">
					<Card
						hoverable
						// cover={<img alt="example" src="img2.jpg" />}
						className="mb-8 h-64 bg-green-500 animate-fade-in-3"
					>
						<Meta
							title={
								<span className="text-white">
									Extra-curricular Activities
								</span>
							}
							description={
								<span className="text-white">
									We believe in the power of extra-curricular
									activities to enrich the educational
									experience. At our school, we offer a
									diverse range of clubs, sports, and arts
									programs that foster creativity, teamwork,
									and personal growth, allowing students to
									explore their passions beyond the classroom.
								</span>
							}
						/>
					</Card>
				</Col>
				<Col span={6} className="text-center">
					<Card
						hoverable
						// cover={<img alt="example" src="img3.jpg" />}
						className="mb-8 h-64 bg-purple-500 animate-fade-in-4"
					>
						<Meta
							title={
								<span className="text-white">Discipline</span>
							}
							description={
								<span className="text-white">
									Discipline is an integral part of our school
									community. We promote a culture of respect,
									responsibility, and accountability,
									instilling in our students the values of
									self-discipline and positive behavior,
									creating a conducive environment for
									learning and personal development.
								</span>
							}
						/>
					</Card>
				</Col>
			</Row>
		</Content>
		<Footer className="text-center bg-gray-800 text-white">
			SRGHS ©2023
		</Footer>
	</Layout>
);

export default HomePage;
