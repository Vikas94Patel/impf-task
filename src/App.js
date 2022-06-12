import React, { Fragment } from "react";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TableHeader from "./components/TableHeader";
import Data from "./Data";

function App() {
  return (
    <Fragment>
      <Header />
      <TableHeader />
      {Data.map((item) => {
        return (
          <Card
            key={item.id}
            icon={item.icon}
            title={item.title}
            name={item.name}
            description={item.description}
            date={item.date}
            content={item.content}
          />
        );
      })}
      <Footer />
    </Fragment>
  );
}

export default App;
