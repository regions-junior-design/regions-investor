import React from 'react';

export function GenClient() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [response, setResponse] = useState([]);

    const url = " ";
  
    useEffect(() => {
      fetch(url)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setResponse(result);
          },
       
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {response}
        </ul>
      );
    }
  }

  