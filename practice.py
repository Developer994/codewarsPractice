#
#
# Kata 1
# We need a function that can transform a number (integer) into a string.

# What ways of achieving this do you know?

# Examples (input --> output):
# 123  --> "123"
# 999  --> "999"
# -100 --> "-100"


# def number_to_string(num):
#     return str(num)


# print(number_to_string(123))

#
#
# Kata 2

# Trolls are attacking your comment section!

# A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

# Your task is to write a function that takes a string and return a new string with all vowels removed.

# For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

# Note: for this kata y isn't considered a vowel.

s = 'abc12321cba'
noVowels = s.translate({ord(i): None for i in 'aAeEiIoOuU'})
print(noVowels)
