
const querystring = window.location.search; 
const urlParams = new URLSearchParams(querystring);
if (urlParams.get('lang')) {
  const lang = urlParams.get('lang');
  changeLanguage(lang);
}


async function changeLanguage(lang) {

  const newURL = window.location.protocol + '//' + window.location.host + window.location.pathname + '?lang=' + lang;
  window.history.replaceState({}, '', newURL);

 
  const response = await fetch(`./i18n/${lang}.json`);
  const data = await response.json();

 

  document.getElementById('t-first-name').innerHTML = data.form.first_name;
  document.getElementById('t-last-name').innerHTML = data.form.last_name;
  document.getElementById('last-name').placeholder = data.form.last_name_ph;
  document.getElementById('t-email').innerHTML = data.form.email;
  document.getElementById('t-password').innerHTML = data.form.password;
  document.getElementById('t-message').innerHTML = data.form.message;
  document.getElementById('t-phone').innerHTML = data.form.phone;
  document.getElementById('t-birthday').innerHTML = data.form.birthday;
  document.getElementById('t-genre').innerHTML = data.form.genre.main;
  document.getElementById('t-male').innerHTML = data.form.genre.male;
  document.getElementById('t-female').innerHTML = data.form.genre.female;
  document.getElementById('t-other').innerHTML = data.form.genre.other;
  document.getElementById('t-pctype').innerHTML = data.form.pctype.main;
  document.getElementById('t-domestic').innerHTML = data.form.pctype.domestic;
  document.getElementById('t-gaming').innerHTML = data.form.pctype.gaming;
  document.getElementById('t-programming').innerHTML = data.form.pctype.programming;
  document.getElementById('t-continent').innerHTML = data.form.continent.main;
  document.getElementById('t-europe').innerHTML = data.form.continent.europe;
  document.getElementById('t-asia').innerHTML = data.form.continent.asia;
  document.getElementById('t-samerica').innerHTML = data.form.continent.samerica;
  document.getElementById('t-namerica').innerHTML = data.form.continent.namerica;
  document.getElementById('t-africa').innerHTML = data.form.continent.africa;
  document.getElementById('t-australia').innerHTML = data.form.continent.australia;
  document.getElementById('t-register').innerHTML = data.form.register;
}

