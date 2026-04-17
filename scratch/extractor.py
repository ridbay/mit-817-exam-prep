
import re
import json

with open('/Users/ridbay/Projects/817_practice/preview.html', 'r', encoding='utf-8') as f:
    content = f.read()

def extract_var(var_name):
    match = re.search(f'const {var_name} = (\[.*?\]);', content, re.DOTALL)
    if match:
        return match.group(1)
    return None

study_guide = extract_var('studyGuide')
flashcards = extract_var('flashcards')
quizzes = extract_var('quizzes')
mcqs = extract_var('mcqs')

data = {
    'studyGuide': study_guide,
    'flashcards': flashcards,
    'quizzes': quizzes,
    'mcqs': mcqs
}

# Save as JS file for easy import/copy
with open('/Users/ridbay/Projects/817_practice/scratch/extracted_data.js', 'w', encoding='utf-8') as f:
    f.write(f"export const studyGuide = {study_guide};\n")
    f.write(f"export const flashcards = {flashcards};\n")
    f.write(f"export const quizzes = {quizzes};\n")
    f.write(f"export const mcqs = {mcqs};\n")

print("Data extracted successfully to scratch/extracted_data.js")
