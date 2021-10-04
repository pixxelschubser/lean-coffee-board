export default function getCards(){
	return fetch('/api/cards')
      .then(response => response.json())
}