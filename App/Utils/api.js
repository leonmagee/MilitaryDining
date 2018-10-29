var api = {
    getMenus() {
      const menus_url = 'https://militarydining.wpengine.com/wp-json/md/menus'
      return fetch(menus_url, {headers: {'Cache-Control': 'no-cache'}}).then((res) => res.json())
    },
    getMenuItems() {
      const menu_items_url = 'https://militarydining.wpengine.com/wp-json/md/menu_items'
      return fetch(menu_items_url, {headers: {'Cache-Control': 'no-cache'}}).then((res) => res.json())
    }
}
module.exports = api;
