import os

data_file = "/Users/ridbay/Projects/817_practice/src/data.js"
new_quizzes_file = "/Users/ridbay/Projects/817_practice/scratch/quizzes_output.js"

with open(data_file, 'r') as f:
    lines = f.readlines()

new_quizzes_content = ""
with open(new_quizzes_file, 'r') as f:
    new_quizzes_content = f.read()

# Find the start and end indices
start_idx = -1
end_idx = -1

for i, line in enumerate(lines):
    if "export const quizzes = [" in line:
        start_idx = i
    if start_idx != -1 and i > start_idx:
        # We look for the closing ]; of quizzes
        # The next section is export const mcqs = [
        if "export const mcqs = [" in line:
            end_idx = i
            break

if start_idx == -1 or end_idx == -1:
    print(f"Error: Could not find markers. start_idx={start_idx}, end_idx={end_idx}")
    exit(1)

# Combine: 
# everything before line start_idx
# new content
# everything from line end_idx (which is export const mcqs)
before = lines[:start_idx]
after = lines[end_idx:]

with open(data_file, 'w') as f:
    f.writelines(before)
    f.write(new_quizzes_content)
    f.writelines(after)

print(f"Successfully overhauled quizzes in {data_file}")
