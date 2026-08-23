def find_it(seq:list[int])->int:
    counter = {}
    for n in seq:
        if n in counter:
            counter[n]+=1
        else:
            counter[n]=1
    for n in counter:
        if counter[n] % 2 != 0:
            return n
print(find_it([0, 1, 0, 1, 0]))