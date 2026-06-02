import type { IPricing } from "../types";

export const pricingData: IPricing[] = [
    {
        name: "Starter",
        price: 29,
        period: "month",
        features: [
            "50 AI thumbnails",
            "Starter templates",
            "HD downloads",
            "No watermark",
            "Basic analytics",
            "Community support"
        ],
        mostPopular: false
    },
    {
        name: "Creator Pro",
        price: 79,
        period: "month",
        features: [
            "Unlimited thumbnails",
            "Premium templates",
            "4K downloads",
            "A/B testing",
            "Brand kits",
            "Advanced analytics",
            "Priority support"
        ],
        mostPopular: true
    },
    {
        name: "Studio",
        price: 199,
        period: "month",
        features: [
            "All Pro features",
            "Dedicated manager",
            "Custom AI training",
            "Team workspace",
            "Bulk generation",
            "API access",
            "24/7 support"
        ],
        mostPopular: false
    }
];
