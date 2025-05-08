import classNames from 'classnames/bind';
import styles from '../Styles/Header.module.scss';
import request, { requestLogout } from '../Config/api';
import useDebounce from '../hooks/useDebounce';

import logo from '../assests/imgs/logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useStore } from '../hooks/useStore';

const cx = classNames.bind(styles);

function Header() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [searchValue, setSearchValue] = useState('');
    const [dataSearch, setDataSearch] = useState([]);

    const navigate = useNavigate();
    const handleShowMenu = () => {
        setShow(!show);
    };

    const { dataUser, dataCart } = useStore();

    const debounce = useDebounce(searchValue, 500);

    useEffect(() => {
        try {
            if (searchValue === '') {
                return;
            }

            request.get('/api/search', { params: { nameProduct: debounce } }).then((res) => setDataSearch(res.data));
        } catch (error) {}
    }, [debounce, searchValue]);

    const handleLogOut = async () => {
        try {
            await requestLogout();
            setTimeout(() => {
                window.location.reload();
            }, 1000);
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('row-left')}>
                    <Link to={'/'}>
                        <img id={cx('logo')} src={logo} alt="" />
                    </Link>
                    <ul>
                        <Link to={'/category'}>
                            <li>Tất Cả Sản Phẩm</li>
                        </Link>
                        <Link to={'/category/giay-nam'}>
                            <li>Giày Nam</li>
                        </Link>
                        <Link to={'/category/giay-nu'}>
                            <li>Giày Nữ</li>
                        </Link>
                        <Link to={'/category/giay-tre-em'}>
                            <li>Giày Trẻ Em</li>
                        </Link>
                    </ul>
                </div>

                <div className={cx('row-right')}>
                    <div className={cx('search')}>
                        <input placeholder="Tìm Kiếm Sản Phẩm..." onChange={(e) => setSearchValue(e.target.value)} />
                        <FontAwesomeIcon icon={faSearch} />
                        {searchValue.length > 0 ? (
                            <div className={cx('result')}>
                                {dataSearch.map((item) => (
                                    <Link to={`/product/${item._id}/${item.slug}`} key={item._id}>
                                        <div className={cx('form-result')}>
                                            {dataSearch.length === 1 && item.name === 'Không Tìm Thấy Sản Phẩm !!!' ? (
                                                <img src={`${item?.img}`} alt="" />
                                            ) : (
                                                <img src={`${process.env.REACT_APP_IMG}/${item?.img[0]}`} alt="" />
                                            )}
                                            <span>{item.name}</span>

                                            {dataSearch.length === 1 && item.name === 'Không Tìm Thấy Sản Phẩm !!!' ? (
                                                <></>
                                            ) : (
                                                <span id={cx('price')}>{item.price.toLocaleString()} đ</span>
                                            )}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>

                    <div className={cx('cart-icon')}>
                        {dataUser?._id ? (
                            <Link to={'/cart'}>
                                <FontAwesomeIcon id={cx('icon-cart')} icon={faCartPlus} />
                            </Link>
                        ) : (
                            <></>
                        )}
                        {dataCart[0]?.products.length > 0 ? <span>{dataCart[0]?.products.length}</span> : <></>}
                    </div>

                    <div>
                        {dataUser?._id ? (
                            <div className="dropdown">
                                <button
                                    className="btn  dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <FontAwesomeIcon icon={faBars} />
                                </button>

                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li>
                                        <Link className="dropdown-item" to={'/info'}>
                                            Thông Tin Người Dùng
                                        </Link>
                                    </li>
                                    {dataUser.isAdmin ? (
                                        <li>
                                            <Link style={{ color: 'red' }} className="dropdown-item" to={'/admin'}>
                                                Trang Quản Trị
                                            </Link>
                                        </li>
                                    ) : (
                                        <></>
                                    )}
                                    <li onClick={handleLogOut}>
                                        <a className="dropdown-item" href="/#">
                                            Đăng Xuất
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <div className={cx('login-btn')}>
                                <Link style={{ textDecoration: 'none' }} to={'/login'}>
                                    Đăng Nhập
                                </Link>
                            </div>
                        )}
                    </div>
                </div>

                <div className={cx('btn-menu-mobile')}>
                    <button onClick={handleShowMenu}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>

                <div className={cx('menu-mobile')}>
                    <>
                        <Offcanvas show={show} onHide={handleClose}>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>
                                    <Link to={'/'}>
                                        <img src={logo} alt="" />
                                    </Link>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <div className={cx('row-left-mobile')}>
                                    <ul>
                                        <Link to={'/'}>
                                            <li>Trang Chủ</li>
                                        </Link>
                                        <Link to={'/category'}>
                                            <li>Tất Cả Sản Phẩm</li>
                                        </Link>
                                        <Link to={'/category/giay-nam'}>
                                            <li>Nam</li>
                                        </Link>
                                        <Link to={'/category/giay-nu'}>
                                            <li>Nữ</li>
                                        </Link>
                                        <Link to={'/category/giay-tre-em'}>
                                            <li>Trẻ Em</li>
                                        </Link>
                                        {dataUser?._id ? (
                                            <>
                                                <Link to={'/cart'}>
                                                    <li>Giỏ Hàng</li>
                                                </Link>
                                            </>
                                        ) : (
                                            <></>
                                        )}

                                        <Link to={dataUser?._id ? '/info' : '/login'}>
                                            <li>Thông Tin Người Dùng</li>
                                        </Link>

                                        {dataUser?.isAdmin ? (
                                            <li>
                                                <Link style={{ color: 'red' }} className="dropdown-item" to={'/admin'}>
                                                    Trang Quản Trị
                                                </Link>
                                            </li>
                                        ) : (
                                            <></>
                                        )}
                                        {dataUser?._id ? (
                                            <li onClick={handleLogOut}>
                                                <a
                                                    style={{ color: 'red', fontWeight: '700' }}
                                                    className="dropdown-item"
                                                    href="/#"
                                                >
                                                    Đăng Xuất
                                                </a>
                                            </li>
                                        ) : (
                                            <></>
                                        )}
                                    </ul>
                                </div>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </>
                </div>
            </div>
        </div>
    );
}

export default Header;
