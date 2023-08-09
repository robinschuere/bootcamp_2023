const printBanner = (): string => {
  return 'Banner';
} 

const calculateSum = (...numbers): number => {  
	return numbers.reduce((acc, num) => (acc + num), 0);  
}  

const getOutstanding = (): string => {
  return calculateSum(1,2,3,4,5,6).toString()
}

const printOwing = (): void => {
  printBanner();

  // Print details.
  console.log("name: " + name);
  console.log("amount: " + getOutstanding());
}