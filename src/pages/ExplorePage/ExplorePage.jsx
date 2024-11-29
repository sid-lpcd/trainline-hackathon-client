import CardExplore from "../../components/CardExplore/CardExplore";
import "./ExplorePage.scss";

const ExplorePage = () => {
  const cards = [
    {
      imageSrc: "https://storage.googleapis.com/pod_public/1300/174593.jpg",
      location: "Paris, France",
      author: "James Smith",
      thought: "The Eiffel Tower looks mesmerizing at night!",
      travel_dates: "21st - 25th May 2025",
      stations: [
        { id: 1, name: "Gare du Nord", people: 25, max_group: 30 },
        { id: 2, name: "Gare de Lyon", people: 40, max_group: 40 },
        { id: 3, name: "Saint-Lazare", people: 15, max_group: 30 },
        { id: 4, name: "Montparnasse", people: 2, max_group: 10 },
      ],
    },
    {
      imageSrc:
        "https://thumbs.dreamstime.com/b/vertical-ancient-hub-edinburgh-sunset-vertical-ancient-hub-edinburgh-sunset-263990088.jpg",
      location: "Edinburgh, Scotland",
      author: "Jane Doe",
      thought: "The train ride through the Highlands was magical.",
      travel_dates: "11st - 13th Dec 2024",
      stations: [
        { id: 5, name: "Edinburgh", people: 20, max_group: 30 },
        { id: 6, name: "Haymarket", people: 10, max_group: 30 },
        { id: 7, name: "Slateford", people: 5, max_group: 5 },
        { id: 8, name: "South Gyle", people: 8, max_group: 20 },
      ],
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
            author={card.author}
            stations={card.stations}
            travel_dates={card.travel_dates}
          />
        ))}
      </main>
    </>
  );
};

export default ExplorePage;
