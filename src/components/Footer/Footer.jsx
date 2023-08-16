import footer_logo from '../../assets/footer_logo.svg'
import './_Footer.scss'


function Footer() {
    return(
        <footer className='footer'>
            <div className='footer_content'>
            <img src={footer_logo} alt='kasa-logo' className='footer_logo_img' />
            </div>
            <p className="footer_text">© 2020 Kasa. All rights reserved</p>

        </footer>
    )
}

export default Footer;