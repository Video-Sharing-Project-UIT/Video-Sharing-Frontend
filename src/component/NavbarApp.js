import React, { useEffect, useState, useRef } from 'react';
import logo from '../assets/images/logo.png'
import avar from '../assets/images/avar.jpg'
import { FiUpload } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoTriangle, IoSettingsSharp, IoLogOutSharp } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";
import { Navigate, useNavigate } from 'react-router-dom';



const NavbarApp = () => {
    const [avatar, setAvatar] = useState('');
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    let fullName = ''; // Khai báo biến fullName
    const [searchValue, setSearchValue] = useState('');
    const [isLogin, setIsLogin] = useState(true)
    const navigate = useNavigate();

    const handleFindChange = (event) => {
        setSearchValue(event.target.value);
    };
    useEffect(() => {
        fullName = firstName + " " + lastName;
    }, [firstName, lastName]);
    const vidufullName = "Nguyễn Thành Đăng"
    const [clickAvatar, setClickAvatar] = useState(false);
    const handleClickProfile = (e) =>
    {

        setClickAvatar(!clickAvatar);
    }
    let menuRef = useRef();
    useEffect(()=>
    {
        let handle = (e)=> 
        {
            try
            {

                if (!menuRef.current.contains(e.target))
                {
                    setClickAvatar(false);
                }
            }catch{console.log("Not login yet")};
        };
        document.addEventListener("mousedown", handle);
        return ()=> {
            document.removeEventListener("mousedown", handle)

        }
    });

    return (
        <div className='z-50 fixed select-none mb-[2px] drop-shadow-lg bg-white p-0 flex items-center w-full ml-0'>
            <img src={logo} className='cursor-pointer ml-[40px] m-[5px] w-[50px] h-[50px]' alt='logo'/>
            <p className='cursor-pointer text-[30px] text-[#595959] font-bold font-teko ml-[20px] -mx-1 -my-1'>Video Sharing</p>
            <input 
                id='searchValue'
                value={searchValue}  
                placeholder='Tìm kiếm tại đây'
                onChange={handleFindChange}
                type='text'
                className=' grow focus:border-[#595959] focus:border-[1px] bg-[#f0f4f9] rounded-[25px] ml-[250px] pl-[20px] w-[500px] h-[45px]
                border-[1px] border-[#ccc] outline-none'
            />
            <div className='flex-none'>
                { isLogin?<div className=' flex items-center'>
                        <button
                            className="items-center flex mr-[15px] ml-[200px] text-[15px] hover:shadow-md hover:bg-[#dedede]  bg-white
                            text-[#0b57d0] font-bold py-[10px] px-4 my-1 rounded-[30px] focus:outline-none focus:shadow-outline "
                            type="button"
                            onClick={()=>{navigate('/register')}}>
                            Đăng ký
                        </button>     
                        <button
                            className="font-bold items-center flex  mr-[25px]  text-[15px] hover:shadow-md hover:bg-[#0b57a9]  bg-[#0b57d0]
                            text-white py-[10px] px-4 my-1 rounded-[30px] focus:outline-none focus:shadow-outline "
                            type="button"
                            onClick={()=>{navigate('/login')}}>
                            Đăng nhập
                        </button>    
                    </div>:
                    <div className='flex items-center'>
                        <button
                            className="items-center flex mr-[15px] ml-[200px] text-[15px] hover:shadow-md hover:bg-[#0b57a9] rounded-[20px] bg-[#0b57d0]
                            text-white font-medium py-[10px] px-4 my-1 rounded-[30px] focus:outline-none focus:shadow-outline "
                            type="button">
                            Tải lên
                            <FiUpload className='ml-[5px]'/>
                        </button>
                        <IoIosNotificationsOutline className='hover:bg-[#edebeb] rounded-[20px] size-[27px] cursor-pointer  ml-[15px]'/>
                        <div className='relative '>
                            <img  className= 'hover:shadow-md cursor-pointer w-[45px] h-[45px] mr-[30px] rounded-[50%] my-1 mx-[15px]  rounded focus:outline-none focus:shadow-outline'
                                src={avar}
                                onClick={handleClickProfile} alt='avatar'/>
                            <div ref={menuRef}  className={` rounded-[10px] right-[20px] max-w-[400px]  min-w-[250px] top-[65px] w-auto h-auto absolute 
                                ${!clickAvatar?'hidden':' border-[1px] mt-0 bg-white '}`}>
                                <IoTriangle className=' text-white p-0 m-0  right-[17px] top-[-32px] size-[30px] mt-[15px]'/>
                                <ul className=' cursor-pointer  mt-[15px] text-[#545454]'>
                                    <li className='flex items-center'>
                                        <img className='ml-[15px] h-[60px] rounded-[50%]' src={avar} alt='avatar'></img>
                                        <p className='mx-[15px] font-bold pr-[15px] text-[18px]'>{vidufullName}</p>
                                    </li>
                                    <div className='flex justify-center mx-[15px]'>
                                        <hr className='w-full border-[1px] my-[10px]'/>
                                    </div>
                                    <div className='hover:text-black flex cursor-pointer items-center my-[10px]'>
                                            <MdAccountCircle className=' size-[30px] mx-[15px]'/>
                                            <li className=' font-medium hover:font-bold w-[150px] '> Hồ sơ 
                                            </li>
                                            <FaAngleRight className=' ml-auto mr-[15px]' />
                                    </div>
                                    <div className='hover:text-black flex cursor-pointer items-center my-[10px]'>
                                            <IoSettingsSharp className=' size-[30px] mx-[15px]'/>
                                            <li className=' font-medium hover:font-bold w-[150px] '> Cài đặt
                                            </li>
                                            <FaAngleRight className='ml-auto mr-[15px]' />
                                    </div>
                                    <div className='hover:text-black flex cursor-pointer items-center my-[10px] mb-[20px]'>
                                            <IoLogOutSharp className=' size-[30px] mx-[15px]'/>
                                            <li className=' font-medium hover:font-bold w-[150px]  '> Đăng xuất
                                            </li>
                                            <FaAngleRight className='ml-auto mr-[15px]' />
                                    </div>
                                </ul>
                            </div>
                        </div>

                    </div>
                }
            </div>


        </div>
    );
};

export default NavbarApp;
