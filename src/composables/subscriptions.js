import axios from "axios";
import { ref } from "vue";

export default function useSubscriptions() {
    const isLoadingSubscriptions = ref(false);

    const accessToken = localStorage.getItem("access_token");

    const postSubscription = async (price) => {
        isLoadingSubscriptions.value = true;
        try {
            const {
                data: { data },
            } = await axios.post(
                "checkout",
                {
                    payment_total: price,
                    payment_status: "PENDING",
                },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );

            window.location.href = data.payment_url;
        } catch (error) {
            console.error(error);
        } finally {
            isLoadingSubscriptions.value = false;
        }
    };

    return {
        isLoadingSubscriptions,
        postSubscription,
    };
}
