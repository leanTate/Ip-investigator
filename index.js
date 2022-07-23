const OPTIONS ={
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cee22c3fc6mshdc9301a48b36307p1f84cajsnbd5e0fdb5f21',
		'X-RapidAPI-Host': 'ip-geolocation-and-threat-detection.p.rapidapi.com'
	}
};

const fetchIpInfo = ip =>{
  return fetch(`https://ip-geolocation-and-threat-detection.p.rapidapi.com/${ip}`,OPTIONS)
  .then(response => response.json())
  .catch(err=>console.error(err));
}

const $ = selector =>document.querySelector(selector);

const $form = $('#form');
const $input = $('#input');
const $submit = $('#submit');
const $results = document.getElementById('results');

$form.addEventListener('submit', async e => {
  e.preventDefault();
  const {value} = $input;
  if(!value) return;
  $submit.setAttribute('disabled',true);
  $submit.setAttribute('aria-busy',true);
  const ipInfo = await fetchIpInfo(value);
  $results.innerHTML=JSON.stringify(ipInfo,null,2);
  $submit.removeAttribute('disabled',true);
  $submit.removeAttribute('aria-busy',true);
})