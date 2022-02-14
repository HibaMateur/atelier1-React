function Home(props) {
  const [likes, setLikes] = useState(0);
  const [color, setColor] = useState("");
  const buttonClick = () => {
    setLikes(likes + 1);
    if (likes >= 4) {
      setColor("red");
    }
  };

  return <></>;
}

export default Home;
