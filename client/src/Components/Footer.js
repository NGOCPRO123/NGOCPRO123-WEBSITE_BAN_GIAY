import classNames from 'classnames/bind';
import styles from '../Styles/Footer.module.scss';

import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Footer() {
    const navigate = useNavigate();

    const onPage = (url) => {
        navigate(url);
    };

    return (
        <div className={cx('wrapper')}>
            <main>
                <div className={cx('inner')}>
                    <div className={cx('box-item')}>
                        <ul>
                            <li id={cx('item-title')}>NHÀ PHÂN PHỐI ĐỘC QUYỀN</li>
                            <li>CÔNG TY CP THỜI TRANG TVVN</li>
                            <li>Trường Đại học Công nghiệp TP.HCM                            </li>
                            <li>0123456789</li>
                        </ul>
                    </div>

                    <div className={cx('box-item')}>
                        <ul>
                            <li id={cx('item-title')}>DANH MỤC NỔI BẬT</li>
                            <li>Giới thiệu về TVVN STORE</li>
                            <li onClick={() => onPage('/category/giay-nam')}> Giày Nam</li>
                            <li onClick={() => onPage('/category/giay-nu')}> Giày Nữ</li>
                            <li onClick={() => onPage('/category/giay-tre-em')}>Giày Trẻ Em</li>
                        </ul>
                    </div>

                    <div className={cx('box-item')}>
                        <ul>
                            <li id={cx('item-title')}>CHÍNH SÁCH CÔNG TY</li>
                            <li>TVVN STORE</li>
                            <li>Trường Đại học Công nghiệp TP.HCM                            </li>
                            <li>123456789</li>
                        </ul>
                    </div>

                    <div className={cx('box-item')}>
                        <ul>
                            <li id={cx('item-title')}>NHÓM 6</li>
                            <li>THÀNH VIÊN</li>
                            <li>21018681-Nguyễn Ngô Hoàng Tú</li>
                            <li>21000505-Trương Công Anh Vĩ</li>
                            <li>21003295-Nguyễn Tấn Vinh</li>
                            <li>22100745-Phạm Lê Đức Ngọc-</li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Footer;
