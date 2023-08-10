import axios from "axios";
import { ref } from "vue";

export default function useProducts() {
    const products = ref([]);
    const isLoadingProducts = ref(true);

    const getNewItems = async () => {
        try {
            const {
                data: {
                    data: { data: data },
                },
            } = await axios.get("products", { params: { limit: 3 } });

            products.value = data;
        } catch (error) {
            console.error(error);
        } finally {
            isLoadingProducts.value = false;
        }
    };

    return { isLoadingProducts, products, getNewItems };
}
