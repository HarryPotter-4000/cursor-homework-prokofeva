import './App.css';
import Card from './components/Card';


const author={
  name: "Anakin skywalker",
  nickname: "@dart_vader",
  content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
  date: "26 февр.",
  comment: '482',
  retweet: '146',
  likes: '887'
}

function App() {
  return (
    <Card
      name={ author.name }
      nickname={ author.nickname }
      content={ author.content }
      date={ author.date }
      comment={ author.comment }
      retweet={ author.retweet }
      likes={ author.likes }/>
  );
}

export default App;