
let contextImages = () => ({ default: ''});
try {
    contextImages = require.context('../assets/heroes', true );
} catch (error) {}
export const heroImages = image => ( contextImages(`./${image}.jpg`).default);

