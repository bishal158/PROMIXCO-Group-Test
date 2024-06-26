import './styles/Testimonial.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
export const Testimonials = () => {
    return (
        <>
            <section className='testimonial-container'>
                <h1>Our Clients Feedback</h1>
                <p>The food at your doorstep. Why starve when you have us. You hunger partner. Straight out of the oven
                    to your doorstep.</p>
                <svg width="61" height="55" viewBox="0 0 61 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M26.3336 2.42599V12.3003C26.3336 13.6401 25.2325 14.7253 23.875 14.7253C19.0309 14.7253 16.3956 19.6254 16.0298 29.2984H23.875C25.2324 29.2984 26.3336 30.3851 26.3336 31.7234V52.5735C26.3336 53.9128 25.2325 54.998 23.875 54.998H2.95876C1.60159 54.998 0.500004 53.9116 0.500004 52.5735V31.7232C0.500004 27.0867 0.974567 22.832 1.90616 19.0743C2.8632 15.2222 4.33227 11.8545 6.27161 9.06365C8.26612 6.19569 10.7632 3.94516 13.6891 2.37785C16.6373 0.800526 20.0642 0 23.876 0C25.2324 0.00101852 26.3336 1.0872 26.3336 2.42599ZM58.0419 14.7262C59.3993 14.7262 60.5 13.6401 60.5 12.3022V2.42583C60.5 1.08721 59.3993 0.00186539 58.0419 0.00186539C54.232 0.00186539 50.8033 0.802563 47.8571 2.37971C44.9296 3.94686 42.4329 6.19552 40.4385 9.06551C38.498 11.8563 37.0291 15.2242 36.0721 19.0782C35.1399 22.8359 34.6664 27.0908 34.6664 31.7252V52.5755C34.6664 53.9148 35.7682 55 37.125 55H58.0419C59.3993 55 60.5 53.9138 60.5 52.5755V31.7252C60.5 30.3861 59.3993 29.3003 58.0419 29.3003H50.3069C50.6682 19.6265 53.2655 14.7262 58.0419 14.7262Z"
                        fill="#FF5331"/>
                </svg>
                <div className='comment'>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi”
                </div>
                <div className='author'>
                    <h3>Mitchell Marsh</h3>
                    <p>CEO, Bexon Agency</p>
                </div>
                <div className='next-prev-buttons'>
                    <button>
                        <FontAwesomeIcon icon='fa-solid fa-angle-left'/>
                    </button>
                    <button>
                        <FontAwesomeIcon icon='fa-solid fa-angle-right'/>
                    </button>
                </div>
            </section>
        </>
    )
}