export default function initFetchBitcoin() {
  function fetchBitcoin(url) {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        const btcPreco = document.querySelector('.btc-preco');
        btcPreco.innerText = (100 / json.BRL.sell).toFixed(4);
      }).catch((erro) => {
        console.log(Error(erro));
      });
  }
  fetchBitcoin('https://blockchain.info/ticker');
}
