import SiteHeader from '../../components/site-header/site-header';
import {Link} from 'react-router-dom';

function NotFoundPage(): JSX.Element {
  return (
    <section>
      <SiteHeader />
      <h1>404. Page not found</h1>
      <Link to="/">Вернуться на главную</Link>
    </section>
  );
}

export default NotFoundPage;
