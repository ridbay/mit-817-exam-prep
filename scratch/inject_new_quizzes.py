import json
import os

def update_data_js():
    data_path = 'src/data.js'
    new_data_path = 'scratch/new_quizzes_data.json'
    
    with open(data_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    with open(new_data_path, 'r', encoding='utf-8') as f:
        new_quizzes = json.load(f)
        
    start_idx = -1
    end_idx = -1
    
    for i, line in enumerate(lines):
        if 'export const quizzes =' in line:
            start_idx = i
        if start_idx != -1 and 'export const mcqs =' in line:
            # We look for the ]; right before it
            for j in range(i-1, start_idx, -1):
                if '];' in lines[j]:
                    end_idx = j
                    break
            break
            
    if start_idx != -1 and end_idx != -1:
        # Construct the new content
        new_qs_serialized = json.dumps(new_quizzes, indent=2)
        # We need it to be: export const quizzes = [ ... ];
        new_block = [f"export const quizzes = {new_qs_serialized};\n"]
        
        # Replace the range
        # Note: end_idx is inclusive of the ]; line
        final_lines = lines[:start_idx] + new_block + lines[end_idx+1:]
        
        with open(data_path, 'w', encoding='utf-8') as f:
            f.writelines(final_lines)
        print(f"Successfully replaced quizzes at lines {start_idx+1} to {end_idx+1}")
    else:
        print(f"FAILED to find boundaries: start={start_idx}, end={end_idx}")

if __name__ == "__main__":
    update_data_js()
