import './styles/Footer.css'
import {Link} from "react-router-dom";
export const Footer = () => {
    return (
        <>
            <footer>
                <div className='footer-div-1'>
                    <div className='footer-div-1-sub-1'>
                        <h1>🍕</h1>
                        <div className='mobile-apps'>
                            <div className='apple-app'>
                                <svg width="31" height="38" viewBox="0 0 31 38" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M25.8272 20.0306C25.864 17.1576 27.4009 14.4391 29.8391 12.9344C28.3009 10.7291 25.7247 9.33089 23.0443 9.2467C20.1855 8.94546 17.4141 10.964 15.9573 10.964C14.4723 10.964 12.2293 9.27661 9.814 9.3265C6.66576 9.42861 3.73081 11.2255 2.19913 13.9887C-1.09339 19.7114 1.36253 28.1219 4.51649 32.7477C6.09448 35.0128 7.9387 37.5431 10.3518 37.4533C12.7132 37.355 13.5951 35.9417 16.4455 35.9417C19.2695 35.9417 20.0969 37.4533 22.559 37.3963C25.0929 37.355 26.6893 35.1211 28.212 32.8345C29.3457 31.2205 30.2182 29.4367 30.797 27.5491C27.8192 26.2848 25.8306 23.2764 25.8272 20.0306Z"
                                        fill="#090909"/>
                                    <path
                                        d="M21.1767 6.20453C22.5582 4.53953 23.2389 2.39945 23.0741 0.23877C20.9633 0.461327 19.0136 1.47406 17.6133 3.07518C16.2441 4.63956 15.5315 6.74199 15.6663 8.82008C17.7778 8.84191 19.8535 7.85663 21.1767 6.20453Z"
                                        fill="#090909"/>
                                </svg>
                                <div>
                                    <small>Download on the</small>
                                    <span>
                                        App Store
                                    </span>
                                </div>
                            </div>
                            <div className='android-app'>
                                <svg width="32" height="36" viewBox="0 0 32 36" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_ii_1_875)">
                                        <path
                                            d="M1.05838 1.21854C0.664163 1.63742 0.431152 2.2875 0.431152 3.12933V33.2069C0.431152 34.0501 0.664163 34.6988 1.05838 35.1177L1.15863 35.2156L17.9421 18.3667V18.1681V17.9696L1.15863 1.11926L1.05838 1.21854Z"
                                            fill="url(#paint0_linear_1_875)"/>
                                        <path
                                            d="M23.5352 23.9842L17.9416 18.3661V18.1675V17.9689L23.5366 12.3522L23.6626 12.4243L30.2911 16.205C32.1837 17.2849 32.1837 19.0515 30.2911 20.1327L23.6626 23.9135L23.5352 23.9842Z"
                                            fill="url(#paint1_linear_1_875)"/>
                                        <g filter="url(#filter1_i_1_875)">
                                            <path
                                                d="M23.6619 23.9128L17.9396 18.1682L1.05725 35.1178C1.68042 35.7815 2.71135 35.8631 3.87233 35.2021L23.6619 23.9128Z"
                                                fill="url(#paint2_linear_1_875)"/>
                                        </g>
                                        <path
                                            d="M23.6619 12.4237L3.87233 1.13577C2.71135 0.473454 1.68042 0.556414 1.05725 1.22009L17.9409 18.1697L23.6619 12.4237Z"
                                            fill="url(#paint3_linear_1_875)"/>
                                    </g>
                                    <defs>
                                        <filter id="filter0_ii_1_875" x="0.431152" y="0.678711" width="31.2794"
                                                height="34.98" filterUnits="userSpaceOnUse"
                                                colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix"
                                                     result="shape"/>
                                            <feColorMatrix in="SourceAlpha" type="matrix"
                                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                           result="hardAlpha"/>
                                            <feOffset dy="-0.203999"/>
                                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                            <feColorMatrix type="matrix"
                                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"/>
                                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_875"/>
                                            <feColorMatrix in="SourceAlpha" type="matrix"
                                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                           result="hardAlpha"/>
                                            <feOffset dy="0.203999"/>
                                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                            <feColorMatrix type="matrix"
                                                           values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
                                            <feBlend mode="normal" in2="effect1_innerShadow_1_875"
                                                     result="effect2_innerShadow_1_875"/>
                                        </filter>
                                        <filter id="filter1_i_1_875" x="1.05725" y="18.1682" width="22.6046"
                                                height="17.4905" filterUnits="userSpaceOnUse"
                                                colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix"
                                                     result="shape"/>
                                            <feColorMatrix in="SourceAlpha" type="matrix"
                                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                           result="hardAlpha"/>
                                            <feOffset dy="-0.203999"/>
                                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                            <feColorMatrix type="matrix"
                                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>
                                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_875"/>
                                        </filter>
                                        <linearGradient id="paint0_linear_1_875" x1="16.4543" y1="2.81109" x2="-6.36889"
                                                        y2="25.5456" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#00A0FF"/>
                                            <stop offset="0.0066" stopColor="#00A1FF"/>
                                            <stop offset="0.2601" stopColor="#00BEFF"/>
                                            <stop offset="0.5122" stopColor="#00D2FF"/>
                                            <stop offset="0.7604" stopColor="#00DFFF"/>
                                            <stop offset="1" stopColor="#00E3FF"/>
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_1_875" x1="32.7547" y1="18.1675"
                                                        x2="-0.0236375" y2="18.1675" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#FFE000"/>
                                            <stop offset="0.4087" stopColor="#FFBD00"/>
                                            <stop offset="0.7754" stopColor="#FFA500"/>
                                            <stop offset="1" stopColor="#FF9C00"/>
                                        </linearGradient>
                                        <linearGradient id="paint2_linear_1_875" x1="20.5543" y1="21.2879" x2="-10.3969"
                                                        y2="52.1187" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#FF3A44"/>
                                            <stop offset="1" stopColor="#C31162"/>
                                        </linearGradient>
                                        <linearGradient id="paint3_linear_1_875" x1="-3.19463" y1="-8.79245"
                                                        x2="10.6259" y2="4.97437" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#32A071"/>
                                            <stop offset="0.0685" stopColor="#2DA771"/>
                                            <stop offset="0.4762" stopColor="#15CF74"/>
                                            <stop offset="0.8009" stopColor="#06E775"/>
                                            <stop offset="1" stopColor="#00F076"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <div>
                                    <small>GET IT ON</small>
                                    <span>
                                        Google Play
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='footer-div-1-sub-2'>
                        <h1>Quick Links</h1>
                        <Link to={'/'}>Features</Link>
                        <Link to={'/'}>Food Menu</Link>
                        <Link to={'/'}>Offer</Link>
                        <Link to={'/'}>Review</Link>
                        <Link to={'/'}>Rider</Link>
                    </div>
                    <div className='footer-div-1-sub-3'>
                        <h1>Get to Know Us</h1>
                        <Link to={'/'}>Gift Cards</Link>
                        <Link to={'/'}>DoorDash Stories</Link>
                        <Link to={'/'}>LinkedIn</Link>
                        <Link to={'/'}>Glassdoor</Link>
                        <Link to={'/'}>Accessibility</Link>
                    </div>
                    <div className='footer-div-1-sub-4'>
                        <h1>News</h1>
                        <Link to={'/'}>Blog</Link>
                        <Link to={'/'}>FAQ</Link>
                        <Link to={'/'}>Lift Media</Link>
                        <Link to={'/'}>Press</Link>
                        <Link to={'/'}>Presse Kit</Link>
                    </div>
                    <div className='footer-div-1-sub-5'>
                        <h1>Contact</h1>
                        <Link to={'/'}>Whatsapp</Link>
                        <Link to={'/'}>Support 24/7</Link>

                    </div>
                </div>
                <div className='footer-div-2'>
                    <span>
                        &copy; 2023 pizza.All right reserved
                    </span>
                    <div className='footer-div-2-links'>
                        <Link to={'/'}>Privacy</Link>
                        <Link to={'/'}>Policy</Link>
                        <Link to={'/'}>Terms</Link>
                        <Link to={'/'}>Services</Link>
                    </div>

                </div>
            </footer>
        </>
    )
}