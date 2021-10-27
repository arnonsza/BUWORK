import { Container, Col, Row } from 'react-bootstrap';
import '../App.css';

function Header() {
    return(
        <div className='main-header'>
            <Container fluid>
                <Row className='header-banner'>
                    <Col>BU SPORT</Col>
                </Row>
            </Container>
        </div>
    )
}
export default Header;