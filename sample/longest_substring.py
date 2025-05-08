def longestSubstring(str):
    left=0
    maxlen=0
    myset=set()

    for right in range(len(str)):
        while(str[right] in myset):
             myset.remove(str[left])
             left+=1
        myset.add(str[right])
        maxlen=max(maxlen,right-left+1)
    return maxlen
print(longestSubstring("bbbbabcdecccbb")
)