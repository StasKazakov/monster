import axios from 'axios';

const proxyHost = 'geo.g-w.info'; 
const proxyPort = '10443';   
const proxyUser = '67H7KCqNkPAtiSCa';     
const proxyPass = 'uJkKukcsYIQHlqm0';     

const proxyConfig = {
  proxy: {
    host: proxyHost,
    port: Number(proxyPort),
    auth: {
      username: proxyUser,
      password: proxyPass,
    },
  },
};

const urls = ['https://www.google.com', 'https://www.linkedin.com'];

const checkProxies = async () => {
  for (const url of urls) {
    try {
      const { status } = await axios.get(url, proxyConfig);
      console.log(`${url}: ${status === 200 ? '200 OK' : status}`);
    } catch (error) {
      console.log(`${url}: Error - ${error.message}`);
    }
  }
};

checkProxies();