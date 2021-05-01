const smallScreenSizes = ['xs', 'sm'];

const isSmallScreen = (responsive: any) => {
    const arr = Object.entries(responsive).filter(([, value]) => value === true).pop();

    return smallScreenSizes.includes(arr ? arr[0] : '');
};
export default isSmallScreen;