export default function getCards(){
	fetch('/api/cards')
      .then(response => response.json())
}