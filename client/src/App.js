import React, { useEffect, useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";

function App() {
  // const tasks = useState(["Cuci Baju", "Masak Nasi"]);
  const [boards, setBoards] = useState([
    {
      id: 123456,
      title: "List Pekerjaan",
      cards: [
        {
          id: 234617,
          title: "Bersih Rumah",
          desc: "Bangun pagi-pagi bersih rumah dan juga taman",
          labels: [
            {
              text: "Kebersihan",
              color: "#a8193d",
            }
          ],
          tasks: [
            {
              text: "Cuci Baju",
              completed: false,
            },
            {
              text: "Masak Nasi",
            }
          ]
        },
        {
          id: 2471908,
          title: "Lari 2km",
          desc: "Lari ringan keliling kompleks pulang beli bakso",
          labels: [
            {
              text: "Olahraga",
              color: "#4fcc25",
            }
          ],
          tasks: [
            {
              text: "Prepare Barang",
              completed: false,
            },
            {
              text: "Beli Bakso",
            }
          ]
        }
      ]
    },
    {
      id: 2345671426,
      title: "Dalam Proses",
      cards: [
        {
          title: "Tugas Kuliah",
          desc: "Mengerjakan tugas mata kuliah computer vision individu",
          labels: [
            {
              text:"Kuliah",
              color:"#1ebffa",
            }
          ],
          tasks: [
            {
              text: "Mencari Jurnal",
              completed: true,
            },
            {
              text: "Review Algoritma",
              completed: false,
            }
          ]
        }
      ]
    },
    {
      id: 2345671427,
      title: "Selesai",
      cards: [
        {
          title: "Berenang",
          desc: "Mencoba rutinitas olahraga baru dengan nanda, farra dan erlin",
          labels: [
            {
              text: "Olahraga",
              color:"#4fcc25",
            }
          ],
          tasks: [
            {
              text: "Prepare peralatan",
              completed: true,
            }
          ]
        }
      ]
    },
    {
      id: 4567892997,
      title: "Catatan",
      cards: [
      ]
    }
  ]);

  const [targetCard, setTargetCard] = useState({
    bid: "",
    cid: "",
  });

  const removeBoard = (id) => {
    const index = boards.findIndex((item) => item.id === id);
    if (index < 0) return;

    const tempBoards = [...boards];
    tempBoards.splice(index, 1);
    setBoards(tempBoards);
  };

  const addCardHandler = (id, title) => {
    const index = boards.findIndex((item) => item.id === id);
    if (index < 0) return;

    const tempBoards = [...boards];
    tempBoards[index].cards.push({
      id: Date.now() + Math.random() * 2,
      title,
      labels: [],
      date: "",
      tasks: [],
    });
    setBoards(tempBoards);
  };

  const removeCard = (bid, cid) => {
    const index = boards.findIndex((item) => item.id === bid);
    if (index < 0) return;

    const tempBoards = [...boards];
    const cards = tempBoards[index].cards;

    const cardIndex = cards.findIndex((item) => item.id === cid);
    if (cardIndex < 0) return;

    cards.splice(cardIndex, 1);
    setBoards(tempBoards);
  };

  const dragEnded = (bid, cid) => {
    let s_boardIndex, s_cardIndex, t_boardIndex, t_cardIndex;
    s_boardIndex = boards.findIndex((item) => item.id === bid);
    if (s_boardIndex < 0) return;

    s_cardIndex = boards[s_boardIndex]?.cards?.findIndex(
      (item) => item.id === cid
    );
    if (s_cardIndex < 0) return;

    t_boardIndex = boards.findIndex((item) => item.id === targetCard.bid);
    if (t_boardIndex < 0) return;

    t_cardIndex = boards[t_boardIndex]?.cards?.findIndex(
      (item) => item.id === targetCard.cid
    );
    if (t_cardIndex < 0) return;

    const tempBoards = [...boards];
    const sourceCard = tempBoards[s_boardIndex].cards[s_cardIndex];
    tempBoards[s_boardIndex].cards.splice(s_cardIndex, 1);
    tempBoards[t_boardIndex].cards.splice(t_cardIndex, 0, sourceCard);
    setBoards(tempBoards);

    setTargetCard({
      bid: "",
      cid: "",
    });
  };

  const dragEntered = (bid, cid) => {
    if (targetCard.cid === cid) return;
    setTargetCard({
      bid,
      cid,
    });
  };

  const updateCard = (bid, cid, card) => {
    const index = boards.findIndex((item) => item.id === bid);
    if (index < 0) return;

    const tempBoards = [...boards];
    const cards = tempBoards[index].cards;

    const cardIndex = cards.findIndex((item) => item.id === cid);
    if (cardIndex < 0) return;

    tempBoards[index].cards[cardIndex] = card;

    setBoards(tempBoards);
  };

  useEffect(() => {
    localStorage.setItem("prac-kanban", JSON.stringify(boards));
  }, [boards]);

  return (
    <div className="App">
      <div className="app_nav">
        <h3>Simple Board</h3>
      </div>
      <div className="app_boards_container">
        <div className="app_boards">
          {/* Cread, Read, Update, Delete */}
          {boards.map((item) => (
            <TodoList
              key={item.id}
              board={item}
              addCard={addCardHandler}
              removeBoard={() => removeBoard(item.id)}
              removeCard={removeCard}
              dragEnded={dragEnded}
              dragEntered={dragEntered}
              updateCard={updateCard}
            />
          ))}
          <div className="app_boards_last">
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
