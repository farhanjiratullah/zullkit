import axios from "axios";
import { ref } from "vue";

export default function useProducts() {
    const newItems = ref([]);
    const isLoadingProducts = ref(true);

    const getNewItems = async () => {
        try {
            const {
                data: {
                    data: { data: data },
                },
            } = await axios.get("products");

            newItems.value = data;
        } catch (error) {
            console.error(error);
        } finally {
            isLoadingProducts.value = false;
        }
    };

    return { isLoadingProducts, newItems, getNewItems };
}
