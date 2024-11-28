import CardExplore from "../../components/CardExplore/CardExplore";
import "./ExplorePage.scss";

const ExplorePage = () => {
  const cards = [
    {
      imageSrc: "https://storage.googleapis.com/pod_public/1300/174593.jpg",
      location: "Paris, France",
      thought: "The Eiffel Tower looks mesmerizing at night!",
    },
    {
      imageSrc:
        "https://thumbs.dreamstime.com/b/vertical-ancient-hub-edinburgh-sunset-vertical-ancient-hub-edinburgh-sunset-263990088.jpg",
      location: "Edinburgh, Scotland",
      thought: "The train ride through the Highlands was magical.",
    },
  ];
  return (
    <>
      <header className="explore-header">
        <h1 className="explore-header__title">Explore Destinations</h1>
      </header>
      <main className="explore-feed">
        {cards.map((card, index) => (
          <CardExplore
            key={index}
            imageSrc={card.imageSrc}
            location={card.location}
            thought={card.thought}
          />
        ))}
      </main>
    </>
  );
};

export default ExplorePage;
