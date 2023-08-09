let numberOfLateDeliveries = 0

export const incrementNumberOfLateDeliveries = (): void => {
  numberOfLateDeliveries += 1
}

const moreThanFiveLateDeliveries = (): boolean => {
  return numberOfLateDeliveries > 5;
}

const getRating = (): number => {
  return moreThanFiveLateDeliveries() ? 2 : 1;
}