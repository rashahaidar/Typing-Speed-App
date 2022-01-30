import { Container } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
	return (
		<div className="footer">
			<Container fluid>
				<div className="text-muted">
					&copy; {new Date().getFullYear()} Copyright: Rasha Haidar 
				</div>
			</Container>
		</div>
	);
};

export default Footer;