import { useState } from 'react';
// Q.Write a Code for the below requirement Sample Inputs & Outputs
// Input :
// List1 = [1,2,3,4,5,6,7,8,9,10] and Split_Value = 3
// Expected Output is (Split Like this)
// [[1,2,3],[4,5,6],[7,8,9],[10]]

// Input :
// List1 = [1,2,3,4,5,6,7,8,9,10] and Split_Value = 5
// Expected Output is (Split Like this)
// [[1,2,3,4,5],[6,7,8,9,10]]

const SplitSubArrays = () => {
    const [output, setOutput] = useState([]);
    const list = [1,2,3,4,5,6,7,8,9,10];
    const handleClick = (Split_Value) => {
      let length = list.length;
      let subArrays = [];
     
      for(let i = 0; i < length; i += Split_Value){
        const subArray = list.slice(i, i + Split_Value);
        subArrays.push(subArray);
      }
      console.log(subArrays);
      setOutput(subArrays);
    }
  
  
    return (
      <>
        <div>
          <button onClick={() => handleClick(3)}>Click</button>
          <h1>{output.map(item => <h1>[{Object.values(item).join(',')}]</h1> )}</h1>
      
        </div>
     
      </>
    )
}

export default SplitSubArrays