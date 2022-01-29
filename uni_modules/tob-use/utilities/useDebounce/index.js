import { ref, watch } from 'vue'

/**
 * 使用防抖
 */
export const useDebounce = (
	value,
	ms = 200,
	options = {}
) => {
	if (ms <= 0) return value

	const debounced = ref(value.value)

	const updater = useDebounceFn(
		() => {
			debounced.value = value.value
		},
		ms,
		options
	)

	watch(value, () => updater())

	return debounced
}
