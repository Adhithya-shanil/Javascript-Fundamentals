strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
hashmap = {}

for i in strs:
    count = [0] * 26  # Create a list to count occurrences of characters

    for char in i:
        count[ord(char) - ord('a')] += 1  # Count each character in the string

    # Use the tuple of the count list as the key
    if tuple(count) in hashmap:
        hashmap[tuple(count)].append(i)
    else:
        hashmap[tuple(count)] = [i]

# Print the grouped anagrams
print(list(hashmap.values()))
