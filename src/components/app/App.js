import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useFetchData from "../../services/useFetchData";

import AppHeader from "../header/AppHeader";
import SetListCell from "../set-list-cell/SetListCell";
import NavigationMenu from "../navigation-menu/NavigationMenu";
import List from "../list/List";
import AppFooter from "../footer/AppFooter";
import "./App.scss";

function App() {
  const { getStuff, getCategories } = useFetchData();
  const [stuff, setStuff] = useState([]);
  const [categories, setCategories] = useState([]);
  const [likedStuffIds, setLikedStuffsIds] = useState([]);

  const setLikedStuffFromLocalStorage = (likedStuff) => {
    likedStuff = likedStuff.filter((item) => item !== ",");
    setLikedStuffsIds(likedStuff);
    setStuff((previous) =>
      previous.map((thing) => {
        let item = thing;
        for (let i = 0; i < likedStuff.length; i++) {
          if (thing.id === likedStuff[i]) item = { ...thing, liked: true };
        }
        return item;
      })
    );
  };

  const likedStuffItem = (id) => {
    setStuff((stuff) =>
      stuff.map((item) => {
        if (item.id === id) {
          if (!item.liked) {
            setLikedStuffsIds((previous) => [...previous, id]);
            return { ...item, liked: true };
          } else {
            setLikedStuffsIds((previous) =>
              previous.filter((item) => item !== id)
            );
            return { ...item, liked: false };
          }
        }
        return item;
      })
    );
  };

  useEffect(() => {
    if (!(stuff.length > 0)) {
      getStuff().then((stuff) => setStuff(stuff));
      getCategories().then((categories) => setCategories(categories));
    } else {
      const likedStuff = localStorage.getItem("likedStuff");
      if (likedStuff > 0) {
        setLikedStuffFromLocalStorage([...likedStuff]);
      }
    }
  }, []);

  useEffect(() => {
    if (likedStuffIds.length > 0) {
      localStorage.setItem("likedStuff", likedStuffIds);
    }
  }, [likedStuffIds]);

  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main className="main">
          <SetListCell />

          <NavigationMenu categories={categories} />

          <Routes>
            <Route
              path="/:cell"
              element={<List data={stuff} onLike={likedStuffItem} />}
            />
            <Route
              path="/:cell/sale"
              element={
                <List
                  data={stuff.filter((item) => item.sale === true)}
                  onLike={likedStuffItem}
                />
              }
            />
            <Route
              path="/:cell/bestsellers"
              element={
                <List
                  data={stuff.filter((item) => item.bestseller === true)}
                  onLike={likedStuffItem}
                />
              }
            />
            <Route
              path="/:cell/pants"
              element={
                <List
                  data={stuff.filter((item) => item.category === "pants")}
                  onLike={likedStuffItem}
                />
              }
            />
            <Route
              path="/:cell/jeans"
              element={
                <List
                  data={stuff.filter((item) => item.category === "jeans")}
                  onLike={likedStuffItem}
                />
              }
            />
            <Route
              path="/:cell/dresses"
              element={
                <List
                  data={stuff.filter((item) => item.category === "dresses")}
                  onLike={likedStuffItem}
                />
              }
            />
            <Route
              path="/:cell/shirts"
              element={
                <List
                  data={stuff.filter((item) => item.category === "shirts")}
                  onLike={likedStuffItem}
                />
              }
            />
            <Route
              path="/:cell/sweatshirts"
              element={
                <List
                  data={stuff.filter((item) => item.category === "sweatshirts")}
                  onLike={likedStuffItem}
                />
              }
            />
            <Route
              path="/:cell/outerwear"
              element={
                <List
                  data={stuff.filter((item) => item.category === "outerwear")}
                  onLike={likedStuffItem}
                />
              }
            />
          </Routes>
        </main>
        <AppFooter />
      </div>
    </Router>
  );
}

export default App;
