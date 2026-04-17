import json
import re

def parse_quizzes(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    quizzes = []
    current_q = None
    current_topic = "Foundations" # Default
    
    # Simple topic mapping based on section headers
    topic_map = {
        "SECTION A": "Foundations",
        "SECTION B": "Software Products",
        "SECTION C": "Product Management",
        "SECTION D": "Agile Development",
        "SECTION E": "Extreme Programming (XP)",
        "SECTION F": "Scrum",
        "SECTION G": "Features, Personas, Scenarios",
        "SECTION H": "Product Backlog & Sprints",
        "SECTION I": "Team & Scrum Practices",
        "SECTION J": "General Concepts",
        "SECTION K": "Features / Scenarios",
        "SECTION L": "Product Vision",
        "SECTION M": "Prototyping",
        "SECTION N": "Agile Practices",
        "SECTION O": "Scrum",
        "SECTION P": "Backlog Management",
        "SECTION Q": "Team & Coordination",
        "SECTION R": "Quality & Testing",
        "SECTION S": "General Concepts",
        "REQUIREMENTS ENGINEERING": "Requirements Engineering"
    }

    for l in lines:
        l = l.strip()
        if not l: continue
        
        # Check for section headers
        found_header = False
        for header, topic in topic_map.items():
            if header in l.upper():
                current_topic = topic
                found_header = True
                break
        if found_header: continue

        # Detect Question (starts with number.)
        if re.match(r'^\d+\.', l):
            if current_q:
                quizzes.append(current_q)
            current_q = {
                "topic": current_topic,
                "difficulty": "Medium",
                "question": l.split('.', 1)[1].strip(),
                "options": [],
                "answer": "",
                "explanation": ""
            }
        
        # Options
        elif re.match(r'^[A-D]\.', l):
            if current_q:
                current_q["options"].append(l.split('.', 1)[1].strip())
        
        # Answer
        elif "Answer:" in l:
            if current_q:
                current_q["answer"] = l.split("Answer:")[1].strip()
        
        # Explanation
        elif "Explanation:" in l:
            # We skip the "Explanation:" line itself but start grouping the next lines or handle current
            pass
        elif current_q and current_q["answer"] and not l.startswith("→"):
            # Accumulate explanation text
            current_q["explanation"] = (current_q["explanation"] + " " + l).strip()

    if current_q:
        quizzes.append(current_q)
    
    return quizzes

if __name__ == "__main__":
    data = parse_quizzes("src/quizzes.txt")
    print(json.dumps(data, indent=2))
