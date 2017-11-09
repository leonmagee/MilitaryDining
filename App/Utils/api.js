var api = {
    getMenus() {
      const menus_url = 'https://militarydining.wpengine.com/wp-json/md/menus'
      return fetch(menus_url, {headers: {'Cache-Control': 'no-cache'}}).then((res) => res.json())


      // headers: {
      //   'Cache-Control': 'no-cache'
      // }



    }
}
module.exports = api;
