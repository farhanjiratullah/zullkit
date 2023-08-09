import axios from "axios";
import { ref } from "vue";

export default function useCategories() {
    const topCategories = ref([]);
    const isLoadingCategories = ref(true);

    const getTopCategories = async () => {
        try {
            const {
                data: {
                    data: { data: data },
                },
            } = await axios.get("categories");

            topCategories.value = data;
        } catch (error) {
            console.error(error);
        } finally {
            isLoadingCategories.value = false;
        }
    };

    return { isLoadingCategories, topCategories, getTopCategories };
}
