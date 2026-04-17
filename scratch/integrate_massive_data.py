import json

data_file = "/Users/ridbay/Projects/817_practice/src/data.js"
ext_quiz_file = "/Users/ridbay/Projects/817_practice/scratch/extended_quizzes.js"
theory_bank_file = "/Users/ridbay/Projects/817_practice/scratch/theory_bank.js"

with open(data_file, 'r') as f:
    lines = f.readlines()

new_quizzes_data = []
with open(ext_quiz_file, 'r') as f:
    content = f.read()
    # Extract the JSON array
    json_str = content.split("export const extendedQuizzes = ")[1].strip().rstrip(";")
    new_quizzes_data = json.loads(json_str)

theory_bank_data = []
with open(theory_bank_file, 'r') as f:
    content = f.read()
    json_str = content.split("export const theoryBank = ")[1].strip().rstrip(";")
    theory_bank_data = json.loads(json_str)

# 1. Update quizzes array
# Find the quizzes array start and end
q_start = -1
q_end = -1
for i, line in enumerate(lines):
    if "export const quizzes = [" in line:
        q_start = i
    if q_start != -1 and i > q_start:
        if "export const mcqs = [" in line:
            # We want the ]; right before this
            q_end = i - 1
            break

if q_start == -1 or q_end == -1:
    print(f"Error finding quizzes. q_start={q_start}, q_end={q_end}")
    exit(1)

# The current quizzes array ends at lines[q_end] which should be ];\n or something similar.
# We will insert new questions before that ];

# Actually, it might be easier to rewrite the whole quizzes block
# Everything before q_start
# Current quizzes + expanded
# Everything after q_end

# Let's extract current quizzes from the file to be safe
current_quizzes_str = "".join(lines[q_start:q_end+1])
# We need to turn this into a list. This is risky if it's not valid JSON yet (it's JS).
# Better: Just find the ]; and insert before it.

# Let's find the LAST ]; before export const mcqs
insert_pos = -1
for i in range(q_end, q_start, -1):
    if "];" in lines[i]:
        insert_pos = i
        break

if insert_pos == -1:
    print("Could not find insertion point")
    exit(1)

# We'll take lines up to insert_pos
# Remove the ]; from lines[insert_pos]
# Add new questions (formatted as JS)
# Add ];
# Add the rest

lines[insert_pos] = lines[insert_pos].replace("];", ",")
new_qs_serialized = json.dumps(new_quizzes_data, indent=2)[1:-1] # strip [ and ]
lines.insert(insert_pos + 1, new_qs_serialized + "\n];\n")

# 2. Append theory bank at the end
lines.append("\nexport const theoryBank = " + json.dumps(theory_bank_data, indent=2) + ";\n")

with open(data_file, 'w') as f:
    f.writelines(lines)

print("Successfully integrated 130 quizzes and 25 theory bank items into data.js")
