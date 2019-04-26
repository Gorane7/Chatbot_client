<template>
	<div class="container">
		<h1>What programming language is your favourite?</h1>
		<div class="add-language">
			<input type="text" id="add-language" v-model="text" placeholder="Add language">
			<button v-on:click="addLanguage">Add!</button>
		</div>
		<p class="error" v-if="error">{{error}}</p>
		<div class="language-container">
			<ul>
				<li
					v-for="language in languages"
					v-bind:key="language._id"
					v-bind:name="language.name"
				>
					{{language.name}} has {{language.votes}} votes.
					<button v-on:click="voteLanguage(language.name)">Vote</button>
					<a href="#" v-on:click="deleteLanguage(language._id)">Delete</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import LanguageService from '../LanguageService'

	export default {
		name: 'LanguageComponent',
		data() {
			return {
				languages: [],
				error: '',
				text: ''
			}
		},
		async created() {
			this.loadLanguages();
		},
		methods: {
			async addLanguage() {
				await LanguageService.insertLanguage(this.text);
				this.text = '';
				this.loadLanguages();
			},
			async voteLanguage(name) {
				await LanguageService.insertLanguage(name);
				this.loadLanguages();
			},
			async deleteLanguage(id) {
				await LanguageService.deleteLanguage(id);
				this.loadLanguages();
			},
			async loadLanguages() {
				try {
					this.languages = await LanguageService.getLanguages();
					this.languages.sort(function(a,b){return b.votes - a.votes});
				} catch(err) {
					this.error = (err);
				}
			}
		}
	}
</script>
