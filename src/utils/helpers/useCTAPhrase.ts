const CTA_PHRASES = [
    "my air drums are tuned!",
    "my air guitar is tuned!",
    "my vocal cords are all warmed up!",
    "it's your time to shine!",
];

export const useCTAPhrase = () => {
    const randomIndex = Math.floor(Math.random() * CTA_PHRASES.length);
    return CTA_PHRASES[randomIndex];
};
