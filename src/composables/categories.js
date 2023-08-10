import axios from "axios";
import { reactive, ref } from "vue";
import { useRoute } from "vue-router";

export default function useCategories() {
    const router = useRoute();

    const categories = ref([]);
    const category = reactive({
        name: "",
    });
    const categoryProducts = ref([]);
    const isLoadingCategories = ref(true);

    const getTopCategories = async () => {
        try {
            const {
                data: {
                    data: { data: data },
                },
            } = await axios.get("categories", {
                params: { limit: 4 },
            });

            categories.value = data;
        } catch (error) {
            console.error(error);
        } finally {
            isLoadingCategories.value = false;
        }
    };

    const getAllCategories = async () => {
        try {
            const {
                data: {
                    data: { data: data },
                },
            } = await axios.get("categories", { params: { limit: 28 } });

            categories.value = data;
        } catch (error) {
            console.error(error);
        } finally {
            isLoadingCategories.value = false;
        }
    };

    const getAllProductsByCategory = async () => {
        try {
            const {
                data: { data: data },
            } = await axios.get("categories", {
                params: { show_product: 1, id: router.params.id },
            });

            category.name = data.name;
            categoryProducts.value = data.products;
        } catch (error) {
            console.error(error);
        } finally {
            isLoadingCategories.value = false;
        }
    };

    return {
        isLoadingCategories,
        category,
        categories,
        categoryProducts,
        getTopCategories,
        getAllCategories,
        getAllProductsByCategory,
    };
}
