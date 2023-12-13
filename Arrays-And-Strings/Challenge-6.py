# O(N) time complexity and 0(N) space complexity

def compressed(string):
    result = []
    pointer_one = 0
    pointer_two = 1

    while pointer_one < len(string):
        if pointer_two < len(string) and string[pointer_one] == string[pointer_two]:
            pointer_two += 1
        else:
            count = pointer_two - pointer_one
            result.append(f"{string[pointer_one]}{count}")
            pointer_one = pointer_two
            pointer_two += 1

    compressed_string = "".join(result)
    return string if len(string) <= len(compressed_string) else compressed_string

print(compressed('aabcccccaaa'))
