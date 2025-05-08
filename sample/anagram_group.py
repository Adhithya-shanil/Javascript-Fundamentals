strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
hashmap ={}
for i in strs:
    sort= ''.join(sorted(i))
    if(sort in hashmap):
        hashmap[sort].append(i)
    else:
        hashmap[sort]=[i]
print(list(hashmap.values()))