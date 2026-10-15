/**
 * AOS effect of an item of a two-column grid: it comes from the side where it is (a card of the left
 * column fades in from the left, one of the right column from the right). On a narrow screen the grid
 * has one column, so the items come from the bottom of the page.
 */
export const gridEffect = (index: number, twoColumns: boolean) =>
    !twoColumns ? "fade-up" : index % 2 === 0 ? "fade-right" : "fade-left";
