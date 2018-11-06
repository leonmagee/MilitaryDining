var api_key = '37scOPgDvdP62PmXvMrjVjN'

var api = {
	getMenus() {
		const menus_url = 'https://militarydining.wpengine.com/wp-json/md/menus'
		return fetch(menus_url, {headers: {'Cache-Control': 'no-cache'}}).then((res) => res.json())
	},
	getMenuItems() {
		const menu_items_url = 'https://militarydining.wpengine.com/wp-json/md/menu_items'
		return fetch(menu_items_url, {headers: {'Cache-Control': 'no-cache'}}).then((res) => res.json())
	},
	createNewUser() {
		const new_user_url = 'https://militarydining.wpengine.com/wp-json/md/create_user/id-sldfjsdf-skdfjsdf/Corporalz'
		return fetch(new_user_url, {headers: {'Cache-Control': 'no-cache'}}).then((res) => res.json())
	},
	testPostRequest() {
		const test_url = 'https://militarydining.wpengine.com/wp-json/md/post_tester'
    	return fetch(test_url, {
    		method: 'POST',
    		//headers: {'Content-Type': 'x-www-form-urlencoded'},
    		headers: {'Content-Type': 'application/json'},
    		//header: {}
    		body: JSON.stringify({key: api_key, title: 'brand new title', body: 'brand new body'})
    	}).then((res) => res.json())
    }
}
module.exports = api;
