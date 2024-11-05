import { useState } from "react";
import styles from "./styles.module.css";

const MOCK_DATA = [
  { id: 1, name: "USA" },
  { id: 2, name: "UAE" },
  { id: 3, name: "India" },
  { id: 4, name: "Australia" },
  { id: 5, name: "Canada" },
];

const ActionButtons = ({ transferList, transferAllToLeft, transferAllToRight, transferSelectedToLeft, transferSelectedToRight }) => {
  return (
    <div className={styles.actionButtons}>
      <button onClick={() => transferList(true, true)}>{">>"}</button>
      <button onClick={() => transferList(false, true)}>{">"}</button>
      <button onClick={() => transferList(false, false)}>{"<"}</button>
      <button onClick={() => transferList(true, false)}>{"<<"}</button>
    </div>
  );
};

const CountryList = ({ countries, selected, toggleSelected }) => {
  return (
    <div className={styles.list}>
      {countries.map((country) => (
        <div key={country.id}>
          <input type="checkbox" checked={selected.includes(country.id)} onChange={() => toggleSelected(country.id)} />
          {country.name}
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const [selected, setSelected] = useState([1, 2, 6]);
  const [lists, setLists] = useState({ left: MOCK_DATA, right: [{ id: 6, name: "China" }] });

  const completeList = [...lists.left, ...lists.right];

  const toggleSelected = (id) => {
    let newSelected = selected.slice();
    if (selected.includes(id)) {
      newSelected = newSelected.filter((countryId) => countryId !== id);
    } else {
      newSelected.push(id);
    }
    setSelected(newSelected);
  };

  const transferAllToLeft = () => {
    const newLeftList = lists.left.slice();
    newLeftList.push(...lists.right);
    setLists({ left: newLeftList, right: [] });
  };

  const transferAllToRight = () => {
    const newRightList = lists.right.slice();
    newRightList.push(...lists.left);
    setLists({ left: [], right: newRightList });
  };

  const transferSelectedToLeft = () => {
    const newLeftList = lists.left.slice();
    newLeftList.push(...lists.right.filter((item) => selected.includes(item.id)));
    const newRightList = lists.right.filter((item) => !selected.includes(item.id));
    setLists({ left: newLeftList, right: newRightList });
  };

  const transferSelectedToRight = () => {
    const newLeftList = lists.left.filter((item) => !selected.includes(item.id));
    const newRightList = lists.right.slice();
    newRightList.push(...lists.left.filter((item) => selected.includes(item.id)));
    setLists({ left: newLeftList, right: newRightList });
  };

  const transferList = (all, ltr) => {
    if (all) {
      setLists({ left: ltr ? [] : completeList, right: ltr ? completeList : [] });
      return;
    }
    let newLeftList = lists.left.slice();
    let newRightList = lists.right.slice();
    if (ltr) {
      newLeftList = newLeftList.filter((item) => !selected.includes(item.id));
      newRightList.push(...lists.left.filter((item) => selected.includes(item.id)));
    } else {
      newLeftList.push(...lists.right.filter((item) => selected.includes(item.id)));
      newRightList = newRightList.filter((item) => !selected.includes(item.id));
    }
    setLists({ left: newLeftList, right: newRightList });
  };

  return (
    <div className={styles.container}>
      <CountryList countries={lists.left} selected={selected} toggleSelected={toggleSelected} />
      <ActionButtons
        transferList={transferList}
        transferAllToLeft={transferAllToLeft}
        transferAllToRight={transferAllToRight}
        transferSelectedToLeft={transferSelectedToLeft}
        transferSelectedToRight={transferSelectedToRight}
      />
      <CountryList countries={lists.right} selected={selected} toggleSelected={toggleSelected} />
    </div>
  );
};

export default App;
