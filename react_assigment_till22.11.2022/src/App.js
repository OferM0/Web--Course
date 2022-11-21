import "./App.css";
import { HeaderComponent } from "./components/header/header.component ";
import { CardComponent } from "./components/card/card.component ";
import marvel from "./marvel.jpg";
import ironMan from "./iron-man.jpg";
import batMan from "./bat-man.jpg";
import spiderMan from "./spider-man.jpg";

function App() {
  return (
    <div className="container">
      <HeaderComponent
        imageUrl={marvel}
        title={"Marvel Comics"}
        description={
          "Marvel Comics (or simply Marvel) is an American comic book publisher and primary imprint of Marvel Worldwide Inc. (formerly Marvel Publishing, Inc. and Marvel Comics Group), part of Marvel Entertainment. In 2009, The Walt Disney Company acquired the parent company."
        }
      ></HeaderComponent>
      <aside>
        <ul class="list-style">
          <CardComponent
            imageUrl={ironMan}
            title={"Iron Man"}
            description={
              "Iron Man is a superhero appearing in American comic books published by Marvel Comics."
            }
          ></CardComponent>
          <CardComponent
            imageUrl={batMan}
            title={"Bat Man"}
            description={
              "Batman is a superhero appearing in American comic books published by Marvel Comics."
            }
          ></CardComponent>
          <CardComponent
            imageUrl={spiderMan}
            title={"Spider Man"}
            description={
              "Spider-Man is a superhero appearing in American comic books published by Marvel Comics."
            }
          ></CardComponent>
        </ul>
      </aside>
    </div>
  );
}

export default App;
