import axios from 'axios';
import { isRef, ref, unref, watchEffect } from 'vue';

axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;

const defaultConfig = {
	method: 'get',
};

const defaultOptions = {
	immediate: true,
};

export const useAxios = (url, config = {}, options = {}) => {
	const response = ref(null);
	const data = ref(null);
	const error = ref(null);
	const loading = ref(false);

	const { onSuccess, onError, immediate } = {
		...defaultOptions,
		...options,
	};

	const { params } = config;
	const execute = body => {
		data.value = null;
		error.value = null;
		loading.value = true;
		axios(unref(url), {
			...defaultConfig,
			...config,
			params: unref(params),
			data: typeof body === 'object' ? body : {},
		})
			.then(res => {
				response.value = res;
				data.value = res.data;
				if (onSuccess) {
					onSuccess(res);
				}
			})
			.catch(err => {
				error.value = err;
				if (onError) {
					onError(err);
				}
			})
			.finally(() => {
				loading.value = false;
			});
	};
	if (isRef(params) || isRef(url)) {
		watchEffect(execute);
	} else {
		if (immediate) {
			execute();
		}
	}
	return {
		response,
		data,
		error,
		loading,
		execute,
	};
};
