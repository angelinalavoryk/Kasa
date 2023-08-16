import './_ErrorPage.scss';
import { Link } from 'react-router-dom';




function ErrorPage() {
    return(
        <section className='error_page'>
            <div className='error_404'>
                <p className="error_404-txt">404</p>
            </div>
            <div className='error_text-indication'>
                <p className="error_text">Oups! La page que vous demandez n'existe pas.</p>
            </div>
            <div className='error_link'>
                <Link to='/' className='error_link-home'>
                    Retourner sur la page d’accueil
                </Link>
            </div>
        </section>
    )
}

export default ErrorPage;