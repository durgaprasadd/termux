def isPrime(num):
    i = 2
    while i < num:
        if num%i == 0:
            return 'false'
        i = i + 1
    return 'true'

limit = input("")
index = 2;
count = 0;
while count < int(limit):
    if isPrime(index) == "true":
        count = count + 1
        prime = index
    index = index + 1

print (prime)
