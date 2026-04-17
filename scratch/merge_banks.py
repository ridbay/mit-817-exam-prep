import json
import re

def clean_text(text):
    return re.sub(r'\s+', ' ', text).strip().lower()

def merge_data():
    # 1. Load the primary 177 quizzes (from scratch json which was just synced)
    with open('scratch/new_quizzes_data.json', 'r', encoding='utf-8') as f:
        primary_quizzes = json.load(f)
    
    # 2. Extract the mcqs from data.js
    # Instead of parsing data.js with regex (risky), we'll read the file and extract the block
    with open('src/data.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Match the mcqs array content
    mcqs_match = re.search(r'export const mcqs = \[(.*?)\];', content, re.DOTALL)
    if not mcqs_match:
        print("FAILED to find mcqs in data.js")
        return
    
    mcqs_raw = mcqs_match.group(1)
    # This raw content has bare keys and might not be valid JSON. 
    # We'll use a simple regex to turn it into JSON-ish or just parse it manually
    # Actually, let's use a more robust way to extract individual objects
    obj_matches = re.findall(r'\{(.*?)\}', mcqs_raw, re.DOTALL)
    
    mcqs = []
    for obj_str in obj_matches:
        # Extract fields using regex
        topic = re.search(r'topic:\s*"(.*?)"', obj_str)
        diff = re.search(r'difficulty:\s*"(.*?)"', obj_str)
        quest = re.search(r'question:\s*"(.*?)"', obj_str, re.DOTALL)
        # Handle options array
        opts_match = re.search(r'options:\s*\[(.*?)\]', obj_str, re.DOTALL)
        ans = re.search(r'answer:\s*"(.*?)"', obj_str)
        exp = re.search(r'explanation:\s*"(.*?)"', obj_str, re.DOTALL)
        
        if quest and ans:
            opts = []
            if opts_match:
                opts = [o.strip().strip('"') for o in opts_match.group(1).split(',')]
                opts = [o for o in opts if o] # filter empty
            
            mcqs.append({
                "topic": topic.group(1) if topic else "General",
                "difficulty": diff.group(1) if diff else "Medium",
                "question": quest.group(1).replace('\n', ' ').strip(),
                "options": opts,
                "answer": ans.group(1),
                "explanation": exp.group(1).replace('\n', ' ').strip() if exp else ""
            })

    # 3. Filtering Logic
    # We want to keep specialized topics or unique questions
    topics_to_keep = [
        "Modeling and UML",
        "Design and Architecture",
        "Cloud & Microservices",
        "Cloud and Modern Architecture",
        "Cloud, Microservices, Security, Reliability",
        "Process Models",
        "DevOps, Teams, Ethics",
        "Maintenance & Process",
        "UML Nuances",
        "Quality and Testing",
        "Advanced Testing & Quality",
        "Management / Ethics"
    ]
    
    existing_questions = {clean_text(q['question']) for q in primary_quizzes}
    merged_quizzes = list(primary_quizzes)
    
    added_count = 0
    for m in mcqs:
        cleaned_q = clean_text(m['question'])
        # Keep if topic matches specialized list OR if it's not in primary
        if m['topic'] in topics_to_keep or cleaned_q not in existing_questions:
            if cleaned_q not in existing_questions:
                merged_quizzes.append(m)
                existing_questions.add(cleaned_q)
                added_count += 1
                
    print(f"Primary: {len(primary_quizzes)}")
    print(f"Added from MCQs: {added_count}")
    print(f"Total Unified: {len(merged_quizzes)}")
    
    with open('scratch/unified_quizzes.json', 'w', encoding='utf-8') as f:
        json.dump(merged_quizzes, f, indent=2)

if __name__ == "__main__":
    merge_data()
