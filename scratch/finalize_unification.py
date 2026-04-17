import json

def finalize_unification():
    data_path = 'src/data.js'
    unified_data_path = 'scratch/unified_quizzes.json'
    
    with open(data_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    with open(unified_data_path, 'r', encoding='utf-8') as f:
        unified_quizzes = json.load(f)
        
    q_start = -1
    m_end = -1
    
    for i, line in enumerate(lines):
        if 'export const quizzes =' in line:
            q_start = i
        if 'export const mcqs =' in line:
            # We want to find the end of the mcqs array to delete it
            for j in range(i, len(lines)):
                if '];' in lines[j]:
                    m_end = j
                    break
            break
            
    if q_start != -1 and m_end != -1:
        # Construct the new quizzes block
        serialized = json.dumps(unified_quizzes, indent=2)
        new_block = [f"export const quizzes = {serialized};\n"]
        
        # We replace EVERYTHING from q_start to m_end
        # This removes both quizzes and mcqs and replaces with one unified quizzes
        final_lines = lines[:q_start] + new_block + lines[m_end+1:]
        
        with open(data_path, 'w', encoding='utf-8') as f:
            f.writelines(final_lines)
        print(f"Successfully unified quizzes. Final file line count: {len(final_lines)}")
    else:
        print(f"FAILED to find boundaries: q_start={q_start}, m_end={m_end}")

if __name__ == "__main__":
    finalize_unification()
