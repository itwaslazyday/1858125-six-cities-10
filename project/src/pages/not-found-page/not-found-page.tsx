import SiteHeader from '../../components/site-header/site-header';
import {Link} from 'react-router-dom';
import './not-found-page.css';

function NotFoundPage(): JSX.Element {
  return (
    <section className="wrapper">
      <SiteHeader />
      <div className="landing">
        <h1 className="landing__header visually-hidden">404. Page not found</h1>
        <Link to="/" className="landing__link">Back to main</Link>
      </div>
    </section>
  );
}

export default NotFoundPage;
