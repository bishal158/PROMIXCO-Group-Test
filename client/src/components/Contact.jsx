import './styles/Contact.css'
export const Contact = () => {
    return (
        <>
            <section className='contact-container'>
                <div className='inner-div'>
                    <div className={'inner-div-1'}>
                        <h1>
                            Subscribe our newsletter
                        </h1>
                        <p>
                            Browse local restaurants and businesses for delivery by entering your address blow
                        </p>
                    </div>
                    <div className={'inner-div-2'}>
                        <input type='email' placeholder='Enter your email address.'/>
                        <button>Send</button>
                    </div>
                </div>
            </section>
        </>
    )
}