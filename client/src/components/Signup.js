import React, { Component } from 'react';

class Signup extends Component {

    render() {
        return (
            <div id="signup">   
                <h3>Đăng Ký Miễn Phí</h3>
                <form action="/" method="post" encType="multipart/form-data">

                    <div className="top-row">
                        <div className="field-wrap">
                            <input type="text" required autoComplete="off" placeholder="Họ Tên" />
                        </div>
                        <div className="field-wrap">
                            <input type="text" required autoComplete="off" placeholder="Số Điện Thoại"/>
                        </div>
                    </div>

                    <div className="field-wrap">

                        <input type="text" required autoComplete="off" placeholder="Địa Chỉ" />

                    </div>

                    <div className="field-wrap">

                        <input type="password" required autoComplete="off" placeholder="Nhập Mật Khẩu"/>

                    </div>

                    <div className="field-wrap">

                        <input type="password" required autoComplete="off" placeholder="Nhập Lại Mật Khẩu"/>

                    </div>

                    <div className="field-wrap">

                        <input type="file" required multiple/>
                        <span>Vui lòng chọn 3 ảnh</span>

                    </div>

                    <button type="submit" className="button button-block">Đăng Ký</button>
                </form>
            </div>
        );
    }
}

export default Signup;