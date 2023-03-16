import React, {useEffect} from 'react';

const App = () => {
  useEffect(()=>{
    window.location.replace("https://apisummary.notion.site/0821f3f195c44bff9b9adff8c56e56ad?v=5df958f85f944fb7bd477cc3c6810877")  
  }, [])
  return <div>Welcome to Next.js!</div>;
};

export default App;
