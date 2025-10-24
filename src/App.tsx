import {useEffect, useState} from "react";
import '/App.css'


function App() {
  const [user, setUssr] = useState<{login:string, avatar_url:string}[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    fetch("https://api.github.com/search/users?q="+searchTerm+"+in:login")
        .then((response) => response.json())
        .then((data) => {
          if(data.items != null)  setUssr(data.items);
          console.log(data);
        })
        .catch((error) => console.log(error));
  }, [searchTerm]);

  return(
      <>
        <div id={"containera"}>
          <input id={"search"}
                 type="text"
                 placeholder="Type here to search"
          />
          <button id={"button"} onClick={() => {setSearchTerm((document.getElementById("search") as HTMLInputElement).value)}}>search</button>
        </div>
        {user.map(item =>
            <div id={"userName"}>
              <img id={"image"} src={item.avatar_url} alt={item.login} height="300px" width="300px"/>
              {item.login}
            </div>

        )
        }

      </>
  );

}

export default App