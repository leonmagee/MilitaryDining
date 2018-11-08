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
	getRatings() {
		const ratings_url = 'https://militarydining.wpengine.com/wp-json/md/mess_hall_ratings?sldjf'
		return fetch(ratings_url, {headers: {'Cache-Control': 'no-cache'}}).then((res) => res.json())
	},
   	updateStarRating(user_id, mess_hall_id, rating) {
		const ratings_url = 'https://militarydining.wpengine.com/wp-json/md/rate_mess_hall'
    	return fetch(ratings_url, {
    		method: 'POST',
    		headers: {'Content-Type': 'application/json'},
    		body: JSON.stringify({key: api_key, user_id: user_id, mess_hall_id: mess_hall_id, rating: rating})
    	}).then((res) => res.json())
    },
    eatFood(user_id, food_id) {
    	const eat_url = ''
    	return fetch(eat_url, {
    		method: 'POST',
    		headers: {'Content-Type': 'application/json'},
    		body: JSON.stringify({key: api_key, user_id: user_id, food_id})
    	}).then((res) => res.json())
    }
}
module.exports = api;
