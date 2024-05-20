import './styles/Category.css'
import {items_1, items_2} from "../constants/foodItems.js";
export const Category = () => {
    return (
        <>
            <section className={'category-container'}>
                <div className='category-heading'>
                    <h1>
                        MORE THAN <span>10,000</span> DISHES
                    </h1>
                    <h1>
                        TO ORDER!
                    </h1>
                    <p>
                        Welcome to The Biggest Network of Food Ordering & Delivery
                    </p>
                </div>
                <div className='category-content'>
                    <div className={'category-content-1'}>
                        <div className={'foods'}>
                            {items_1.map((item, index) =>{
                                return (
                                    <div key={index} className='items'>
                                        <div>{item.icon}</div>
                                        <span>{item.name}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <div className={'bike'}>
                            <h1>
                                Find <span style={{color:"red"}}>deals</span>, <span style={{color:"green"}}>free delivery</span>, and more from our restaurant partners.
                            </h1>
                            <div>
                                <svg width="193" height="118" viewBox="0 0 193 118" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M112.441 102.473H149.889L176.409 75.7892L168.858 63.3682L117.475 81.6927L112.441 102.473Z"
                                        fill="#191720"/>
                                    <path
                                        d="M59.0558 1.04744L54.3902 1.68179C53.3829 1.8192 52.4131 2.15618 51.5376 2.67303C50.6622 3.18987 49.8986 3.87619 49.2917 4.69178C48.6848 5.50737 48.2467 6.43586 48.003 7.42288C47.7594 8.40989 47.7151 9.43558 47.8728 10.4399L48.4355 14.0516C48.7326 15.9305 49.6903 17.6417 51.1363 18.8777C52.5823 20.1136 54.4217 20.7932 56.324 20.7942H56.59C56.59 20.7942 30.4076 43.3443 26.8164 60.0011L56.0375 95.3815C57.8719 97.6164 60.1782 99.4175 62.7909 100.656C65.4036 101.894 68.258 102.539 71.1493 102.544H112.444C112.444 102.544 123.903 74.0182 173.955 71.7571C173.955 71.7571 179.071 58.5278 165.269 46.823L112.444 50.404L100.851 58.1492L102.304 68.2477C102.804 71.6839 102.095 75.1873 100.298 78.1585C98.5008 81.1296 95.727 83.3841 92.4512 84.5362C88.4441 85.9462 84.0967 86.0701 80.0157 84.8907C75.9347 83.7114 72.3236 81.2875 69.6862 77.9574C61.7978 68.0226 54.6153 51.3555 66.2996 29.2556C66.2996 29.2556 80.9715 8.4141 66.9135 2.13198C64.4464 1.04545 61.7249 0.669818 59.0558 1.04744Z"
                                        fill="#FF5331"/>
                                    <path d="M52.5988 2.16357L56.3128 20.7951H47.9742L45.3242 4.62936L52.5988 2.16357Z"
                                          fill="#FF5331"/>
                                    <path opacity="0.51"
                                          d="M52.5988 2.16357L56.3128 20.7951H47.9742L45.3242 4.62936L52.5988 2.16357Z"
                                          fill="white"/>
                                    <path
                                        d="M67.5563 19.1674C69.9692 19.1674 71.9252 17.2114 71.9252 14.7985C71.9252 12.3857 69.9692 10.4297 67.5563 10.4297C65.1435 10.4297 63.1875 12.3857 63.1875 14.7985C63.1875 17.2114 65.1435 19.1674 67.5563 19.1674Z"
                                        fill="#FF5331"/>
                                    <path
                                        d="M23.4914 117.677C36.4654 117.677 46.9829 107.159 46.9829 94.1854C46.9829 81.2115 36.4654 70.694 23.4914 70.694C10.5175 70.694 0 81.2115 0 94.1854C0 107.159 10.5175 117.677 23.4914 117.677Z"
                                        fill="#191720"/>
                                    <path
                                        d="M23.4929 109.901C32.1723 109.901 39.2084 102.865 39.2084 94.1857C39.2084 85.5063 32.1723 78.4702 23.4929 78.4702C14.8134 78.4702 7.77734 85.5063 7.77734 94.1857C7.77734 102.865 14.8134 109.901 23.4929 109.901Z"
                                        fill="white"/>
                                    <path
                                        d="M23.4846 111.435C20.0729 111.435 16.7377 110.423 13.9009 108.527C11.0641 106.632 8.85311 103.938 7.54748 100.786C6.24185 97.6337 5.90024 94.1652 6.56584 90.819C7.23145 87.4728 8.87437 84.3991 11.2869 81.9866C13.6994 79.5741 16.7731 77.9312 20.1193 77.2655C23.4655 76.5999 26.9339 76.9416 30.086 78.2472C33.2381 79.5528 35.9322 81.7638 37.8277 84.6006C39.7232 87.4374 40.7349 90.7726 40.7349 94.1843C40.7322 98.7586 38.9139 103.145 35.6794 106.379C32.4449 109.614 28.0589 111.432 23.4846 111.435ZM23.4846 80.0035C20.6799 80.0035 17.9382 80.8352 15.6062 82.3934C13.2742 83.9516 11.4566 86.1664 10.3833 88.7576C9.30996 91.3488 9.02914 94.2001 9.57631 96.9509C10.1235 99.7017 11.4741 102.228 13.4573 104.212C15.4405 106.195 17.9673 107.545 20.7181 108.093C23.4689 108.64 26.3202 108.359 28.9114 107.286C31.5026 106.212 33.7173 104.395 35.2756 102.063C36.8338 99.7307 37.6654 96.989 37.6654 94.1843C37.6627 90.4242 36.1678 86.8188 33.509 84.16C30.8502 81.5012 27.2448 80.0062 23.4846 80.0035Z"
                                        fill="#FFCF54"/>
                                    <path opacity="0.11"
                                          d="M136.177 82.0717C136.177 82.0717 126.969 93.4081 125.035 102.473H146.521L153.509 90.0011L146.89 78.4702L136.177 82.0717Z"
                                          fill="white"/>
                                    <path
                                        d="M165.698 117.677C178.672 117.677 189.19 107.159 189.19 94.1853C189.19 81.2113 178.672 70.6938 165.698 70.6938C152.725 70.6938 142.207 81.2113 142.207 94.1853C142.207 107.159 152.725 117.677 165.698 117.677Z"
                                        fill="#191720"/>
                                    <path
                                        d="M165.7 109.901C174.379 109.901 181.415 102.865 181.415 94.1858C181.415 85.5064 174.379 78.4703 165.7 78.4703C157.02 78.4703 149.984 85.5064 149.984 94.1858C149.984 102.865 157.02 109.901 165.7 109.901Z"
                                        fill="white"/>
                                    <path
                                        d="M165.685 111.435C162.274 111.433 158.94 110.419 156.104 108.522C153.269 106.626 151.06 103.931 149.755 100.779C148.451 97.6264 148.111 94.1583 148.778 90.8127C149.445 87.4672 151.089 84.3944 153.501 81.983C155.914 79.5715 158.988 77.9296 162.334 77.2648C165.68 76.6 169.148 76.9422 172.299 78.2482C175.451 79.5541 178.144 81.7651 180.039 84.6017C181.934 87.4382 182.946 90.773 182.946 94.1843C182.94 98.7595 181.12 103.146 177.884 106.38C174.648 109.614 170.261 111.432 165.685 111.435ZM165.685 80.0035C162.881 80.0056 160.14 80.839 157.81 82.3984C155.479 83.9578 153.663 86.1733 152.591 88.7647C151.52 91.356 151.24 94.207 151.788 96.9571C152.337 99.7073 153.688 102.233 155.672 104.215C157.655 106.197 160.182 107.547 162.933 108.093C165.683 108.64 168.534 108.358 171.125 107.285C173.715 106.211 175.929 104.394 177.487 102.062C179.045 99.7299 179.876 96.9886 179.876 94.1843C179.871 90.4232 178.374 86.8179 175.713 84.1594C173.053 81.5008 169.446 80.0062 165.685 80.0035Z"
                                        fill="#FFCF54"/>
                                    <path opacity="0.08"
                                          d="M67.5563 19.1674C69.9692 19.1674 71.9252 17.2114 71.9252 14.7985C71.9252 12.3857 69.9692 10.4297 67.5563 10.4297C65.1435 10.4297 63.1875 12.3857 63.1875 14.7985C63.1875 17.2114 65.1435 19.1674 67.5563 19.1674Z"
                                          fill="#191720"/>
                                    <path
                                        d="M26.8213 60.0024C26.8213 60.0024 13.4284 61.5883 6.51189 72.8122C6.23243 73.2568 6.08864 73.7733 6.09809 74.2983C6.10755 74.8234 6.26985 75.3343 6.56514 75.7685C6.86043 76.2028 7.27591 76.5415 7.76072 76.7433C8.24552 76.9451 8.77865 77.0013 9.29485 76.9048C17.3572 75.5031 33.7583 75.544 52.9525 91.6688L26.8213 60.0024Z"
                                        fill="#FF5331"/>
                                    <path opacity="0.08"
                                          d="M26.8213 60.0024C26.8213 60.0024 13.4284 61.5883 6.51189 72.8122C6.23243 73.2568 6.08864 73.7733 6.09809 74.2983C6.10755 74.8234 6.26985 75.3343 6.56514 75.7685C6.86043 76.2028 7.27591 76.5415 7.76072 76.7433C8.24552 76.9451 8.77865 77.0013 9.29485 76.9048C17.3572 75.5031 33.7583 75.544 52.9525 91.6688L26.8213 60.0024Z"
                                          fill="#191720"/>
                                    <path
                                        d="M101.67 58.0784C101.67 58.0784 89.75 48.5427 94.8658 40.3268C99.9815 32.1109 124.046 40.8895 142.749 34.6586C161.452 28.4276 178.917 33.3387 166.077 46.7522L101.67 58.0784Z"
                                        fill="#FF5331"/>
                                    <path opacity="0.17"
                                          d="M101.67 58.0784C101.67 58.0784 89.75 48.5427 94.8658 40.3268C99.9815 32.1109 124.046 40.8895 142.749 34.6586C161.452 28.4276 178.917 33.3387 166.077 46.7522L101.67 58.0784Z"
                                          fill="#191720"/>
                                    <path
                                        d="M124.362 87.9843C124.362 87.9843 111.409 75.2666 124.362 65.475C135.965 56.676 162.526 51.2124 179.264 62.9376C179.912 63.4047 180.426 64.0329 180.756 64.7598C181.086 65.4868 181.221 66.2874 181.147 67.0823C181.072 67.8773 180.791 68.639 180.332 69.292C179.873 69.9451 179.251 70.4668 178.528 70.8056C167.355 76.1362 143.117 86.7565 124.362 87.9843Z"
                                        fill="#FF5331"/>
                                    <path opacity="0.08"
                                          d="M124.362 87.9843C124.362 87.9843 111.409 75.2666 124.362 65.475C135.965 56.676 162.526 51.2124 179.264 62.9376C179.912 63.4047 180.426 64.0329 180.756 64.7598C181.086 65.4868 181.221 66.2874 181.147 67.0823C181.072 67.8773 180.791 68.639 180.332 69.292C179.873 69.9451 179.251 70.4668 178.528 70.8056C167.355 76.1362 143.117 86.7565 124.362 87.9843Z"
                                          fill="#191720"/>
                                    <path
                                        d="M181.087 67.3882C183.835 71.7883 187.373 75.6421 191.523 78.7553C191.81 78.9741 192.012 79.2866 192.092 79.6384C192.173 79.9902 192.128 80.3591 191.965 80.6812C191.802 81.0034 191.532 81.2583 191.201 81.4017C190.869 81.5452 190.498 81.5682 190.152 81.4667C184.288 79.831 178.999 76.5842 174.887 72.0947L181.087 67.3882Z"
                                        fill="#FF5331"/>
                                    <path opacity="0.17"
                                          d="M46.4775 46.8231C46.5353 46.1991 46.3876 45.5732 46.057 45.0409C45.7263 44.5085 45.2307 44.0987 44.6457 43.874C44.0607 43.6492 43.4182 43.6218 42.8162 43.7959C42.2141 43.9699 41.6854 44.3359 41.3106 44.8382C37.085 50.4553 33.2891 57.2183 35.5196 61.2802C39.8679 69.2096 45.1269 70.7443 46.9788 65.3728C48.2782 61.5769 45.751 55.2743 46.4775 46.8231Z"
                                          fill="white"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className={'category-content-2'}>
                        <div className={'text'}>
                            <svg width="61" height="51" viewBox="0 0 61 51" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M34.7358 48.1929L34.7358 39.1414C34.7358 37.9132 35.8553 36.9185 37.2354 36.9185C42.1603 36.9185 44.8395 32.4267 45.2113 23.5598L37.2354 23.5598C35.8554 23.5598 34.7358 22.5637 34.7358 21.3369L34.7358 2.2243C34.7358 0.996609 35.8553 0.00187113 37.2354 0.00187137L58.5003 0.00187509C59.8801 0.00187533 61 0.997702 61 2.2243L61 21.3371C61 25.5872 60.5175 29.4874 59.5704 32.9319C58.5974 36.463 57.1039 39.5501 55.1322 42.1083C53.1044 44.7373 50.5657 46.8003 47.591 48.237C44.5938 49.6829 41.1097 50.4167 37.2344 50.4167C35.8554 50.4157 34.7358 49.4201 34.7358 48.1929ZM2.49904 36.9177C1.11907 36.9177 -6.62896e-06 37.9132 -6.84339e-06 39.1396L-8.42633e-06 48.193C-8.64088e-06 49.4201 1.11906 50.415 2.49903 50.415C6.37246 50.415 9.85829 49.681 12.8536 48.2353C15.8299 46.7987 18.3682 44.7374 20.3958 42.1066C22.3687 39.5484 23.8621 36.4611 24.8351 32.9283C25.7827 29.4838 26.2642 25.5835 26.2642 21.3352L26.2642 2.22243C26.2642 0.994743 25.144 4.39632e-06 23.7646 4.15513e-06L2.49904 4.36947e-07C1.11907 1.95665e-07 -1.74089e-07 0.995671 -3.88582e-07 2.22243L-3.73037e-06 21.3352C-3.945e-06 22.5627 1.11907 23.5581 2.49904 23.5581L10.363 23.5581C9.99564 32.4257 7.35505 36.9177 2.49904 36.9177Z"
                                    fill="#191720"/>
                            </svg>
                            <h1>
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
                            </h1>
                        </div>
                        <div className={'foods'}>
                            {items_2.map((item, index) => {
                                return (
                                    <div key={index} className='items'>
                                        <div>{item.icon}</div>
                                        <span>{item.name}</span>
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}