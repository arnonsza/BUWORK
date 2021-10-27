import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import '../App.css';

function Login() {
    return (
        <div className='login-form-container'>
            <div className='login-form-card'>
                <div className='login-form-card-body'>
                    <div className='login-form-inputname'>
                        <label>Username</label>
                        <InputGroup className="mb-3">
                            <FormControl placeholder="อีเมล" aria-label="Username" aria-describedby="basic-addon1" />
                            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                        </InputGroup>
                    </div>
                    <div className='login-form-inputname'>
                        <label>Password</label>
                        <InputGroup className="mb-3">
                            <FormControl placeholder="รหัสผ่าน" aria-label="Password" aria-describedby="basic-addon2" />
                            <InputGroup.Text id="basic-addon2">@</InputGroup.Text>
                        </InputGroup>
                    </div>
                    <div className='login-form-button'>
                        <Link to= "/Main" style={{ textDecoration: 'none' }}>
                            <Button variant="info" size="lg">                              
                                เข้าสู่ระบบ                              
                            </Button>
                        </Link>
                    </div>
                    <div className='login-form-text'>
                        <div className='login-form-hyperlink'>
                            <Link to= "/Register">
                                <span>สมัครสมาชิก</span>
                            </Link>&nbsp;
                            ||&nbsp;&nbsp;
                            <Link to= "/Resetpassword">
                                <span>ลืมรหัสผ่าน?</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;