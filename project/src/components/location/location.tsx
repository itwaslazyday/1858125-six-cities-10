type LocationProps = {
  name: string;
}

function Location({name}: LocationProps): JSX.Element {
  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href="/">
        <span>{name}</span>
      </a>
    </li>
  );
}

export default Location;
