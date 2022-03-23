export const formatDate = (string: string): string =>
    // eslint-disable-next-line quotes
    new Date(string).toLocaleDateString('en-US', { year: "numeric", month: "long", day: "numeric" })
