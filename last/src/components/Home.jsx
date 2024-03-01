import { useEffect, useState } from 'react';
import data from '../components/data.json'; // Adjust the path accordingly

const Home = () => {
  const [catNames, setCatNames] = useState([]);

  useEffect(() => {
    console.log(data)
    // Extracting cat_name from the imported data
    const catNamesArray = data.productData.map((item) => item.image);   

    setCatNames(catNamesArray);
  }, []);
  

  return (
    <div>
      <h1>Category Names:</h1>
      <ul> 
        {catNames.map((catName, index) => (
          <li key={index}>{catName}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
