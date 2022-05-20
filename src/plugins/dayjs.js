import dayjs from 'dayjs';

export default {
	install(app) {
		app.config.globalProperties.$dayjs = dayjs;
		app.provide('dayjs', dayjs);
	},
};
