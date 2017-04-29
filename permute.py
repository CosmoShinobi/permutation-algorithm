def isPermutation(A, B):
	primes = [2.0, 3.0, 5.0, 7.0, 11.0, 13.0, 17.0, 19.0, 23.0, 29.0]
	product = 1.0
	for j in range(len(A)):
		product *= primes[int(A[j])]
		product /= primes[int(B[j])]
	return product


print(isPermutation("02020", "2020"))
