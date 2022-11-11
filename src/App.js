import NavBar from './NavBar'
import './App.css'

function App(props) {
  return (
	<div className='page-content'>
		<h1>{ props.title }</h1>
		<NavBar />
		<br />
	</div>
  );
}

export default App;
