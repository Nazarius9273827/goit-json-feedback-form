export function saveFeedback(name, email, message) {
    const feedback = {
        name,
        email,
        message,
        date: new Date().toISOString(),
    };

    console.log('Отримані дані форми:', feedback);
} 