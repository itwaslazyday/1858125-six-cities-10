import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  placeCount: number;
};

function App({placeCount}: AppProps): JSX.Element {
  return <MainPage placeCount={placeCount} />;
}

export default App;
