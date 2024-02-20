function Transactions() {
    const transactions = ["notebook", "notebook", "keyboard", "mouse", "mouse"];
    const handleClick = () => {
      let map = {};
      transactions.forEach((item) => {
        if (map[item]) {
          map[item]++;
        } else {
          map[item] = 1;
        }
      });
      // console.log(Object.values(map))
      let groupedItem = {};
      //This loop goes through the map object. For each item, it retrieves the occurrence count. If the occurrence count already exists in groupedItem, it adds the item to the corresponding array. If not, it initializes a new array for that occurrence count.
      for (let item in map) {
        // console.log(item) - notebook, keyboard, mouse
        let occurenceCount = map[item];
        if (groupedItem[occurenceCount]) {
          groupedItem[occurenceCount].push(item);
        } else {
          groupedItem[occurenceCount] = [item];
        }
      }
      console.log(groupedItem);
    };
  
    return (
      <>
        <div>
          <h1>Transactions</h1>
          <button onClick={handleClick}>Click</button>
        </div>
      </>
    );
  }
  export default Transactions;
  