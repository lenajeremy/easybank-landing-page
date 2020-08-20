""" def fibonacciSequence(value):
    sequence = [1, 2]
    while sequence[-1] < value:
        newElement = sequence[-1] + sequence[-2];
        sequence.append(newElement);
    sequence.pop()
    return sequence
sequence = fibonacciSequence(4000000)
evenSum = 0;
for element in sequence:
    if (element % 2 == 0):
        evenSum += element
print(evenSum)

arrays = [1, 2, 3, 4, 5 ,6]
array.remove(5);
print(array)
def removeElement(array, element):
    newArray = [];
    for elem in array:
        if(elem != element):
            newArray.append(elem)
        else: continue
    return newArray
print(removeElement(arrays, 2));
print(removeElement(arrays, 7));
print(list(map(lambda x: x**2, arrays)))
"""
def isPrimeNumber(number):
    noPrime = 0
    for num in range(2, number):
        if (number%num == 0 and num != number):
            noPrime+=1
    if noPrime > 0:
        return False
    else: return True
def allPrimeNumbersToLimit(limit):
    primeNumbers = []
    for numbers in range(2, limit + 1):
        if isPrimeNumber(numbers):
            primeNumbers.append(numbers)
    return primeNumbers
def primeFactors(number):
    primeFactor = []
    for numbers in allPrimeNumbersToLimit(number):
        if number%numbers == 0:
            primeFactor.append(numbers)
    return primeFactor
print(primeFactors(67));