import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';

function Resetpassword() {
    return (
        <div className='Resetpassword-form-container'>
            <div className='Resetpassword-form-body'>
                <div className='Resetpassword-form-label'>
                    <label>ลืมรหัสผ่าน</label>
                </div>
                <div className='Resetpassword-form-label1'>
                    <label>กรุณาใส่อีเมลของคุณ <br></br>
                        เราจะทำการส่งลิ้งค์เพื่อตั้งรหัสผ่านใหม่ไปยังอีเมลของคุณ</label>
                </div>
                <div className='Resetpassword-form-input'>
                    <Form.Control size="lg" type="text" placeholder="Email Address..." />
                </div>
                <div className='Resetpassword-form-button'>
                    <Button variant="success" type="submit" size="lg">ยืนยัน</Button>
                </div>
                
            </div>
        </div>
    )
}
export default Resetpassword;