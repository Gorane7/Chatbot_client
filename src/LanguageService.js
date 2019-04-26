import axios from 'axios';

const url = 'api/languages/';

class LanguageService {
	static getLanguages() {
		return new Promise(async (resolve, reject) => {
			try {
				const res = await axios.get(url);
				const data = res.data;
				resolve(
					data.map(language => ({
						...language
					}))
				);
			} catch(err) {
				reject(err);
			}
		});
	}

	static insertLanguage(text) {
		return axios.post(url, {
			text
		});
	}

	static deleteLanguage(id) {
		return axios.delete(`${url}${id}`);
	}
}

export default LanguageService;
