import 'semantic-ui-css/semantic.min.css'
import {useState,useEffect,useRef} from 'react';
import Cards from './components/Cards';
import Image from './loader.gif'

function App() {
const [data, setData] = useState([])
const [loading,setLoading] = useState(false)
const [posts,setPosts] = useState([])

const endPage = useRef()
useEffect(() => {
   fetch('http://localhost:3004/all')
   .then(response => response.json())
   .then(data => {setData(data); setLoading(true)})
}, [])
let postLength = 10
function increasePost() {
    if(postLength <= data.length + 10) {
      setPosts(p => data.slice(0,postLength))
      postLength += 10
    }else {
      setLoading(false)
    }
}
useEffect(() => {
  if(loading) {
    const observer = new IntersectionObserver(entries => {
       if(entries[0].isIntersecting) {     
        increasePost()
       }
    },{threshold: 1});
    observer.observe(endPage.current)
  }
},[loading])

  return (
    <div className='Posts'>
      {
      posts.map((result,index) => {
        return <Cards key={index} cards={result}/>
      })
      }
      {
        loading ?
        <div className="loading" >
            <img src={Image} alt="loading" ref={endPage}/>
        </div>
      : null
      }
      </div>
  )
}

export default App;
