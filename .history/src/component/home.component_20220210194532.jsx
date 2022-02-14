import styled from "styled-components";

function Home(props) {
  const [likes, setLikes] = useState(0);
  const [color, setColor] = useState("");
  const buttonClick = () => {
    setLikes(likes + 1);
    if (likes >= 4) {
      setColor("red");
    }
  };

  return <WelcomeWrapper></WelcomeWrapper>;
}
const WelcomeWrapper = styled.div`
  text-align: center;
  display: flex;
`;
export default Home;
