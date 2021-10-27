import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { Col, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import '../App.css';

class Register extends React.Component {
    state = {
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
    }

    onUsernameChange = (e) => {
        this.setState({
            username: e.target.value,
        });
    };

    onEmailChange = (e) => {
        this.setState({
            email: e.target.value,
        });
    };

    onPasswordChange = (e) => {
        this.setState({
            password: e.target.value,
        });
    };

    onConfirmpasswordChange = (e) => {
        this.setState({
            confirmpassword: e.target.value,
        });
    };

    onSummitClick = (e) => {
        if(this.state.username === "") {
            alert("กรุณาใส่ ชื่อ-นามสกุลให้ครบ");
        }else if(this.state.email === "") {
            alert("กรุณาใส่ ที่อยู่อีเมลของคุณ");
        }else if(this.state.password === "") {
            alert("กรุณาตั้งรหัสผ่าน");
        }else if(this.state.confirmpassword != this.state.password) {
            alert("รหัสยืนยันไม่ตรงกับที่คุณตั้ง")
        }else {
            this.setState({
                username: "",
                email: "",
                password: "",
                confirmpassword: "",
            });

            alert("ขั้นตอนการสมัครเสร็จสิ้นกรุณา ยืนยัน อีเมล");
        }

        //alert("สวัสดีคุณ " + this.state.username+ " " + this.state.email + " " + this.state.password + " " + this.state.confirmpassword)
    };

    render() {
        return (
            <div className='register-card'>
                <div className='register-grid'>
                    <Row>
                        <div className='register-lebeltop'>
                            <Col><span>สร้างแอคเคาท์ใหม่</span></Col>
                        </div>
                    </Row>
                    <div className='register-text-edit'>
                        <Row>
                            <Col>
                                <Form.Label>ชื่อ-นามสกุล</Form.Label>
                                <Form.Control value={this.state.username} onChange={this.onUsernameChange} type="name" placeholder="ใส่เฉพาะชื่อจริงและนามสกุลเท่านั้น" />
                            </Col>
                        </Row>
                    </div>
                    <div className='register-text-edit'>
                        <Row>
                            <Col>
                                <Form.Label>อีเมล</Form.Label>
                                <Form.Control value={this.state.email} onChange={this.onEmailChange} type="email" placeholder="กรุณากรอกอีเมลของตนเอง" />
                            </Col>
                        </Row>
                    </div>
                    <div className='register-text-edit'>
                        <Row>
                            <Col>
                                <Form.Label>รหัสผ่าน</Form.Label>
                                <Form.Control value={this.state.password} onChange={this.onPasswordChange} type="password" placeholder="กำหนดรหัสผ่านที่ต้องการ" />
                            </Col>
                        </Row>
                    </div>
                    <div className='register-text-edit'>
                        <Row>
                            <Col>
                                <Form.Label>ยืนยันรหัสผ่าน</Form.Label>
                                <Form.Control value={this.state.confirmpassword} onChange={this.onConfirmpasswordChange} type="password" placeholder="กรุณายืนยันรหัสผ่านอีกครั้ง" />
                            </Col>
                        </Row>
                    </div>
                    <div className='register-button'>
                        <Row>
                            <Col><Button onClick={this.onSummitClick} variant="success" size="lg">สร้างแอคเคาท์</Button></Col>
                        </Row>
                    </div>
                    <div className='register-backward'>
                        <Row>
                            <Col>
                                <Link to="/">
                                    <span>กลับไปยังหน้าหลัก</span>
                                </Link>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        );
    };
}
export default Register;