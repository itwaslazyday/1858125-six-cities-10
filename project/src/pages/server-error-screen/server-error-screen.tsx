import './server-error-screen.css';

function ServerErrorScreen(): JSX.Element {
  return (
    <section className='error'>
      <p className='error__text'><b>Server is not available now.</b> Please, try later</p>
    </section>
  );
}

export default ServerErrorScreen;
