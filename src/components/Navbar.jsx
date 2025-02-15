import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTotalQTY, setOpenCart } from '../app/CartSlice.js';

import { UserIcon, MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import logo from '../assets/logo.png';

const Navbar = () => {
    const [navState, setNavState] = useState(false);

    //  Deneme
    const [searchQuery, setSearchQuery] = useState("");
    const [showSearchBox, setShowSearchBox] = useState(false); // Yeni durum değişkeni


    const dispatch = useDispatch();
    const totalQTY = useSelector(selectTotalQTY);

    const onCartToggle = () => {
        dispatch(setOpenCart({
            cartState: true
        }))
    }

    const onNavScroll = () => {
        if (window.scrollY > 30) {
            setNavState(true);
        } else {
            setNavState(false);
        }
    }

    //DENEME
    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };




    useEffect(() => {
        window.addEventListener('scroll', onNavScroll);

        return () => {
            window.removeEventListener('scroll', onNavScroll);
        }
    }, []);
    return (
        <>
            <header className={
                !navState ? 'absolute top-7 left-0 right-0 opacity-100 z-50' : 'fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme'
            }>
                <nav className='flex items-center justify-between nike-container'>
                    <div className='flex items-center'>
                        <img
                            src={logo}
                            alt="logo/img"
                            className={`w-20 h-auto ${navState && "filter brightness-0"}`}
                        />
                    </div>




                    <ul className='flex items-center justify-center gap-2'>

                        <li className='grid items-center relative'>
                            <MagnifyingGlassIcon
                                onClick={() => setShowSearchBox(!showSearchBox)} // Durumu tersine çevir
                                className={`icon-style ${navState && "text-slate-900 transition-all duration-300"}`}
                            /></li>
                        <li>
                            {/* Arama kutusunu duruma göre göster veya gizle */}
                            {showSearchBox && (
                                <input
                                    type='text'
                                    placeholder='Ara...'
                                    value={searchQuery}
                                    onChange={handleSearchInputChange}
                                    className={`border-2 p-2 ${navState && "bg-slate-100 text-slate-900 transition-all duration-300 "} ${showSearchBox ? "w-40" : "w-10"} h-8 opacity-90 `}
                                />
                            )}
                        </li>

                        <li className='grid items-center'>
                            <UserIcon className={`icon-style ${navState && "text-slate-900 transition-all duration-300"}`} />
                        </li>
                        <li className='grid items-center'>
                            <button type='button' onClick={onCartToggle} className='border-none outline-none active:scale-110 transition-all duration-300 relative'>
                                <ShoppingBagIcon className={`icon-style ${navState && "text-slate-900 transition-all duration-300"}`} />
                                <div className={`absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${navState ? 'bg-slate-900 text-slate-100 shadow-slate-900' : 'bg-slate-100 text-slate-900 shadow-slate-100'}`}>{totalQTY}</div>
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>




        </>
    )
}

export default Navbar