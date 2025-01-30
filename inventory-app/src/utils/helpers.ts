// src/utils/helpers.ts

export function formatCurrency(amount: number): string {
    return `$${amount.toFixed(2)}`;
}

export function generateUniqueId(): string {
    return 'id-' + Math.random().toString(36).substr(2, 9);
}