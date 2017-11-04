var api = {
    getMenus() {
      const menus_url = 'https://militarydining.wpengine.com/wp-json/md/menus'
      return fetch(menus_url).then((res) => res.json())
    }
}
module.exports = api;
