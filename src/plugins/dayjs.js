// https://vuejs.org/guide/reusability/plugins.html#introduction
import dayjs from 'dayjs';

export default {
	install(app) {
		app.provide('dayjs', dayjs);
	},
};
