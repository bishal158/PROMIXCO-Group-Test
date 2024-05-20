import './styles/Hero.css'
import Hero_Cover from '../assets/4facbc308fcee84e7051f4621a15b790.png'
export const Hero = () => {
    return (
        <>
            <section className='hero-container'>
                <div className='hero-content'>
                    <h1>
                        Your Favorite Food Delivery Partner
                    </h1>
                    <p>
                        The food at your doorstep. Why starve when you have us. You hunger partner. Straight out of the oven to your doorstep.
                    </p>
                    <div className='search-container'>
                        <input type='text' placeholder='Enter your delivery location'/>
                        <button>Order Now</button>
                    </div>
                    <div className='download-app'>
                        <div className='apple'>
                            <svg width="31" height="38" viewBox="0 0 31 38" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M25.8272 20.5308C25.864 17.6579 27.4009 14.9394 29.8391 13.4346C28.3009 11.2293 25.7247 9.83114 23.0443 9.74695C20.1855 9.4457 17.4141 11.4643 15.9573 11.4643C14.4723 11.4643 12.2293 9.77686 9.814 9.82675C6.66576 9.92885 3.73081 11.7258 2.19913 14.4889C-1.09339 20.2116 1.36253 28.6221 4.51649 33.248C6.09448 35.5131 7.9387 38.0433 10.3518 37.9536C12.7132 37.8553 13.5951 36.4419 16.4455 36.4419C19.2695 36.4419 20.0969 37.9536 22.559 37.8965C25.0929 37.8552 26.6893 35.6213 28.212 33.3347C29.3457 31.7208 30.2182 29.9369 30.797 28.0494C27.8192 26.785 25.8306 23.7766 25.8272 20.5308Z"
                                    fill="#090909"/>
                                <path
                                    d="M21.1767 6.70478C22.5582 5.03977 23.2389 2.89969 23.0741 0.739014C20.9633 0.961571 19.0136 1.9743 17.6133 3.57543C16.2441 5.13981 15.5315 7.24223 15.6663 9.32033C17.7778 9.34215 19.8535 8.35687 21.1767 6.70478Z"
                                    fill="#090909"/>
                            </svg>

                            <div>
                                <small>Download on the</small>
                                <h3>App Store</h3>
                            </div>
                        </div>
                        <div className='android'>
                            <svg width="32" height="36" viewBox="0 0 32 36" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_ii_1_723)">
                                    <path
                                        d="M1.05777 0.718786C0.663552 1.13766 0.430541 1.78774 0.430541 2.62958V32.7072C0.430541 33.5504 0.663552 34.1991 1.05777 34.618L1.15802 34.7159L17.9415 17.8669V17.6684V17.4698L1.15802 0.619507L1.05777 0.718786Z"
                                        fill="url(#paint0_linear_1_723)"/>
                                    <path
                                        d="M23.5346 23.4844L17.941 17.8663V17.6677V17.4692L23.536 11.8524L23.662 11.9245L30.2905 15.7053C32.1831 16.7851 32.1831 18.5517 30.2905 19.6329L23.662 23.4137L23.5346 23.4844Z"
                                        fill="url(#paint1_linear_1_723)"/>
                                    <g filter="url(#filter1_i_1_723)">
                                        <path
                                            d="M23.6613 23.4131L17.939 17.6685L1.05664 34.618C1.67981 35.2817 2.71074 35.3633 3.87172 34.7024L23.6613 23.4131Z"
                                            fill="url(#paint2_linear_1_723)"/>
                                    </g>
                                    <path
                                        d="M23.6613 11.924L3.87172 0.636015C2.71074 -0.0263015 1.67981 0.0566584 1.05664 0.720335L17.9403 17.6699L23.6613 11.924Z"
                                        fill="url(#paint3_linear_1_723)"/>
                                </g>
                                <defs>
                                    <filter id="filter0_ii_1_723" x="0.430542" y="0.178955" width="31.2794"
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
                                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_723"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix"
                                                       values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                       result="hardAlpha"/>
                                        <feOffset dy="0.203999"/>
                                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                        <feColorMatrix type="matrix"
                                                       values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
                                        <feBlend mode="normal" in2="effect1_innerShadow_1_723"
                                                 result="effect2_innerShadow_1_723"/>
                                    </filter>
                                    <filter id="filter1_i_1_723" x="1.05664" y="17.6685" width="22.6046"
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
                                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_723"/>
                                    </filter>
                                    <linearGradient id="paint0_linear_1_723" x1="16.4537" y1="2.31134" x2="-6.3695"
                                                    y2="25.0458" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#00A0FF"/>
                                        <stop offset="0.0066" stopColor="#00A1FF"/>
                                        <stop offset="0.2601" stopColor="#00BEFF"/>
                                        <stop offset="0.5122" stopColor="#00D2FF"/>
                                        <stop offset="0.7604" stopColor="#00DFFF"/>
                                        <stop offset="1" stopColor="#00E3FF"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_1_723" x1="32.7541" y1="17.6677" x2="-0.0242479"
                                                    y2="17.6677" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#FFE000"/>
                                        <stop offset="0.4087" stopColor="#FFBD00"/>
                                        <stop offset="0.7754" stopColor="#FFA500"/>
                                        <stop offset="1" stopColor="#FF9C00"/>
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_1_723" x1="20.5537" y1="20.7881" x2="-10.3975"
                                                    y2="51.619" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#FF3A44"/>
                                        <stop offset="1" stopColor="#C31162"/>
                                    </linearGradient>
                                    <linearGradient id="paint3_linear_1_723" x1="-3.19524" y1="-9.2922" x2="10.6253"
                                                    y2="4.47461" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#32A071"/>
                                        <stop offset="0.0685" stopColor="#2DA771"/>
                                        <stop offset="0.4762" stopColor="#15CF74"/>
                                        <stop offset="0.8009" stopColor="#06E775"/>
                                        <stop offset="1" stopColor="#00F076"/>
                                    </linearGradient>
                                </defs>
                            </svg>

                            <div>
                                <small>Get it on</small>
                                <h3>Google Play</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hero-cover'>
                    <img src={Hero_Cover} alt={'Hero Cover...'}/>
                </div>
            </section>
        </>
    )
}