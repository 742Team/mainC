import { unstable_HistoryRouter } from "react-router-dom";

function HomeButton() {
  const history = unstable_HistoryRouter();

  function handleClick() {
    history.push("/home");
  }

  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
}

export default HomeButton;